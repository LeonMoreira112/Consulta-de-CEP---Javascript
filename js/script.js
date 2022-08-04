
const addressForm = document.querySelector('#address-form');
const cepInput = document.querySelector('#cep');
const enderecoInput = document.querySelector('#endereco');
const numeroInput = document.querySelector('#numero');
const bairroInput = document.querySelector('#bairro');
const cidadeInput = document.querySelector('#cidade');
const estadoInput = document.querySelector('#estado');


cepInput.addEventListener("keyup", (e) => {
    const inputValue = e.target.value;

    // Checar se tem 8 dígitos
    if (inputValue.length === 8) {
        getAddress(inputValue);
    }
});


const getAddress = async (cep) => {
    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

    const response = await fetch(apiUrl);

    const data = await response.json();

    enderecoInput.value = data.logradouro;
    bairroInput.value = data.bairro;
    cidadeInput.value = data.localidade;
    estadoInput.value = data.uf;
};
