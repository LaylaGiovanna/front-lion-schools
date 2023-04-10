'use strict'


function fetchApiData(){

    fetch('http://localhost:8080/v1/lion-school/cursos')
    .then((response) =>  response.json())
    .then( data =>{
        const list = document.querySelector('#fill_list')

        data.map((item)=>{
            const li = document.createElement('button')

            console.log(item.sigla)
            li.setAttribute('id', item)
            li.innerHTML = item.sigla
            list.appendChild(li)
        })
    })
}