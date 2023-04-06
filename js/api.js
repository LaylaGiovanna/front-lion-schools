'use strict'


 const pesquisarCepPost = function()/* async() => */ {
    const url = `http://localhost:8080/v1/lion-school/cursos`

    const response = fetch(url)
    const dados =  response.json()

    return {
        sigla: dados.sigla
    }
}