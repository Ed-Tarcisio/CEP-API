const button = document.querySelector('#button')

button.addEventListener("click", function (e) {
    e.preventDefault()
    validarCEP()
}
)

function validarCEP() {

    let seuCEP = document.getElementById("inpCEP").value
    const error = document.querySelector('.error-msg')

    if (seuCEP.length === 8) {

        let url = `https://viacep.com.br/ws/${seuCEP}/json/`

        CEPdata(url)
        
        error.style.display = "none"
    } else {
        /* alert("CEP inválido.") */
        error.style.display = "flex"
    }
}

function CEPdata(urlAPI) {
    fetch(urlAPI).then(function (response) {
        response.json().then(function (data) {
            mostrarDados(data)
        })
    })
}

function mostrarDados(dados) {
    let CEP = document.getElementById("CEP")
    CEP.innerHTML = dados.cep

    let Logradouro = document.getElementById("Logradouro")
    Logradouro.innerHTML = dados.logradouro

    let Complemento = document.getElementById("Complemento")
    Complemento.innerHTML = dados.complemento

    let Bairro = document.getElementById("Bairro")
    Bairro.innerHTML = dados.bairro

    let Localidade = document.getElementById("Localidade")
    Localidade.innerHTML = dados.localidade

    let UF = document.getElementById("UF")
    UF.innerHTML = dados.uf

    let IBGE = document.getElementById("IBGE")
    IBGE.innerHTML = dados.ibge

    let GIA = document.getElementById("GIA")
    GIA.innerHTML = dados.gia

    let DDD = document.getElementById("DDD")
    DDD.innerHTML = dados.ddd

    let SIAFI = document.getElementById("SIAFI")
    SIAFI.innerHTML = dados.siafi
}
