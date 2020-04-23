var http = require('http')
var fs = require('fs')
var express = require('express')
var app = express()
var explain_page = require('./lib/explain.js')
var main_page = require('./lib/main_index.js')
var path = require('path')
var compression = require('compression');
app.use(compression());
app.use(express.static('public'));

app.get('/', function(request, response){
    var title = '동물의 왕국'
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
            var index_address = '../tiger/Tiger'
            fs.readFile('data/tiger_data/Tiger box','utf8', function(err, body) {
                var details_page = explain_page.HTML(index_tite, title, details, image_link, image_explain, body, index_address);
                response.send(details_page);
            });
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
                var index_address = '../leopard/Leopard'
                fs.readFile('data/leopard_data/Leopard box','utf8', function(err, body) {
                    var details_page = explain_page.HTML(index_tite, title, details, image_link, image_explain, body, index_address);
                    response.send(details_page);
                })
        });
    })
})
app.get('/cheetah/:pageId', function(request, response){
    fs.readdir('./data', function(err, filelist){
        var filteredId = path.parse(request.params.pageId).base
            fs.readFile(`data/cheetah_data/${filteredId}`, 'utf8', function(err, data){
                if ( err ) throw err;
                var arr = data.split("\r\n")
                var title = arr[0]
                var details = arr[1]
                var image_link = arr[2]
                var image_explain = arr[3]
                var index_tite = '치타(Cheetah)'
                var index_address = '../cheetah/Cheetah'
                fs.readFile('data/cheetah_data/Cheetah box','utf8', function(err, body) {
                    var details_page = explain_page.HTML(index_tite, title, details, image_link, image_explain, body, index_address);
                    response.send(details_page);
                })
        });
    })
})
app.get('/lion/:pageId', function(request, response){
    fs.readdir('./data', function(err, filelist){
        var filteredId = path.parse(request.params.pageId).base
            fs.readFile(`data/lion_data/${filteredId}`, 'utf8', function(err, data){
                if ( err ) throw err;
                var arr = data.split("\r\n")
                var title = arr[0]
                var details = arr[1]
                var image_link = arr[2]
                var image_explain = arr[3]
                var index_tite = '사자(lion)'
                var index_address = '../lion/Lion'
                fs.readFile('data/lion_data/Lion box','utf8', function(err, body) {
                    var details_page = explain_page.HTML(index_tite, title, details, image_link, image_explain, body, index_address);
                    response.send(details_page);
                })
        });
    })
})
app.get('/puma/:pageId', function(request, response){
    fs.readdir('./data', function(err, filelist){
        var filteredId = path.parse(request.params.pageId).base
            fs.readFile(`data/puma_data/${filteredId}`, 'utf8', function(err, data){
                if ( err ) throw err;
                var arr = data.split("\r\n")
                var title = arr[0]
                var details = arr[1]
                var image_link = arr[2]
                var image_explain = arr[3]
                var index_tite = '퓨마(puma)'
                var index_address = '../puma/Puma'
                fs.readFile('data/puma_data/Puma box','utf8', function(err, body) {
                    var details_page = explain_page.HTML(index_tite, title, details, image_link, image_explain, body, index_address);
                    response.send(details_page);
                })
        });
    })
})
app.get('/jaguar/:pageId', function(request, response){
    fs.readdir('./data', function(err, filelist){
        var filteredId = path.parse(request.params.pageId).base
            fs.readFile(`data/jaguar_data/${filteredId}`, 'utf8', function(err, data){
                if ( err ) throw err;
                var arr = data.split("\r\n")
                var title = arr[0]
                var details = arr[1]
                var image_link = arr[2]
                var image_explain = arr[3]
                var index_tite = '재규어(jaguar)'
                var index_address = '../jaguar/Jaguar'
                fs.readFile('data/jaguar_data/Jaguar box','utf8', function(err, body) {
                    var details_page = explain_page.HTML(index_tite, title, details, image_link, image_explain, body, index_address);
                    response.send(details_page);
                })
        });
    })
})


// 여기서 부턴 canifoirmia
app.get('/wolf/:pageId', function(request, response){
    fs.readdir('./data', function(err, filelist){
        var filteredId = path.parse(request.params.pageId).base
            fs.readFile(`data/wolf_data/${filteredId}`, 'utf8', function(err, data){
                if ( err ) throw err;
                var arr = data.split("\r\n")
                var title = arr[0]
                var details = arr[1]
                var image_link = arr[2]
                var image_explain = arr[3]
                var index_tite = '늑대(wolf)'
                var index_address = '../wolf/Wolf'
                fs.readFile('data/wolf_data/Wolf box','utf8', function(err, body) {
                    var details_page = explain_page.HTML(index_tite, title, details, image_link, image_explain, body, index_address);
                    response.send(details_page);
                })
        });
    })
})



app.listen(3000, function() {
    console.log("Example app is running on port 3000");
});
