import { useState, useEffect } from "react";

const API = "https://pokeapi.co/api/v2/pokemon/";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};
  
function usePokemon() {
    const [cards, setCards] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemon = async () => {
            const pokemonUrls = new Array(12);
            for (let i = 0; i < 12; i++) pokemonUrls[i] = `${API}${getRandomInt(1000)}`;

            const pokemonJsons = (
                await Promise.all(
                    pokemonUrls.map((url) => fetch(url))
                )
            ).map((response) => response.json());

            const pokemonCards = (
                await Promise.all(pokemonJsons)
            ).map((json) => {
                return {
                    name: json.name, 
                    imgUrl: json.sprites.other["official-artwork"].front_default
                };
            });
            setLoading(false);
            setCards(pokemonCards);
        };

        fetchPokemon();
    }, []);

    return { cards, setCards, loading };
};

export default usePokemon;