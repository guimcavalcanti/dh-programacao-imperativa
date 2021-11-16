/* Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!". */

function microondas(comida, tempo) {

    let tempo_padrao = 0;

    function check_tempo(tempo) {
        if(tempo >= tempo_padrao && tempo < (tempo_padrao*2)) {
            return "Prato pronto, bom apetite!";
        } else if(tempo >= (tempo_padrao*2) && tempo < (tempo_padrao*3))  {
            return "Sua comida queimou! Prato pronto, bom apetite!";
        } else if(tempo >= (tempo_padrao*3)) {
            return "KABUMMM! Sua comida pipocou e sujou todo o microondas.";
        } else {
            return "Tempo Insuficiente!";
        } 
    }

    switch(comida) {
        case 'Pipoca':
            tempo_padrao = 10;
            break;
        case 'Macarrão':
            tempo_padrao = 8;
            break;
        case 'Carne':
            tempo_padrao = 15;
            break;
        case 'Feijão':
            tempo_padrao = 12;
            break;
        case 'Brigadeiro':
            tempo_padrao = 8;
            break;
        default:
            return "Prato Inexistente!";
    }
    return check_tempo(tempo);
}

/* Escolha entre as opções: 
    1 - Pipoca – 10 segundos (padrão);
    2 - Macarrão – 8 segundos (padrão);
    3 - Carne – 15 segundos (padrão);
    4 - Feijão – 12 segundos (padrão);
    5 - Brigadeiro – 8 segundos (padrão);  */

console.log(microondas('Brigadeiro',2));

// Alunos: Daniel Nunes, Guilherme Martins, Lucas Anselmo e Thais Lino