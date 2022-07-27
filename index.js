"use strict"

const input_todo = document.getElementById('input_todo')
const pokemon_button = document.getElementById('pokemon_indiv')

const url = 'https://pokeapi.co/api/v2/pokemon?limit=102&offset=0'

const getData = () => {
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            data.results.forEach(element => {
                fetch(element.url)
                    .then((response) => {
                        
                        return response.json()
                            .then((response) => {
                                console.log(response);
                                // const sprite = document.createElement('img')
                                // sprite.src = response.sprites.front_default
                                // const info = document.createElement('div')
                                // info.innerHTML = response.height

                                const card = document.createElement("div");
                                card.classList.add("col-md-4", "col-sm-6", "d-flex", "flex-column", "articulo", "p-3", "tarjetas");
                                card.innerHTML = `
                                <img class="imgPok border border-danger border-4 rounded-4" src="${response.sprites.front_default}">
                                <h3 class="datosPok"> Name: ${response.name}</h3> 
                                <h4 class="datosPok"> ID: ${response.id}</h4> 
                                `;               
                                // pokemon_todo.appendChild(sprite);
                                pokemon_todo.appendChild(card)       
                            })
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            });
        })
        .catch((error) => {
            console.error(error)
        })
}

const printPokemon = () => {
    const btn_search = document.createElement('button')
    btn_search.classList.add("btn", "btn-primary")
    btn_search.textContent = 'Search'

    btn_search.addEventListener('click', () => {
        console.log();
      })

    pokemon_button.appendChild(btn_search)
}

getData()
printPokemon()
