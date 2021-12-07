function somando(a,b) {
    return a+b;
}

function subtraindo(a,b) {
    return a-b;
}

function multiplicando(a,b) {
    return a*b;
}

module.exports = {
    soma: somando,
    subtrai: subtraindo,
    multiplica: multiplicando
}