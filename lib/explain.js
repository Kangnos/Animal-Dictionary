module.exports = {
    HTML:function(index_title, title, details, image_link, image_explain){
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
        </head>
        <body>
            <h1 class="Title">Animal Dictionary</h1>
            <div class="maincontainer">
                <div class="Animalname">
                    <a href="/">${index_title}</a>
                </div>
                <div class="boxcontainer">
                    <div class="box">
                        <a href="./Siberian tiger" class="image_atag">
                             <div class="image_div">
                                <img src="../tiger image/sibera(amuru) tiger box image.jpg" alt="" class="AnimalImg">
                             </div>
                             <div class="box_name">
                                시베리아 호랑이
                             </div>
                        </a>
                    </div>
                    <div class="box">
                        <a href="South chinese tiger" class="image_atag">
                            <div class="image_div">
                                <img src="../tiger image/South china tiger box image.jpg" alt="" class="AnimalImg">
                            </div>
                            <div class="box_name">
                                남중국 호랑이
                            </div>
                        </a>
                    </div>
                    <div class="box">
                        <a href="Malayan tiger" class="image_atag">
                            <div class="image_div">
                                <img src="../tiger image/malayan-tiger box image.jpg" alt="" class="AnimalImg">
                            </div>
                            <div class="box_name">
                                말레이 호랑이
                            </div>
                        </a>
                    </div>
                    <div class="box">
                        <a href="Javan tiger" class="image_atag">
                            <div class="image_div">
                                <img src="../tiger image/Javan tiger box image.jpg" alt="" class="AnimalImg">
                            </div>
                            <div class="box_name">
                                자바 호랑이
                            </div>
                        </a>
                    </div>
                    <div class="box">
                        <a href="Bengal tiger" class="image_atag">
                            <div class="image_div">
                                <img src="../tiger image/Bengal tiger box image.jpg" alt="" class="AnimalImg">
                            </div>
                            <div class="box_name">
                                벵갈 호랑이
                            </div>
                        </a>
                    </div>
                    <div class="box">
                        <a href="Karspy tiger" class="image_atag">
                            <div class="image_div">
                                <img src="../tiger image/Karspy tiger box image.jpg" alt="" class="AnimalImg">
                            </div>
                            <div class="box_name">
                                카스피 호랑이
                            </div>
                        </a>
                    </div>
                    <div class="box">
                        <a href="Balinese tiger" class="image_atag">
                            <div class="image_div">
                                <img src="../tiger image/Balinese tiger box image.png" alt="" class="AnimalImg">
                            </div>
                            <div class="box_name">
                                발리 호랑이
                            </div>
                        </a>
                    </div>
                    <div class="box">
                        <a href="Indochinese tiger" class="image_atag">
                            <div class="image_div">
                                <img src="../tiger image/Indochinese tiger box image.jpg" alt="" class="AnimalImg">
                            </div> 
                            <div class="box_name">
                                인도 차이나 호랑이
                            </div>
                        </a>
                    </div>
                    <div class="box">
                        <a href="Sumatran tiger" class="image_atag">
                            <div class="image_div">
                                <img src="../tiger image/Sumatran tiger box image.jpg" alt="" class="AnimalImg">
                            </div>
                            <div class="box_name">
                                수마트라 호랑이
                            </div>
                        </a>
                    </div>
                </div>
                <div class="explaincontainer">
                    <h1 class="title">${title}</h1>
                    <div class="explain">
                        ${details}
                    </div>
                    <div class="imagezone">
                        <img src="${image_link}" alt="">
                    </div>
                    <p class="image_explain">${image_explain}</p>
                </div>  
            </div>
        </body>
        </html>
        <link rel="stylesheet" href="../index.css">
        `
    }
}