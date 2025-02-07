function contar() {
    var ini = document.getElementById("txti")
    var fim = document.getElementById("txtf")
    var passos = document.getElementById("txtp")
    var res = document.getElementById("res")

    if (ini.value.length == 0 ||  fim.value.length == 0 || passos.value.length == 0 ) {
        window.alert("Não pode")
    } else {
        res.innerHTML = "Contando.. <br>"
        let i = Number (ini.value)
        let f = Number (fim.value)
        let p = Number (passos.value)
    
        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1f449}`
        }

        res.innerHTML += `\u{1f3c1}`
    }

}