const sonic = document.querySelector('.sonic');
const tails = document.querySelector('.tails');
const espinho = document.querySelector('.espinho');
const fundo = document.querySelector('.fundo');
const grama= document.querySelector('.grama');
const subsolo = document.querySelector('.subsolo');
const pontos = document.getElementById('pontos');
const somPonto = new Audio('sons/ponto.mp3')
const somMorte = new Audio('sons/morte.mp3')
const somPulo = new Audio('sons/pulo.mp3')
const trilha = new Audio('sons/musicaTema.mp3')

window.addEventListener('load',function(){
    trilha.play();
})
trilha.addEventListener('ended',function(){
    trilha.currentTime = 0
    trilha.play()
})
 
 

const pulo = () =>{
  
    sonic.classList.add('pulo');
    somPulo.play()

    setTimeout(()=>{
        sonic.classList.remove('pulo');
    },500);  
}

const loop = setInterval(() =>{
    const posicaoEspinho = espinho.offsetLeft;
    const posicaoSonic = +window.getComputedStyle(sonic).bottom.replace('px','');

    if(posicaoEspinho <= 170 && posicaoEspinho > 0 && posicaoSonic < 230){
        espinho.style.animation = 'none';
        espinho.style.left = `${posicaoEspinho}px`

        sonic.style.animation = 'none';
       sonic.style.bottom = `${posicaoSonic}px`
  
       sonic.src = 'images/sonicMorto.png'
       tails.src = 'images/talesCansado.gif'
       somMorte.play()
    clearInterval(intervalo);
               sonic.style.width = '150px'
       
       fundo.style.animation = 'none';
       grama.style.animation = 'none'; 
       subsolo.style.animation = 'none';
       tails.style.animation = 'none';
       
       
       clearInterval(loop)
    }
},10);
document.addEventListener('keydown', pulo);

const cronometro = document.getElementById('cronometro');

let segundos = 0;
let minutos = 0;
let horas = 0;

function atualizarCronometro() {
    segundos++;

    if (segundos === 60) {
        segundos = 0;
        minutos++;

        if (minutos === 60) {
            minutos = 0;
            horas++;
        }
    }

    cronometro.textContent = `${adicionarZero(horas)}:${adicionarZero(minutos)}:${adicionarZero(segundos)}`;
}

function adicionarZero(valor) {
    return valor < 10 ? `0${valor}` : valor;
}

intervalo = setInterval(atualizarCronometro, 1000);

