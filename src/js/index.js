/* 

OBJETIVO 1 - quando clicarmos na seta de avançar, temos que mostrar o próximo cartão da lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
    - passo 2 - dar um jeito de identifcar o clique do usuário na seta avançar
    - passo 3 - fazer aparecer o próximo cartão da lista
    - passo 4 - buscar o cartão que esta selecionado e esconder

OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
    - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
    - passo 3 - fazer aparecer o cartão anterior da lista
    - passo 4 - buscar o cartão que está selecionado e esconder     

*/

/*
OBJETIVO 1 - quando clicarmos na seta de avançar, temos que mostrar o próximo cartão da lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
    - passo 2 - dar um jeito de identifcar o clique do usuário na seta avançar
    - passo 3 - fazer aparecer o próximo cartão da lista
    - passo 4 - buscar o cartão que esta selecionado e esconder
*/

// - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
const btnAvancar = document.getElementById('btn-avancar') //USA CONST APENAS QUANDO NÃO VAI MUDAR O VALOR DA VÁRIAVEL
const btnVoltar = document.getElementById('btn-voltar')

// - passo 3 - fazer aparecer o próximo cartão da lista
const tFotos = document.querySelectorAll('.foto') //PEGOU TODOS QUE TEM A CLASS CARTAO E COLOCOU NA VARIAVEL CARTOOES . = class

let fotoAtual = 0;
function esconderFotoSelecionado() {
    const fotoSelecionado = document.querySelector('.selecionado') //PEGA O CARTÃO QUE ESTÁ SELECIONADO
    fotoSelecionado.classList.remove('selecionado') // REMOVE A CLASSE SELECIONADO
}
function mostrarFoto(indiceFoto) {
    tFotos[indiceFoto].classList.add('selecionado') //VAI COMEÇAR COM 0 E SEMPRE Q EU CLICAR ELE PEGA A VARIAVEL cartaoAtual E FAZ UM ++
}

// - passo 2 - dar um jeito de identifcar o clique do usuário na seta avançar
btnVoltar.addEventListener('click', function () {
    if (fotoAtual === tFotos.length - 1) return; //FAZENDO PARAR O CODIGO QUANDO NÃO TIVER MAIS CARTÕES

    esconderFotoSelecionado()

    fotoAtual++;
    mostrarFoto(fotoAtual)
}) 

btnAvancar.addEventListener('click', function () {
    //VERIFICAR SE O CARTÃO Q ESTOU É O 0
    if (fotoAtual === 0 ) return;
    
    esconderFotoSelecionado()

    fotoAtual--;
    mostrarFoto(fotoAtual)
}) 