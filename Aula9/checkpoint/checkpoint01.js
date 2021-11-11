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
            return check_tempo(tempo);
        case 'Macarrão':
            tempo_padrao = 8;
            return check_tempo(tempo);
        case 'Carne':
            tempo_padrao = 15;
            return check_tempo(tempo);
        case 'Feijão':
            tempo_padrao = 12;
            return check_tempo(tempo);
        case 'Brigadeiro':
            tempo_padrao = 8;
            return check_tempo(tempo);
        default:
            return "Prato Inexistente!";
    }
}

console.log(microondas('Macarrão',1));