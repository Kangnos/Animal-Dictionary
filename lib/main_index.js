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
            <div class="main_container">
                <h1 class="title"><a href="/">${title}</a></h1>
                
                <div class="SearchZone">
                    <h1>Search</h1>
                    <input onkeyup="filter()" type="text" id="value" placeholder="Type to Search">
                </div>
                <div class="Animals_container">
                    
                    <a href="../tiger/Tiger" title="호랑이(Tiger)" class="box">
                        <img src="https://s.marketwatch.com/public/resources/images/MW-HS311_Tiger_ZH_20190930120004.jpg" class="Animals_main_image">
                        <div class ="name">호랑이</div>
                    </a>
                    <a href="../leopard/Leopard" title="표범(Leopard)" class="box">
                        <img src="https://fullhdpictures.org/wp-content/uploads/2019/08/Leopard-Pictures-4K.jpg" class="Animals_main_image">
                        <div class ="name">표범</div>
                    </a>
                    <a href="../cheetah/Cheetah" title="치타(Cheetah)" class="box">
                        <img src="https://resize.hswstatic.com/w_907/gif/cheetah-1.jpg" class="Animals_main_image">
                        <div class ="name">치타</div>
                    </a>
                    <a href="../lion/Lion" title="사자(Lion)" class="box">
                        <img src="https://lionalert.org/wp-content/uploads/2020/01/Lion-Family-1024x675.jpg" class="Animals_main_image">
                        <div class ="name">사자</div>
                    </a>
                    <a href="../puma/Puma" title="퓨마(Puma)" class="box">
                        <img src="https://wallpapercave.com/wp/wp5221822.jpg" class="Animals_main_image">
                        <div class ="name">퓨마</div>
                    </a>
                    <a href="../jaguar/Jaguar" title="재규어(Jaguar)" class="box">
                        <img src="https://i.pinimg.com/originals/33/c6/4b/33c64bc9d03d9b45bd8467d02c5ec00a.jpg" class="Animals_main_image">
                        <div class ="name">재규어</div>
                    </a>
                    <a href="../fox/Fox" title="여우(Fox)" class="box">
                        <img src="https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" class="Animals_main_image">
                        <div class ="name">여우</div>
                    </a>
                    <a href="../wolf/Wolf" title="늑대(Wolf)" class="box">
                        <img src="https://post-phinf.pstatic.net/MjAxNzExMjNfNTgg/MDAxNTExNDI4MDAyMDEx.6z3MjGNg-vTD33hXKj_5j-ze8QjLJJEHlT-I85H0Lqwg.9DkCVDo6-cr477SE1h8knNZWrmN4MlgRiwP-auqMM3Ug.JPEG/%EB%8A%91%EB%8C%80_%286%29.jpg?type=w1200" class="Animals_main_image">
                        <div class ="name">늑대</div>
                    </a>
                    <a href="../dog/Dog" title="개(Dog)" class="box">
                        <img src="https://wallpapertag.com/wallpaper/full/b/3/2/690392-golden-retriever-background-1920x1080-1080p.jpg" class="Animals_main_image">
                        <div class ="name">개</div>
                    </a>
                    <a href="../macaw/Macaw" title="금강앵무(Macaw)" class="box">
                        <img src="https://cdn.britannica.com/s:800x450,c:crop/87/196687-138-2D734164/facts-parrots.jpg" class="Animals_main_image">
                        <div class ="name">금강앵무</div>
                    </a>
                    <a href="../toucan/Toucan" title="왕부리새(Toucan)" class="box">
                        <img src="https://animalcorner.org/wp-content/uploads/2015/02/toco-toucan-2.jpg" class="Animals_main_image">
                        <div class ="name">왕부리새</div>
                    </a>
                    <a href="../owls" title="올빼비(Owls)" class="box">
                        <img src="https://imgs2.photo4me.com/thumbnails/7422/343206_m.jpeg" class="Animals_main_image">
                        <div class ="name">부엉이&올빼미</div>
                    </a>
                </div>
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