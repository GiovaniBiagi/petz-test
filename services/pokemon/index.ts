import { City } from '@/types/City';
import { RawPokemon } from '@/types/Pokemon';
import { Region } from '@/types/Region';
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_POKEMON_API_URL

type BaseResponse<TData> = {
  results: TData[],
}

export const getPokemons = async () => {
  const pokemons = await axios.get<
    BaseResponse<{ name: string }>
  >(
    `${BASE_URL}/pokemon?limit=10`
  );
  return pokemons.data.results;
}

export const getPokemonByName = async (name: string) => {
  const pokemon = await axios.get<RawPokemon>(
    `${BASE_URL}/pokemon/${name}`
  );
  return pokemon.data;
}

export const getRegions = async () => {
  const regions = await axios.get<BaseResponse<Region>>(
    `${BASE_URL}/region`
  );
  return regions.data.results;
}

export const getCities = async (region: string) => {
  const cities = await axios.get<{
    locations: City[]
  }>(
    `${BASE_URL}/region/${region}`
  );
  return cities.data.locations;
}
