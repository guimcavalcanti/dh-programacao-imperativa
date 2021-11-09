console.log("---- Microdesafio 01 ----")

function podeSubir(altura, acompanhante) {
    
    let podeSubir = false;

    if (altura >= 1.40 && altura <= 2.00) {
        podeSubir = true;
    } else if (altura < 1.40 && altura >= 1.20 && acompanhante == true) {
        podeSubir = true;
    } else {
        podeSubir;
    }

    return podeSubir;
}


console.log(podeSubir(2.10,true))
console.log(podeSubir(2.10,false))
console.log(podeSubir(1.88,true))
console.log(podeSubir(1.88,false))
console.log(podeSubir(1.35,true))
console.log(podeSubir(1.35,false))
console.log(podeSubir(1.15,true))
console.log(podeSubir(1.15,false))

console.log("---- Microdesafio 02 ----")

function podeSubir2(altura, acompanhante) {
    
    let podeSubir = false;

    if (altura >= 1.40 && altura <= 2.00) {
        podeSubir = "Acesso autorizado!";
    } else if (altura < 1.40 && altura >= 1.20 && acompanhante == true) {
        podeSubir = "Acesso autorizado com acompanhante!";
    } else {
        podeSubir = "Acesso negado!";
    }

    return podeSubir;
}

console.log(podeSubir2(2.10,true))
console.log(podeSubir2(2.10,false))
console.log(podeSubir2(1.88,true))
console.log(podeSubir2(1.88,false))
console.log(podeSubir2(1.35,true))
console.log(podeSubir2(1.35,false))
console.log(podeSubir2(1.15,true))
console.log(podeSubir2(1.15,false))