const items = [
    {
        id: 0,
        nome: 'Air Force 1',
        img: './imagens/nike/Air-Force-1.jpg',
        quantidade: 0,
        numberItem: 0
    },
    {
        id: 1,
        nome: 'Air Max 90',
        img: './imagens/nike/Air-Max-95.jpg',
        quantidade: 0,
        numberItem: 0
    },
    {
        id: 2,
        nome: 'Forum Mid',
        img: './imagens/adidas/FORUM MID.jpg',
        quantidade: 0,
        numberItem: 0
    },
]

initStore = () => {
    let containerProducts = document.querySelector('.mostSeen')
    items.map((val) => {
        containerProducts.innerHTML += `
        
        <div class="otherItem">
            <div class="image">
                <img src= "`+val.img+`" />
            </div>
            <div class="title">
                <h2>`+val.nome+`</h2>
                <a key="`+val.id+`" href="#">Adicionar ao carrinho!</a>
            </div>
        </div>

        `;
    })
}

initStore();

updateIconCart = () => {
    let containerCart = document.querySelector('.cart');
    const total = items.map(item => item.numberItem).reduce((prev, curr) => prev + curr, 0);

    items.map((val) => {
        if(val.numberItem > 0) {
        containerCart.innerHTML = ""

        containerCart.innerHTML += `
        
        <p class="total"x'>`+total+`</p>
        <img src= "./imagens/shopping-cart.png" />

        `;
        }
    })
}

let links = document.getElementsByTagName('a');

for(let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
        items[key].numberItem++;
        updateIconCart()
        return false;
    })
}

updateCart = () => {
    let itemsCart = document.getElementById("navCart");
    let img = document.getElementById("img");
    itemsCart.innerHTML = `<a href="#" class="closebtn" onclick="closeCart()"
            >&times;</a
        >`;
    items.map((val) => {
        if(val.quantidade > 0) {
            
            itemsCart.innerHTML += `
        
            <div> 
                <div id="img"> <img src= "`+val.img+`" /> </div> 
                <div>
                    <p>`+val.nome+`</p>
                    <p> Quantidade: `+val.quantidade+`</p>
                </div>
            </div>
        `;
        }
    })
}

for(let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
        items[key].quantidade++;
        updateCart()
        return false;
    })
}