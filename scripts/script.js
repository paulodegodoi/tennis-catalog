let count = 1
document.getElementById("radio1").checked = true

let nameTennis = document.getElementById("nameTennis")
nameTennis.innerHTML = 'ULTRABOOST 5.0 DNA'

let priceTennis = document.getElementById("priceTennis")

let radio = document.getElementById("radio1").checked


const slideInterval = setInterval( function() {
    nextImage()
}, 5000)

function onclick1() {
    olderPrice.innerHTML = ''

    nameTennis.innerHTML = 'ULTRABOOST 5.0 DNA'
    priceTennis.innerHTML = 'R$1199,90'
    
    clearInterval(slideInterval)
}

function onclick2() {
    olderPrice.innerHTML = ''

    nameTennis.innerHTML = 'GRAND COURT BASE'
    priceTennis.innerHTML = 'R$349,99'

    clearInterval(slideInterval)
}

function onclick3() {

    let olderPrice = document.getElementById('olderPrice')
    olderPrice.innerHTML = 'R$349,90'
    priceTennis.innerHTML = 'R$199,99'

    clearInterval(slideInterval)
}

function onclick4() {
    olderPrice.innerHTML = ''

    nameTennis.innerHTML = 'Pegasus Trail 3'
    priceTennis.innerHTML = 'R$699,99'

    clearInterval(slideInterval)
}

function nextImage() {
    count++
    if(count>4) {
        count = 1
    }

    document.getElementById("radio"+ count).checked = true

    if(count === 1) {
        nameTennis.innerHTML = 'ULTRABOOST 5.0 DNA'
        priceTennis.innerHTML = 'R$1199,90'
    }
    if(count === 2) {
        nameTennis.innerHTML = 'GRAND COURT BASE'
        priceTennis.innerHTML = 'R$349,99'
    }
    if(count === 3) {
        nameTennis.innerHTML = 'D-Formation'
        let olderPrice = document.getElementById('olderPrice')
        olderPrice.innerHTML = 'R$349,90'
        priceTennis.innerHTML = 'R$199,99'
    }
    if(count === 4) {
        olderPrice.innerHTML = ''
        nameTennis.innerHTML = 'Pegasus Trail 3'
        priceTennis.innerHTML = 'R$699,99'
    }
}