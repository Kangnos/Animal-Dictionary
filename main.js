var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
var explain_page = require('./lib/explain.js');
var main_page = require('./lib/main_index.js');
var owl_page = require('./lib/Owl_index.js');
var owl_expalin_page = require('./lib/Owl_explain.js')
var path = require('path')
var compression = require('compression');
app.use(compression());
app.use(express.static('public'));

app.get('/', function(request, response){
    var title = '동물의 왕국'
    var main_index = main_page.HTML(title);
    response.send(main_index);
})


app.get('/tiger/:pageId', function(request, response){
    fs.readdir('./data', function(err, filelist){
        var filteredId = path.parse(request.params.pageId).base
        fs.readFile(`data/tiger_data/${filteredId}`, 'utf8', function(err, data){
            if ( err ) throw err;
            var arr = data.split("\r\n");
            var title = arr[0];
            var details = arr[1];
            var image_link = arr[2];
            var image_explain = arr[3];
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
                var index_tite = '사자(Lion)'
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
                var index_tite = '퓨마(Puma)'
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
                var index_tite = '재규어(Jaguar)'
                var index_address = '../jaguar/Jaguar'
                fs.readFile('data/jaguar_data/Jaguar box','utf8', function(err, body) {
                    var details_page = explain_page.HTML(index_tite, title, details, image_link, image_explain, body, index_address);
                    response.send(details_page);
                })
        });
    })
})


// 여기서 부턴 canifoirmia

app.get('/fox/:pageId', function(request, response){
    fs.readdir('./data', function(err, filelist){
        var filteredId = path.parse(request.params.pageId).base
            fs.readFile(`data/fox_data/${filteredId}`, 'utf8', function(err, data){
                if ( err ) throw err;
                var arr = data.split("\r\n")
                var title = arr[0]
                var details = arr[1]
                var image_link = arr[2]
                var image_explain = arr[3]
                var index_tite = '여우(Fox)'
                var index_address = '../fox/Fox'
                fs.readFile('data/fox_data/Fox box','utf8', function(err, body) {
                    var details_page = explain_page.HTML(index_tite, title, details, image_link, image_explain, body, index_address);
                    response.send(details_page);
                })
        });
    })
})

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
                var index_tite = '늑대(Wolf)'
                var index_address = '../wolf/Wolf'
                fs.readFile('data/wolf_data/Wolf box','utf8', function(err, body) {
                    var details_page = explain_page.HTML(index_tite, title, details, image_link, image_explain, body, index_address);
                    response.send(details_page);
                })
        });
    })
})

app.get('/dog/:pageId', function(request, response){
    fs.readdir('./data', function(err, filelist){
        var filteredId = path.parse(request.params.pageId).base
            fs.readFile(`data/dog_data/${filteredId}`, 'utf8', function(err, data){
                if ( err ) throw err;
                var arr = data.split("\r\n")
                var title = arr[0]
                var details = arr[1]
                var image_link = arr[2]
                var image_explain = arr[3]
                var index_tite = '개(Dog)'
                var index_address = '../dog/Dog'
                fs.readFile('data/dog_data/Dog box','utf8', function(err, body) {
                    var details_page = explain_page.HTML(index_tite, title, details, image_link, image_explain, body, index_address);
                    response.send(details_page);
                })
        });
    })
})


app.get('/macaw/:pageId', function(request, response){
    fs.readdir('./data', function(err, filelist){
        var filteredId = path.parse(request.params.pageId).base
            fs.readFile(`data/macaw_data/${filteredId}`, 'utf8', function(err, data){
                if ( err ) throw err;
                var arr = data.split("\r\n")
                var title = arr[0]
                var details = arr[1]
                var image_link = arr[2]
                var image_explain = arr[3]
                var index_tite = '금강앵무(Macaw)'
                var index_address = '../macaw/Macaw'
                fs.readFile('data/macaw_data/Macaw box','utf8', function(err, body) {
                    var details_page = explain_page.HTML(index_tite, title, details, image_link, image_explain, body, index_address);
                    response.send(details_page);
                })
        });
    })
})
app.get('/toucan/:pageId', function(request, response){
    fs.readdir('./data', function(err, filelist){
        var filteredId = path.parse(request.params.pageId).base
            fs.readFile(`data/toucan_data/${filteredId}`, 'utf8', function(err, data){
                if ( err ) throw err;
                var arr = data.split("\r\n")
                var title = arr[0]
                var details = arr[1]
                var image_link = arr[2]
                var image_explain = arr[3]
                var index_tite = '왕부리새(Toucan)'
                var index_address = '../toucan/Toucan'
                fs.readFile('data/toucan_data/Toucan box','utf8', function(err, body) {
                    var details_page = explain_page.HTML(index_tite, title, details, image_link, image_explain, body, index_address);
                    response.send(details_page);
                })
        });
    })
})
app.get('/owls', function(request, response){
    var title = '동물의 왕국'
    var owl_index = owl_page.HTML(title);
    response.send(owl_index);
})


app.get('/horned%20owl/:pageId', function(request, response){
    fs.readdir('./data', function(err, filelist){
        var filteredId = path.parse(request.params.pageId).base
            fs.readFile(`data/horned owl_data/${filteredId}`, 'utf8', function(err, data){
                if ( err ) throw err;
                var arr = data.split("\r\n")
                var title = arr[0]
                var details = arr[1]
                var image_link = arr[2]
                var image_explain = arr[3]
                var index_tite = '부엉이(Horned Owl)'
                var index_address = '../horned%20owl/Horned_owl'
                var midtitle = '부엉이의 왕국'
                var midtitle_site_address = '../owls'
                fs.readFile('data/horned owl_data/Horned owl box','utf8', function(err, body) {
                    var details_page = owl_expalin_page.HTML(index_tite, title, details, image_link, image_explain, body, index_address, midtitle_site_address, midtitle);
                    response.send(details_page);
                })
        });
    })
})
app.get('/burned%20owl/:pageId', function(request, response){
    fs.readdir('./data', function(err, filelist){
        var filteredId = path.parse(request.params.pageId).base
            fs.readFile(`data/burned owl_data/${filteredId}`, 'utf8', function(err, data){
                if ( err ) throw err;
                var arr = data.split("\r\n")
                var title = arr[0]
                var details = arr[1]
                var image_link = arr[2]
                var image_explain = arr[3]
                var index_tite = '올배미(Burned Owl)'
                var index_address = '../burned%20owl/Burned_owl'
                var midtitle = '부엉이의 왕국'
                var midtitle_site_address = '../owls'
                fs.readFile('data/burned owl_data/Burned owl box','utf8', function(err, body) {
                    var details_page = owl_expalin_page.HTML(index_tite, title, details, image_link, image_explain, body, index_address, midtitle_site_address, midtitle);
                    response.send(details_page);
                })
        });
    })
})


app.listen(3000, function() {
    console.log("Example app is running on port 3000");
});
