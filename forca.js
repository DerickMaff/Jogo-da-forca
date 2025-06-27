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
const trunk = document.getElementById('cabeca-container'); // aparecer o corpo 
const little_cup = document.getElementById('tronco'); //aparecer tronco
const right_arm = document.getElementById('Braco-Di'); //Braço direito 
const left_arm = document.getElementById('Braco-Es'); //Braço esquerdo 
const left_lag = document.getElementById('Perna-es'); //Perna esquerda
const right_leg = document.getElementById('Perna-di'); //Perna direita 

/* Mostrar quando o usuario perde*/
const startTitle = document.getElementById('TituloComeco'); // mostra o primeiro titulo 
const end_loser = document.getElementById('final-loser');  // Container de mostrar final 
const Button_reloud = document.querySelector('.Button-Start-loser');

/* Mostrar quando o usuario ganha */
const end_start = document.getElementById('final-winner'); // Aparecer quando o usuario ganhar

/* Corpo do boneco completo */
const full_body = document.getElementById('container_body');
const Button_Winner_reloud = document.querySelector('.Button-winner');

// Fazer mudar a opacidade quando é apertado no 'TEXTO' para escrever qual vai ser a palavra da força
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
    main_clear.style.display = 'none';  //tirar a primeira parte
    error.style.display = 'block'; // aparecer a segunda
    question.style.display = 'block'  //aparecer as perguntas
    Mudar_Para_Tracos();
}

});


let counter_traits = []; // vetor para fazer os '_'

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
input_adivinha.value = '';  // Para depois do usuario mandar desaparecer a letra 
input_adivinha.focus(); // para quando o usuario mandar o cursor voltar


if (!Palavra_inteira.includes(Letra_escolhida) && !letra_errada.includes(Letra_escolhida)){

    letra_errada.push(Letra_escolhida); 
    Palavras_erradas.textContent = "ERROS:" + letra_errada.join(", ");
    
    console.log(letra_errada.length)
}

Body_appper(); // Conferir quando o jogador errar uma letra aparecer uma parte do corpo

check_winner(); //Conferir se o jogador ganhou

});
                
const Body_appper = () =>{
    if (letra_errada.length === 1){  // Contagem de erros
        trunk.style.display = 'block ';
        }
            if(letra_errada.length === 2 ){
            little_cup.style.display = 'block';
            }
                if(letra_errada.length === 3){
                        right_arm.style.display = 'block';
                }
                    if(letra_errada.length === 4){
                        left_arm.style.display = 'block';
                    }
                        if(letra_errada.length === 5){
                            left_lag.style.display = 'block';
                        }
                            if(letra_errada.length === 6){
                                right_leg.style.display = 'block';
                                gameOver();
                            }   
                        
                            
};    

const gameOver = () => {
    
    end_loser.style.display = 'block';
    error.style.display = 'none'; 
    question.style.display = 'none'; 
    startTitle.style.display = 'none';
    full_body.style.display =  'none';

    Button_reloud.addEventListener('click', () => {
        location.reload(); // fazer reloud na tela 
    });
};
    
const Winner = () => {
    end_start.style.display = 'block'; 
    error.style.display = 'none'; 
    question.style.display = 'none'; 
    full_body.style.display = 'none';
    startTitle.style.display = 'none';

    Button_Winner_reloud.addEventListener('click', () => {
        location.reload(); // reloud ao apertar no botão 
    });
};

// const check_winner = () => {
//     if(counter_traits === input_text.value.toLowerCase()){
//         Winner();
//     }
// }; 

