let valores = [2, 4, 7, 6, 9]
valores.indexOf(7)
/*for (let pos = 0; pos< valores.length ; pos++) {
    console.log(` A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}