module.exports = {
    HTML:function(title, midtitle){
        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>동물의 왕국</title>
            </head>
            <body>
                <h1 class="title"><a href="/">${title}</a></h1>
                <h1 class="midtitle"><a href="/caniformia/">${midtitle}의 왕국</a></h1>
                <div class="Animals_container">
                    <a href="../caniformia/wolf/Wolf" title="늑대(Wolf)">
                        <img src="../caniformia_Main image/main_wolf.jpg" class="Animals_main_image">
                    </a>
                    <a href="../caniformia/fox/Fox" title="여우(Fox)">
                        <img src="../caniformia_Main image/main_fox.jpg" class="Animals_main_image">
                    </a>
                </div>
            </body>
            </html>
            
            <link rel="stylesheet" href="../main_index.css">
        `
    }
}