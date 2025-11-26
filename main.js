const form = document.getElementById('form-cliente');
const nomeCliente = document.getElementById('nome-cliente');
const telefoneCliente = document.getElementById('telefone-cliente');
const mensagemSucessoContainer = document.querySelector('.success-message');
const mensagemErroContainer = document.querySelector('.erro-message');
formEValido = false;
let linhas = '';

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.trim().split(' ');
    return nomeComoArray.length >= 2 && nomeComoArray[1] !=='';
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const sucessoMensagem = `Cliente cadastrado com sucesso!`;

    formEValido = validaNome(nomeCliente.value);

    if(formEValido) {
        mensagemSucessoContainer.innerHTML = sucessoMensagem;
        mensagemSucessoContainer.style.display = 'block';
        mensagemErroContainer.style.display = 'none';

        let linha = '<tr>';
        linha += `<td> ${nomeCliente.value}</td>`;
        linha += `<td> ${telefoneCliente.value}</td>`;
        linha += '</tr>';

        linhas += linha;

        nomeCliente.value = '';
        telefoneCliente.value = '';
    } else {
        mensagemErroContainer.style.display = 'block';
        mensagemSucessoContainer.style.display = 'none';
    }

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
})

nomeCliente.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);
    
    if(!formEValido) {
        nomeCliente.classList.add('error');
        mensagemErroContainer.style.display = 'block';
        mensagemSucessoContainer.style.display = 'none';
    } else {
        nomeCliente.classList.remove('error');
        mensagemErroContainer.style.display = 'none';
    }
});