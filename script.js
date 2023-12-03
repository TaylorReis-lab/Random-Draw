const buttonDraw = document.querySelector(".button-start")

function drawRole() {
    const min = Math.ceil (document.querySelector(".input-one").value)
    const max = Math.floor (document.querySelector(".input-two").value)
    
    if(min >= max){
        alert("O valor minimo tem que ser MENOR que o valor maximo")
    } else {
        const valueResult = Math.floor(Math.random() * (max - min + 1)) + min;
        alert("O número sorteado foi " + valueResult)
    }
}