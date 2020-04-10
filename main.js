var http = require('http')
var fs = require('fs')
var express = require('express')
var app = express()
var index_page = require('./lib/index.js')
var explain_page = require('./lib/explain.js')
var path = require('path')

app.use(express.static('public'));

app.get('/', function(request, response){
    var title = '호랑이 (Tiger)'
    var index = index_page.HTML(title)
    response.send(index);
})
app.get('/tiger/:pageId', function(request, response){
    fs.readdir('./data', function(err, filelist){
        var filteredId = path.parse(request.params.pageId).base
            fs.readFile(`data/${filteredId}`, 'utf8', function(err, data){
                if ( err ) throw err;
                var arr = data.split("\r\n")
                var title = arr[0]
                var details = arr[1]
                var image_link = arr[2]
                var image_explain = arr[3]
                var index_tite = '호랑이 (Tiger)'
                var details_page = explain_page.HTML(index_tite, title, details, image_link, image_explain);
                response.send(details_page);
        });
    })
})


app.listen(3000, function() {
    console.log("Example app is running on port 3000");
});
