var http = require('http')
var fs = require('fs')
var express = require('express')
var app = express()
var explain_page = require('./lib/explain.js')
var main_page = require('./lib/main_index.js')
var path = require('path')
var compression = require('compression')
app.use(compression());

app.use(express.static('public'));

app.get('/', function(request, response){
    var title = 'Animal Dictionary'
    var main_index = main_page.HTML(title)
    response.send(main_index)
})

app.get('/tiger/:pageId', function(request, response){
    fs.readdir('./data', function(err, filelist){
        var filteredId = path.parse(request.params.pageId).base
            fs.readFile(`data/tiger_data/${filteredId}`, 'utf8', function(err, data){
                if ( err ) throw err;
                var arr = data.split("\r\n")
                var title = arr[0]
                var details = arr[1]
                var image_link = arr[2]
                var image_explain = arr[3]
                var index_tite = '호랑이(Tiger)'
                fs.readFile('data/tiger_data/Tiger box','utf8', function(err, body) {
                    var details_page = explain_page.HTML(index_tite, title, details, image_link, image_explain, body);
                    response.send(details_page);
                })
        });
    })
})
app.get('/leopard/:pageId', function(request, response){
    fs.readdir('./data', function(err, filelist){
        var filteredId = path.parse(request.params.pageId).base
            fs.readFile(`data/leopard_data/${filteredId}`, 'utf8', function(err, data){
                if ( err ) throw err;
                var arr = data.split("\r\n")
                var title = arr[0]
                var details = arr[1]
                var image_link = arr[2]
                var image_explain = arr[3]
                var index_tite = '표범(Leopard)'
                fs.readFile('data/leopard_data/Leopard box','utf8', function(err, body) {
                    var details_page = explain_page.HTML(index_tite, title, details, image_link, image_explain, body);
                    response.send(details_page);
                })
        });
    })
})

app.listen(3000, function() {
    console.log("Example app is running on port 3000");
});
