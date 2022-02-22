let hashtag = '#';
let espaco = ' ';
let contEspacos = 0;
let MontandoCima = true;
let intervalMontandoBaixo = 0;
let time = 0;
let quant = 0;
let cont = 0;

function montarAmpulheta() {
    quant = Number(document.getElementById('areia').value);
    cont = (MontandoCima) ? ((quant % 2 == 1) ? quant + 1 : quant) : 2;
    (MontandoCima) ? montandoParteDeCima() : montandoParteDeBaixo();
}

function relatorio() {
    console.log('--------------------- Ampulheta ---------------------------------');

    quant = Number(document.getElementById('areia').value);

    for(let cont = quant; cont > 1; cont--) {
        if(cont % 2 == 0) {
            console.log(`#${espaco.repeat(contEspacos)}${hashtag.repeat(cont)}${espaco.repeat(contEspacos)}#`);
            contEspacos++;
        }
    }

    for(let cont = 2; cont <= quant; cont++) {
        if(cont % 2 == 0) {
            contEspacos--;
            console.log(`#${espaco.repeat(contEspacos)}#${espaco.repeat((cont == 2) ? 0 : cont-2)}#${espaco.repeat(contEspacos)}#`);
            if(cont == quant) {
                console.log(hashtag.repeat(quant+2));
            }
        }
    }

    console.log(`Tempo total da ampulheta: ${quant} segundos`);
    console.log('--------------------- Valendo... ---------------------------------');
}

function montandoParteDeCima() {
    console.log(hashtag.repeat(quant+2));
    for(let cont = quant; cont > 1; cont--) {
        if(cont % 2 == 0) {
            console.log(`#${espaco.repeat(contEspacos)}#${espaco.repeat(cont-2)}#${espaco.repeat(contEspacos)}#`);
            contEspacos++;
        }

        if(cont == 2) {
            MontandoCima = false;
            montarAmpulheta();
        }
    }
}

function montandoParteDeBaixo() {
    intervalMontandoBaixo = setInterval(() => {
        if(cont % 2 == 0) {
            contEspacos--;
            console.log(`#${espaco.repeat(contEspacos)}${hashtag.repeat(cont)}${espaco.repeat(contEspacos)}#`);
        }

        if(cont == quant) {
            console.log('Tempo gasto: ' + quant + ' segundos');
            MontandoCima = true;
            clearInterval(intervalMontandoBaixo);
        }

        cont++;
    }, 1000);
}