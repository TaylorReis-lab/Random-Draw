const buttonDraw = document.querySelector(".button-start")

function drawRole() {
    const min = Math.ceil (document.querySelector(".input-one").value)
    const max = Math.floor (document.querySelector(".input-two").value)
    const valueResult = Math.floor(Math.random() * (max - min + 1)) + min;
    alert("O número sorteado foi " + valueResult)
}