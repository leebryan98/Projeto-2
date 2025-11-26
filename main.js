const form = document.getElementById('form-cliente');
const nomeCliente = document.getElementById('nome-cliente');
const telefoneCliente = document.getElementById('telefone-cliente');
const sucessoMensagemContainer = document.querySelector('.success-message');
const erroMensagemContainer = document.querySelector('.erro-message');
let formEValido = false;
let linhas = '';

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.trim().split(' ');
    return nomeComoArray.length >= 2 && nomeComoArray[1] !=='';
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const sucessoMensagem = `Muito bem, cliente foi cadastrado com sucesso!`;

    formEValido = validaNome(nomeCliente.value);

    if (formEValido) {
        sucessoMensagemContainer.innerHTML = sucessoMensagem;
        sucessoMensagemContainer.style.display = 'block';
        erroMensagemContainer.style.display = 'none';
    } else {
        erroMensagemContainer.style.display = 'block';
        sucessoMensagemContainer.style.display = 'none';
    }
    
    adicionaLinha();
    atualizaTabela();

})

function adicionaLinha() {
        let linha = '<tr>';
        linha += `<td> ${nomeCliente.value}</td>`;
        linha += `<td> ${telefoneCliente.value}</td>`;
        linha += '</tr>';

        linhas += linha;

        nomeCliente.value = '';
        telefoneCliente.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

nomeCliente.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    if(!formEValido){
        nomeCliente.classList.add('error');
        erroMensagemContainer.style.display = 'block';
        sucessoMensagemContainer.style.display = 'none';
    } else {
        nomeCliente.classList.remove('error');
        erroMensagemContainer.style.display = 'none';
    }
});
