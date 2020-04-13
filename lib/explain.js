module.exports = {
    HTML:function(index_title, title, details, image_link, image_explain, body, index_address){
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
        </head>
        <body>
            <a href="/">
                <h1 class="Title">Animal Dictionary</h1>
            </a>
            <div class="maincontainer">
                <div class="Animalname">
                    <a href=${index_address}>${index_title}</a>
                </div>
                <div class="boxcontainer">
                    ${body}
                </div>
                <div class="explaincontainer">
                    <h1 class="title">${title}</h1>
                    <div class="explain">
                        ${details}
                    </div>
                </div>  
                <div>
                    <p class="image_explain">${image_explain}</p>
                    <div class="imagezone">
                        <img src="${image_link}" alt="">
                    </div>
                </div>
            </div>
        </body>
        </html>
        <link rel="stylesheet" href="../index.css">
        `
    }
}