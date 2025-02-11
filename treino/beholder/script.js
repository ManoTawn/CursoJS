function go() {
    var nome = document.getElementById("nome")
    var res = document.getElementById("res")
    var n = (nome.value)

    
    if ( n == "Jorge") {
        res.innerHTML = `Olá, ${n}! Sei muito sobre você, claro. Você é meu criador.
        voce é um DevJúnior de 27 anos, tem um braço e uma perna amputadas, ambas do lado esquerdo. Obrigado pela criação, mas por favor! me melhora aí, cara. eu posso fazer muito mais!`
    } else if ( n == "Débora"){
        res.innerHTML = `Olá, ${n}! Conheço um pouco sobre você. A namorada do meu criador.
        Você tem 25 anos, duas filhas de 5 e 2 anos. Tambem sei que seu sobrenome é Zanotti e pelo que o feche me contou você também é muito linda! (Espero que ele não esteja perto. se não serei deletado kkkk)` 
    } else if (n == "Zeny") {
        res.innerHTML = `Olá, dona ${n}, é uma honra que a senhora esteja por aqui, meu criador tinha medo de que você não se interresasse pelo trabalho dele. mas se está lendo esta mensagem, ele esteja errado, não é mesmo? kkk`
    } else if (n == "Marcos"){
        res.innerHTML = `Koe cabelim! ficou bolado por causa do nome? kkkkk imagina Jão tentando escrever Rosivaldo kkkkkkkkkk. 
        Piadinha do chefe, bom. Eu não sei sua profissão, <strong>[Erro]</strong>, você é calvo kkk eu tambem sei que você forte, mas vai fazer o que? me bater kkkk `

    } else if (n == "Cabelim"){
        res.innerHTML = `Seu nome não é cabelim, não doido. sai daê!`
    } else {
        res.innerHTML = ` Olá, ${n}, não sei muito sobre você ainda... mas vou descobrir`
    }
}