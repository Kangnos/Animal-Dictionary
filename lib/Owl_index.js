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
                <div class="Animals_container">
                    <a href="../horn owl/Horn owl" title="부엉이(Horned Owl)" class="box">
                        <img src="https://kids.sandiegozoo.org/sites/default/files/2017-07/animal-hero-greathornedowl.jpg" class="Animals_main_image">
                        <div class ="name">부엉이</div>
                    </a>
                    <a href="../burn owl/Burn owl" title="올빼비(Burn Owl)" class="box">
                        <img src="https://wallpapercave.com/wp/WcOQA84.jpg" class="Animals_main_image">
                        <div class ="name">올빼비</div>
                    </a>
                </div>
                <div id="Owls_family_image_div">
                    <a href="https://i.pinimg.com/originals/f0/94/3b/f0943b43cb5af98f33d0a4ef577098d9.jpg" target="blank" title="Owl의 종류">
                        <img src="https://i.pinimg.com/originals/f0/94/3b/f0943b43cb5af98f33d0a4ef577098d9.jpg" id ="Owls_family_image">
                    </a>
                </div>
            </div>
            </body>
            </html>
            
            <link rel="stylesheet" href="../main_index.css">
        `
    }
}