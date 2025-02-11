let num = [5, 8, 2, 9, 3] 
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do nosso vetor é ${num[0]}`)

let pos= num.indexOf(1)

if ( pos == -1){
    console.log("O valor não existe!")
} else {
    console.log(`O valor ${num[pos]} está na posição ${pos}`)
}