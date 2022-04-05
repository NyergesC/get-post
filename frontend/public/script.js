fetch("./kismacska/data.json")
    .then(response => response.json())
    .then(data => {   
        for (const beer of data.cards) {
            document.getElementById('wrapper').insertAdjacentHTML("beforeend",  `
                    <div class="swiper-slide">
                        <div class="ribbon">
                            <span>Best Seller</span>
                        </div>
                        <div class="circle">
                            <div class="final-circle">
                                <img src="${beer.img}" alt="hol vagy kocsog?" width="300">
                            </div>
                            <img src="${beer.img}" alt="hol vagy kocsog?" width="300">
                        </div>
                        <h2>${beer.title}</h2><br>
                        <div>
                            <span>${beer.sub}</span> / <span> ${beer.text}</span>
                        </div>
                        <div>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </div>
                    `            
            )}
       
        }) 

