
document.querySelector('button').addEventListener('click', getNFT)

function getNFT(){
    let entropy = document.querySelector('input').value // get the user input from the text box.

    document.querySelector('img').src = `https://robohash.org/set_set3/bgset_bg1/${entropy}?size=500x500`// pic in dom
}

