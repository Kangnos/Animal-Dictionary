module.exports = {
    HTML:function(title, body){
        return `
        <!DOCTYPE html>
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
                    <a href="/">${title}</a>
                </div>
                <div class="boxcontainer">
                    <div class="box">
                        <a href="tiger/Siberian tiger" class="image_atag">
                             <div class="image_div">
                                <img src="tiger image/sibera(amuru) tiger box image.jpg" alt="" class="AnimalImg">
                             </div>
                             <div class="box_name">
                                시베리아 호랑이
                             </div>
                        </a>
                    </div>
                    <div class="box">
                        <a href="tiger/Southchinese tiger" class="image_atag">
                            <div class="image_div">
                                <img src="tiger image/South china tiger box image.jpg" alt="" class="AnimalImg">
                            </div>
                            <div class="box_name">
                                남중국 호랑이
                            </div>
                        </a>
                    </div>
                    <div class="box">
                        <a href="tiger/malayan tiger" class="image_atag">
                            <div class="image_div">
                                <img src="tiger image/malayan-tiger box image.jpg" alt="" class="AnimalImg">
                            </div>
                            <div class="box_name">
                                말레이 호랑이
                            </div>
                        </a>
                    </div>
                    <div class="box">
                        <a href="tiger/Javan tiger" class="image_atag">
                            <div class="image_div">
                                <img src="tiger image/Javan tiger box image.jpg" alt="" class="AnimalImg">
                            </div>
                            <div class="box_name">
                                자바 호랑이
                            </div>
                        </a>
                    </div>
                    <div class="box">
                        <a href="tiger/Bengal tiger" class="image_atag">
                            <div class="image_div">
                                <img src="tiger image/Bengal tiger box image.jpg" alt="" class="AnimalImg">
                            </div>
                            <div class="box_name">
                                뱅갈 호랑이
                            </div>
                        </a>
                    </div>
                    <div class="box">
                        <a href="tiger/Karspy tiger" class="image_atag">
                            <div class="image_div">
                                <img src="tiger image/Karspy tiger box image.jpg" alt="" class="AnimalImg">
                            </div>
                            <div class="box_name">
                                카스피 호랑이
                            </div>
                        </a>
                    </div>
                    <div class="box">
                        <a href="tiger/Balinese tiger" class="image_atag">
                            <div class="image_div">
                                <img src="tiger image/Balinese tiger box image.png" alt="" class="AnimalImg">
                            </div>
                            <div class="box_name">
                                발리 호랑이
                            </div>
                        </a>
                    </div>
                    <div class="box">
                        <a href="tiger/Indochinese tiger" class="image_atag">
                            <div class="image_div">
                                <img src="tiger image/Indochinese tiger box image.jpg" alt="" class="AnimalImg">
                            </div> 
                            <div class="box_name">
                                인도 차이나 호랑이
                            </div>
                        </a>
                    </div>
                    <div class="box">
                        <a href="tiger/Sumatran tiger" class="image_atag">
                            <div class="image_div">
                                <img src="tiger image/Sumatran tiger box image.jpg" alt="" class="AnimalImg">
                            </div>
                            <div class="box_name">
                                수마트라 호랑이
                            </div>
                        </a>
                    </div>
                </div>
                <div class="explaincontainer">
                    <h1 class="title">호랑이(Tiger)</h1>
                    <div class="explain">
                        아시아에 서식하는 식육목 고양잇과 포유류. 현존하는 모든 고양잇과 동물들 중 가장 큰 동물로 수컷의 무게는 100kg-360kg, 암컷의 무게는 70~200kg 정도 나간다.<br>
                        IUCN 멸종 위기 등급 EN인 멸종 위기 종이기도 하다. 9개의 종들 중 6종만 생존해있고, 나머지 종들은  멸종한 상태이다.
                        또한 호랑이는 대한민국의 상징이다.
                    </div>
                    <div class="imagezone">
                        <img src="hodori.png" alt="">
                        
                    </div>
                    <p class="image_explain">88올림픽 마스코트 호돌이</p>
                </div>  
            </div>
        </body>
        </html>
        <link rel="stylesheet" href="index.css">
        `;
    }
}