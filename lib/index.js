module.exports = {
    HTML:function(Animal_title, body){
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${Animal_title}</title>
        </head>
        <body>
            <a href="/">
                <h1 class="Title">Animal Dictionary</h1>
            </a>
            <div class="maincontainer"> 
                <div class="Animalname">
                    <a href="/tiger">${Animal_title}</a>
                </div>
                ${body}
                <div class="explaincontainer">
                    <h1 class="title">${Animal_title}</h1>
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