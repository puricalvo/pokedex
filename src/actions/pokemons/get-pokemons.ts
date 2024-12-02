import { pokeApi } from "../../config/api/pokeApi";
import type { Pokemon } from "../../domain/entities/pokemon";
import type { PokeAPIPaginatedResponse, PokeAPIPokemon } from "../../infrasctructure/interfaces/pokepi.interfaces";
import { PokemonMapper } from "../../infrasctructure/mappers/pokemon.mapper";




export const getPokemons = async (page: number, limit: number = 20 ): Promise<Pokemon[]> => {

   

    try {

        const url = `/pokemon?offset=${ page * 10 }&limit=${ limit }`;
        const { data } = await pokeApi.get<PokeAPIPaginatedResponse>(url);

        const pokemonPromise = data.results.map( (info) => {
            return pokeApi.get<PokeAPIPokemon>(info.url);
        });

        const pokeApiPokemons = await Promise.all(pokemonPromise);
        const pokemons = pokeApiPokemons.map( (item) => 
            PokemonMapper.pokeApiPokemonToEntity( item.data ) 
        );

        console.log(pokemons[0]);

        return pokemons;
        
    } catch (error) {
        console.log(error);
        throw new Error('Error getting pokemons');
    }

}