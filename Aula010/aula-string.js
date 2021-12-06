console.log("----- MÉTODOS DE STRING -----");

let frase = "  Eu gosto de JavaScript     ";

// .length() - Retorna o tamanho da cadeia de texto
console.log(frase.length);

// .indexOf("caractere ou palavra") - Retorna a posição inicial de um texto
console.log(frase.indexOf("JavaScript"));
console.log(frase.indexOf("Python")); // retorna -1 pela palavra não existir na string
console.log(frase.indexOf("o")); // retorna a primeira aparição do caractere

// .slice(inicio, final) Extrai um pedaço da string
console.log(frase.slice(2,4));
console.log(frase.slice(5,10));

// .trim() - Remove espaços em branco antes e depois da primeira ocorrência de um caractere alfanumérico
console.log(frase);
console.log(frase.trim());

// .split(caractere) - Converte uma string em um array
console.log(frase);
console.log(frase.split(" "))

// .replace(texto1, texto2) - Substitui parte do texto dentro de uma string

let fraseNova = frase.replace("gosto", "amo");
console.log(fraseNova);