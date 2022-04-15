let count = 1
document.getElementById("radio1").checked = true

let nameTennis = document.getElementById("nameTennis")
nameTennis.innerHTML = 'ULTRABOOST 5.0 DNA'

let radio4 = document.getElementById("radio4").checked


setInterval( function() {
    nextImage()
}, 5000)

function onclick1() {
    radio4.checked = true
    nameTennis.innerHTML = 'ULTRABOOST 5.0 DNA'
}

function onclick2() {
    radio4.checked = true
    nameTennis.innerHTML = 'GRAND COURT BASE'
}

function onclick3() {
    radio4.checked = true
    nameTennis.innerHTML = 'D-Formation'
}

function onclick4() {
    radio4.checked = true
    nameTennis.innerHTML = 'Pegasus Trail 3'
}

function nextImage() {
    count++
    if(count>4) {
        count = 1
    }

    document.getElementById("radio"+ count).checked = true

    if(count === 1) {
        nameTennis.innerHTML = 'ULTRABOOST 5.0 DNA'
    }
    if(count === 2) {
        nameTennis.innerHTML = 'GRAND COURT BASE'
    }
    if(count === 3) {
        nameTennis.innerHTML = 'D-Formation'
    }
    if(count === 4) {
        nameTennis.innerHTML = 'Pegasus Trail 3'
    }
}