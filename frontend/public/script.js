fetch("./kismacska/data.json")
    .then(response => response.json())
    .then(data => {   
        for (const beer of data.cards) {
            document.getElementById('wrapper').insertAdjacentHTML("beforeend",  `
                    <div class="swiper-slide">
                        <img src="${beer.img}" alt="hol vagy kocsog?" >
                        <h2>${beer.title}</h2><br>
                        <p>${beer.sub}</p><br>
                        <p> ${beer.text}</p><br>
                    </div>
                    `            
            )}
       
        }) 

