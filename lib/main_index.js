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
                
                <div class="SearchZone">
                    <h1>Search</h1>
                    <input onkeyup="filter()" type="text" id="value" placeholder="Type to Search">
                </div>
                <div class="Animals_container">
                    
                    <a href="../tiger/Tiger" title="호랑이(Tiger)" class="box">
                        <img src="../Main image/main_tiger.jpg" class="Animals_main_image">
                        <div class ="name">호랑이</div>
                    </a>
                    <a href="../leopard/Leopard" title="표범(Leopard)" class="box">
                        <img src="../Main image/main_leopard.jpg" class="Animals_main_image">
                        <div class ="name">표범</div>
                    </a>
                    <a href="../cheetah/Cheetah" title="치타(Cheetah)" class="box">
                        <img src="../Main image/main_cheetah.jpg" class="Animals_main_image">
                        <div class ="name">치타</div>
                    </a>
                    <a href="../lion/Lion" title="사자(Lion)" class="box">
                        <img src="../Main image/main_lion.jpg" class="Animals_main_image">
                        <div class ="name">사자</div>
                    </a>
                    <a href="../puma/Puma" title="퓨마(Puma)" class="box">
                        <img src="../Main image/main_puma.jpg" class="Animals_main_image">
                        <div class ="name">퓨마</div>
                    </a>
                    <a href="../jaguar/Jaguar" title="재규어(Jaguar)" class="box">
                        <img src="../Main image/main_Jaguar.jpg" class="Animals_main_image">
                        <div class ="name">재규어</div>
                    </a>
                    <a href="../fox/Fox" title="여우(Fox)" class="box">
                        <img src="../Main image/main_fox.jpg" class="Animals_main_image">
                        <div class ="name">여우</div>
                    </a>
                    <a href="../wolf/Wolf" title="늑대(Wolf)" class="box">
                        <img src="../Main image/main_wolf.jpg" class="Animals_main_image">
                        <div class ="name">늑대</div>
                    </a>
                </div>
            </body>
            </html>
            
            <link rel="stylesheet" href="../main_index.css">
            <script type="text/javascript">
                function filter(){
            
                var value, name, item, i;
            
                value = document.getElementById("value").value.toUpperCase();
                item = document.getElementsByClassName("box");
                for(i=0;i<item.length;i++){
                    name = item[i].getElementsByClassName("name");
                    if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){ // inneHTML은 자바스크립트에서도 HTML요소에 접근할 수 있다. indexOf는 문자열 내에서 특정한 문자열의 index 값을 리턴한다. 찾는 문자열이 없을 경수 -1을 리턴함
                        item[i].style.display = "inline-block";
                        
                    }else{
                        item[i].style.display = "none";
                    }
                }
            }
            </script>
        `
    }
}