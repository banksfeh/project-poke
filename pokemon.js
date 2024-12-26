    const pokemonList = [
    { name: "Absol", image: "img/Absol.png", tier: "", route: "top" },
    { name: "Aegislash", image: "img/Aegislash.png", tier: "", route: "top" },
    { name: "AlolanNinetales", image: "img/Alolan Ninetales.png", tier: "", route: "defensor" },
    { name: "Armarouge", image: "img/Armarouge.png", tier: "", route: "selva" },
    { name: "Azumarill", image: "img/Azumarill.png", tier: "", route: "suporte" },
    { name: "Blastoise", image: "img/Blastoise.png", tier: "", route: "bot" },
    { name: "Blaziken", image: "img/Blaziken.png", tier: "s", route: "selva" },
    { name: "Blissey", image: "img/Blissey.png", tier: "s", route: "suporte" },
    { name: "Buzzwole", image: "img/Buzzwole.png", tier: "", route: "defensor" },
    { name: "Ceruledge", image: "img/Ceruledge.png", tier: "", route: "suporte" },
    { name: "Chandelure", image: "img/Chandelure.png", tier: "", route: "defensor" },
    { name: "Charizard", image: "img/Charizard.png", tier: "", route: "suporte" },
    { name: "Cinderace", image: "img/Cinderace.png", tier: "", route: "selva" },
    { name: "Clefable", image: "img/Clefable.png", tier: "s", route: "suporte" },
    { name: "Comfey", image: "img/Comfey.png", tier: "", route: "top" },
    { name: "Cramorant", image: "img/Cramorant.png", tier: "", route: "suporte" },
    { name: "Crustle", image: "img/Crustle.png", tier: "s", route: "defensor" },
    { name: "Darkrai", image: "img/Darkrai.png", tier: "s", route: "atacante" },
    { name: "Decidueye", image: "img/Decidueye.png", tier: "", route: "atacante" },
    { name: "Delphox", image: "img/Delphox.png", tier: "", route: "top" },
    { name: "Dodrio", image: "img/Dodrio.png", tier: "", route: "selva" },
    { name: "Dragapult", image: "img/Dragapult.png", tier: "", route: "selva" },
    { name: "Dragonite", image: "img/Dragonite.png", tier: "", route: "selva" },
    { name: "Duraludon", image: "img/Duraludon.png", tier: "", route: "selva" },
    { name: "Eldegoss", image: "img/Eldegoss.png", tier: "s", route: "suporte" },
    { name: "Espeon", image: "img/Espeon.png", tier: "s", route: "atacante" },
    { name: "Falinks", image: "img/Falinks.png", tier: "", route: "selva" },
    { name: "Garchomp", image: "img/Garchomp.png", tier: "s", route: "top" },
    { name: "Gardevoir", image: "img/Gardevoir.png", tier: "", route: "selva" },
    { name: "Gengar", image: "img/Gengar.png", tier: "", route: "selva" },
    { name: "Glaceon", image: "img/Glaceon.png", tier: "s", route: "selva" },
    { name: "Goodra", image: "img/Goodra.png", tier: "s", route: "top" },
    { name: "Greedent", image: "img/Greedent.png", tier: "s", route: "top" },
    { name: "Greninja", image: "img/Greninja.png", tier: "", route: "selva" },
    { name: "Gyarados", image: "img/Gyarados.png", tier: "s", route: "top" },
    { name: "Hooh", image: "img/Ho-oh.png", tier: "", route: "selva" },
    { name: "Hoopa", image: "img/Hoopa.png", tier: "s", route: "suporte" },
    { name: "Inteleon", image: "img/Inteleon.png", tier: "", route: "selva" },
    { name: "Lapras", image: "img/Lapras.png", tier: "", route: "selva" },
    { name: "Leafeon", image: "img/Leafeon.png", tier: "s", route: "selva" },
    { name: "Lucario", image: "img/Lucario.png", tier: "", route: "selva" },
    { name: "Machamp", image: "img/Machamp.png", tier: "", route: "selva" },
    { name: "Mamoswine", image: "img/Mamoswine.png", tier: "s", route: "defensor" },
    { name: "MegaMewtwoX", image: "img/Mega Mewtwo X.png", tier: "", route: "selva" },
    { name: "MegaMewtwoY", image: "img/Mega Mewtwo Y.png", tier: "s", route: "atacante" },
    { name: "Meowscarada", image: "img/Meowscarada.png", tier: "", route: "selva" },
    { name: "Metagross", image: "img/Metagross.png", tier: "", route: "selva" },
    { name: "Mew", image: "img/Mew.png", tier: "s", route: "atacante" },
    { name: "Mimikyu", image: "img/Mimikyu.png", tier: "s", route: "selva" },
    { name: "Miraidon", image: "img/Miraidon.png", tier: "s", route: "atacante" },
    { name: "Mimikyu", image: "img/Mimikyu.png", tier: "", route: "selva" },
    { name: "MrMine", image: "img/Mr Mine.png", tier: "", route: "selva" },
    { name: "Pikachu", image: "img/Pikachu.png", tier: "", route: "selva" },
    { name: "Psyduck", image: "img/Psyduck.png", tier: "s", route: "defensor" },
    { name: "Sableye", image: "img/Sableye.png", tier: "", route: "selva" },
    { name: "Scizor", image: "img/Scizor.png", tier: "", route: "selva" },
    { name: "Slowbro", image: "img/Slowbro.png", tier: "s", route: "defensor" },
    { name: "Snorlax", image: "img/Snorlax.png", tier: "s", route: "defensor" },
    { name: "Sylveon", image: "img/Sylveon.png", tier: "", route: "selva" },
    { name: "Talonflame", image: "img/Talonflame.png", tier: "", route: "selva" },
    { name: "Tinkaton", image: "img/Tinkaton.png", tier: "", route: "selva" },
    { name: "Trevenant", image: "img/Trevenant.png", tier: "", route: "selva" },
    { name: "Tsareena", image: "img/Tsareena.png", tier: "", route: "selva" },
    { name: "Tyranitar", image: "img/Tyranitar.png", tier: "", route: "selva" },
    { name: "Umbreon", image: "img/Umbreon.png", tier: "s", route: "suporte" },
    { name: "Urshifu", image: "img/Urshifu.png", tier: "s", route: "selva" },
    { name: "Venusaur", image: "img/Venusaur.png", tier: "", route: "selva" },
    { name: "Wifflytuff", image: "img/Wifflytuff.png", tier: "", route: "suporte" },
    { name: "Zacian", image: "img/Zacian.png", tier: "s", route: "top" },
    { name: "Zeraora", image: "img/Zeraora.png", tier: "", route: "selva" },
    { name: "Zoroark", image: "img/Zoroark.png", tier: "", route: "selva" }

];
       
        //CÓDIGO NOVO

        // Renderizar lista de Pokémon
        function renderPokemonByRoute(tier) {
            const pokemonContainer = document.getElementById('pokemon-container');
            pokemonContainer.innerHTML = ''; // Limpar conteúdo

            // Filtrar Pokémon pelo tier
            const filteredPokemon = pokemonList.filter(pokemon => pokemon.tier === tier);

            // Obter rotas únicas
            const routes = [...new Set(filteredPokemon.map(pokemon => pokemon.route))];

            // Renderizar grupos por rota
            routes.forEach(route => {
                const routeGroup = document.createElement('div');
                routeGroup.classList.add('route-group');
                routeGroup.innerHTML = `<h3>${route.toUpperCase()}</h3>`;

                const pokemonInRoute = filteredPokemon.filter(pokemon => pokemon.route === route);

                pokemonInRoute.forEach(pokemon => {
                    const pokemonDiv = document.createElement('div');
                    pokemonDiv.classList.add('pokemon');
                    pokemonDiv.innerHTML = `
                        <img src="${pokemon.image}" alt="${pokemon.name}">
                        <div>${pokemon.name}</div>
                    `;
                    routeGroup.appendChild(pokemonDiv);
                });

                pokemonContainer.appendChild(routeGroup);
            });
        }

        

        // Filtrar Pokémon
        function filter(type, value) {
            if (type === 'tier' && (value === 's' || value === 'a' || value === 'b' || value === 'c' || value === 'd')) {
                renderPokemonByRoute(value);
            } else {
                renderPokemonList(type, value);
            } 
        }

        // Renderizar lista de Pokémon sem agrupar
        function renderPokemonList(filterType = 'tier', filterValue = 'all') {
            const pokemonContainer = document.getElementById('pokemon-container');
            pokemonContainer.innerHTML = ''; // Limpar conteúdo

            pokemonList.forEach(pokemon => {
                if (filterValue === 'all' || pokemon[filterType] === filterValue) {
                    const pokemonDiv = document.createElement('div');
                    pokemonDiv.classList.add('pokemon');
                    pokemonDiv.innerHTML = `
                        <img src="${pokemon.image}" alt="${pokemon.name}">
                        <div>${pokemon.name}</div>
                    `;
                    pokemonContainer.appendChild(pokemonDiv);
                }
            });
        }

                 // Dados dos Pokémon, com "counters" e "pick" para cada um
                 const pokemonCounters = {
                    Absol: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Aegislash: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    AlolanNinetales: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Armarouge: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Azumarill: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Blastoise: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Blaziken: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Blissey: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Buzzwole: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Ceruledge: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Chandelure: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Charizard: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Cinderace: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Clefable: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Comfey: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Cramorant: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Crustle: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Darkrai: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Decidueye: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Delphox: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Dodrio: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Dragapult: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Dragonite: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Duraludon: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Eldegoss: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Espeon: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Falinks: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Garchomp: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Gardevoir: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Gengar: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Glaceon: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Goodra: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Greedent: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Greninja: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Gyarados: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Hooh: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Hoopa: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Inteleon: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Lapras: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Leafeon: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Lucario: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Machamp: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Mamoswine: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    MegaMewtwoX: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    MegaMewtwoY: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Meowscarada: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Metagross: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Mew: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Mimikyu: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Miraidon: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    MrMine: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Pikachu: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Psyduck: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Sableye: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Scizor: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Slowbro: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Snorlax: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Sylveon: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Talonflame: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Tinkaton: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Trevenant: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Tsareena: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Tyranitar: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Umbreon: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Urshifu: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Venusaur: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Wifflytuff: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Zacian: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Zeraora: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    },
                    Zoroark: {
                        counters: ["Onix", "Rhydon", "Ground Pokémon"],
                        recommended: ["Bulbasaur", "Squirtle", "Charizard"]
                    }
                    // Defina os dados para outros Pokémon também, se necessário
                };
        
                // Renderizar Pokémon na tela
                function renderPokemonList() {
                    const pokemonContainer = document.getElementById('pokemon-container');
                    pokemonContainer.innerHTML = ''; // Limpar conteúdo
        
                    pokemonList.forEach(pokemon => {
                        const pokemonDiv = document.createElement('div');
                        pokemonDiv.classList.add('pokemon');
                        pokemonDiv.innerHTML = `
                            <img src="${pokemon.image}" alt="${pokemon.name}" onclick="openPokemonPopup('${pokemon.name}')">
                            <div>${pokemon.name}</div>
                        `;
                        pokemonContainer.appendChild(pokemonDiv);
                    });
                }
        
                // Abrir o popup com informações do Pokémon
                function openPokemonPopup(pokemonName) {
                    const popup = document.getElementById('pokemon-popup');
                    const pokemonData = pokemonCounters[pokemonName];
        
                    if (pokemonData) {
                        // Exibir nome do Pokémon
                        document.getElementById('popup-pokemon-name').innerText = pokemonName;
        
                        // Exibir counters
                        const countersList = document.getElementById('popup-counters-list');
                        countersList.innerHTML = ''; // Limpar lista
                        pokemonData.counters.forEach(counter => {
                            const li = document.createElement('li');
                            li.innerText = counter;
                            countersList.appendChild(li);
                        });
        
                        // Exibir picks recomendados
                        const recommendedList = document.getElementById('popup-recommended-picks-list');
                        recommendedList.innerHTML = ''; // Limpar lista
                        pokemonData.recommended.forEach(pick => {
                            const li = document.createElement('li');
                            li.innerText = pick;
                            recommendedList.appendChild(li);
                        });
        
                        // Mostrar o popup
                        popup.style.display = 'block';
                    }
                }
        
                // Fechar o popup
                function closePokemonPopup() {
                    const popup = document.getElementById('pokemon-popup');
                    popup.style.display = 'none';
                }

        // Inicializar com todos os Pokémon
        renderPokemonList();