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
                
                </div>
            </body>
            </html>
            
            <link rel="stylesheet" href="../main_index.css">
        `
    }
}