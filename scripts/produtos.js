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
    {
        id: 3,
        nome: 'HU NMD',
        img: './imagens/adidas/HU NMD.jpg',
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
                <button><img src='/imagens/shopping-bag.png'><a key="`+val.id+`" href="#">Adicionar</a></button>
            </div>
        </div>

        `;
    })
}

initStore();

updateIconCart = () => {
    let containerCart1 = document.getElementsByClassName("cart")[0];
    let containerCart2 = document.getElementsByClassName("cart")[1];
    const total = items.map(item => item.numberItem).reduce((prev, curr) => prev + curr, 0);

    items.map((val) => {
        if(val.numberItem > 0) {
        containerCart1.innerHTML = ""
        containerCart2.innerHTML = ""

        containerCart1.innerHTML += `
        
        <p class="total">`+total+`</p>
        <img src= "./imagens/shopping-bag.png" style="width: 30px" />

        `;

        containerCart2.innerHTML += `
        
        <p class="total">`+total+`</p>
        <img src= "./imagens/shopping-bag.png" style="width: 30px" />

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
    itemsCart.innerHTML = `
        <div class="headerCart">
            <h3>Minha sacola de compras</h3>
            <a href="#" class="closebtn" onclick="closeCart()">
                &times;
            </a>
        </div>`;
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