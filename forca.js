/* Primeira parte (Digitar uma palavra) */
const clear_begi = document.getElementById('BotaoDeIrParaAsPerguntas'); // Fazer o efeito quando apertar o botao
const main_clear = document.getElementById('ContainerPrincipal');  // quando é apertado o botão isso vai desaparecer 
const input_text = document.getElementById('PalavaraEscolhida');  // É usado para ver quantos caracteres foi colocado

/* Segunda parte (Aparecer a palavra digitada) */ 
const question = document.getElementById('CaixasDePerguntas');  // Puxando a div quqe vai aparecer com os risco " _ "  pra adivinhar 
const traits = document.getElementById('MudarParaTracos');
const input_adivinha = document.getElementById('AdivinhaLetra');
const error = document.getElementById('box-erro');

/* Parte para conferiri a palavra */
const see_word = document.getElementById('BotaoLetra1');
const wrong = document.getElementById('PalavrasErradas'); 

/* Parte de aparecer o corpo conforme o erro */
const trunk = document.getElementById('corpo'); // aparecer o corpo 
const cabeca_appear = document.getElementById('Cabeca')




// Fazer mudar a pocidade quando é apertado no 'TEXTO' para escrever qual vai ser a palavra da força
input_text.addEventListener('click', () => {
input_text.style.opacity = 1;

});


/* Poder apertar enter e funcionar como o botao*/
input_adivinha.addEventListener('keydown', (event) => {

    if ( event.keyCode ===13) {
            see_word.click();
    }
});


/*  Evento para mudar de cor o input de adivinhar (segunda parte ) */
input_adivinha.addEventListener('click', () => {

input_adivinha.style.opacity = 1;
input_adivinha.style.background ='rgba(87, 193, 34, 0.803)';
});

input_adivinha.addEventListener('blur', () => {
input_adivinha.style.opacity = 0.3;
input_adivinha.style.background = ' white';  // Sumir a cor dentro do input (sumir com o verde ) 
});



// Fazer dessaparecer quando o jogadores por a apalvara para a forca
clear_begi.addEventListener('click' , () => {

    const Palavra = input_text.value.length; 
if (  Palavra === 0  ){

    input_text.placeholder= 'ERRO, digite alguma coisa';
    
}else{


    error.style.display = 'block'; // aparecer a segunda
    main_clear.style.display = 'none';  //tirar a primeira parte
    question.style.display = 'block'  //aparecer as perguntas
    Mudar_Para_Tracos();
}

});


let counter_traits = []; // vetor para fazer os ' __ '

function Mudar_Para_Tracos(){  //fazer os traços do jogo 
counter_traits = [];
let text = input_text.value.toLowerCase();

for(let i of text){
    
    if(i === ' '){
        
        counter_traits.push("."); // dar espaços
    }
    else{
        
        counter_traits.push("_");  // trocar pela letra
    }
}
traits.textContent = counter_traits.join(" ");  // 'join(" ")' serve para mostrar com os espaços 

}


let letra_errada = [];  // marcador de quantas letras erradas
see_word.addEventListener('click', () => {

    const Palavra_inteira = input_text.value.toLowerCase();
    const Letra_escolhida = input_adivinha.value.toLowerCase();
    const Palavras_erradas = wrong;

for(let i = 0; i< Palavra_inteira.length; i++){


    if( Palavra_inteira[i] === Letra_escolhida){
    
        counter_traits[i] = Letra_escolhida;

    }
    
}


traits.textContent = counter_traits.join(" ");
input_adivinha.value = '';
input_adivinha.focus();


if (!Palavra_inteira.includes(Letra_escolhida) && !letra_errada.includes(Letra_escolhida)){

    letra_errada.push(Letra_escolhida); 
    Palavras_erradas.textContent = "ERROS:" + letra_errada.join(", ");
    
    console.log(letra_errada.length)
}

if (letra_errada.length === 1){  // Contagem de erros

cabeca_appear.style.display = 'block'
trunk.style.display = 'block '

console.log('cachorro')

}
    
});