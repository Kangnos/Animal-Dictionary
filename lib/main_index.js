module.exports = {
    HTML:function(title){
        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Animal Dictionary</title>
            </head>
            <body>
                <a href="">
                    <h1 class="title">${title}</h1>
                </a>
                <div class="Animals_container">
                    <a href="/tiger" title="호랑이(Tiger)">
                        <img src="../Main image/main_tiger.jpg" class="Animals_main_image">
                    </a>
                    <a href="/leopard" title="표범(Leopard)">
                        <img src="../Main image/main_leopard.jpg" class="Animals_main_image">
                    </a>
                    <a href="" title="치타(Cheetah)">
                        <img src="../Main image/main_cheetah.jpg" class="Animals_main_image">
                    </a>
                    <a href="" title="사자(Lion)">
                        <img src="../Main image/main_lion.jpg" class="Animals_main_image">
                    </a>
                    <a href="" title="퓨마(Puma)">
                        <img src="../Main image/main_puma.jpg" class="Animals_main_image">
                    </a>
                    <a href="" title="재규어(Jaguar)">
                        <img src="../Main image/main_Jaguar.jpg" class="Animals_main_image">
                    </a>
                </div>
            </body>
            </html>
            
            <link rel="stylesheet" href="../main_index.css">
        `
    }
}