function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = "manha.jpg"
        document.body.style.background = "rgb(235, 150, 3)"
    } else if (hora >= 12 && hora < 18){
        img.src = "tarde.jpg"
        document.body.style.background = "rgba(0, 202, 253, 0.98)"
    } else {
        img.src = "noite.jpg"
        document.body.style.background = "rgba(0, 0, 0, 0.564)"
    }
}

