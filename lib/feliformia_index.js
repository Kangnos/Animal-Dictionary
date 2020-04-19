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
                <h1 class="midtitle"><a href="/feliformia">${midtitle}의 왕국</a></h1>
                <div class="Animals_container">
                    <a href="../feliformia/tiger/Tiger" title="호랑이(Tiger)">
                        <img src="../feliformia_Main image/main_tiger.jpg" class="Animals_main_image">
                    </a>
                    <a href="../feliformia/leopard/Leopard" title="표범(Leopard)">
                        <img src="../feliformia_Main image/main_leopard.jpg" class="Animals_main_image">
                    </a>
                    <a href="../feliformia/cheetah/Cheetah" title="치타(Cheetah)">
                        <img src="../feliformia_Main image/main_cheetah.jpg" class="Animals_main_image">
                    </a>
                    <a href="../feliformia/lion/Lion" title="사자(Lion)">
                        <img src="../feliformia_Main image/main_lion.jpg" class="Animals_main_image">
                    </a>
                    <a href="../feliformia/puma/Puma" title="퓨마(Puma)">
                        <img src="../feliformia_Main image/main_puma.jpg" class="Animals_main_image">
                    </a>
                    <a href="../feliformia/jaguar/Jaguar" title="재규어(Jaguar)">
                        <img src="../feliformia_Main image/main_Jaguar.jpg" class="Animals_main_image">
                    </a>
                </div>
            </body>
            </html>
            
            <link rel="stylesheet" href="../main_index.css">
        `
    }
}