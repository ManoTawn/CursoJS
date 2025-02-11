function tabuada() {
 let num = document.getElementById("txtn")  
 let tab = document.getElementById("seltab")
if (num.value.length == 0) {
  window.alert("Não pode")
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerText = ''
         while(c <= 100) {
            let item = document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
         }
    }


}