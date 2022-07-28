"use strict"

window.sr = ScrollReveal();

sr.reveal('.pokemon_mostrar', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
});

const input_todo = document.getElementById('input_todo')
const pokemon_button = document.getElementById('pokemon_indiv')

const url = 'https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0'

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
                                const card = document.createElement("div");
                                card.classList.add("col-md-2", "col-sm-4", "d-flex", "flex-column", "tarjetas");
                                card.innerHTML = `
                                <img class="imgPok" src="${response.sprites.front_default}">
                                <h5 class="datosPok"> ID: ${response.id}</h5>
                                <h4 class="datosPok"> Name: ${response.name}</h4>  
                                `;               
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

getData()

const entrada = document.getElementById("input_todo");

input_todo.addEventListener("keyup",(event) =>{
    event.preventDefault();
    buscarPokemon(entrada.value);
})

function buscarPokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    // https://pokeapi.co/api/v2/pokemon?limit=102&offset=0
        .then((response) => response.json())
        .then((data) => {
            buscar(data);
        });
}

function buscar(pokemon) {
    const elementoPadre = document.getElementById("elementoPadre");
    elementoPadre.innerHTML = "";
    const elementoHijo = document.createElement("div");
    elementoHijo.classList.add("d-flex", "flex-column", "mx-auto", "justify-content-center", "align-items-center");
    
    elementoHijo.innerHTML = `
    <img class="imgAside" src="${pokemon.sprites.front_default}">
    <h4 class="datosPok"> HEIGHT: ${pokemon.height}</h4>
    <h4 class="datosPok"> WEIGHT: ${pokemon.weight}</h4>
    `;
  elementoPadre.appendChild(elementoHijo);

}
