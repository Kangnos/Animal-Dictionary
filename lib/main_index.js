module.exports = {
    HTML:function(title){
        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>동물의 왕국</title>
            </head>
            <body>
                <a href="/">
                    <h1 class="title">${title}</h1>
                </a>
                <div class="Animals_container">
                    <a href="/feliformia" title="고양이아목(고양이과 동물)">
                        <img src="../Main image/Feliformia animals image.jpg" class="Animals_main_image">
                    </a>
                    <a href="/caniformia" title="개아목(개과 동물)">
                        <img src="../Main image/Caniformia animals image.jpg" class="Animals_main_image">
                    </a>
                </div>
            </body>
            </html>
            
            <link rel="stylesheet" href="../main_index.css">
        `
    }
}