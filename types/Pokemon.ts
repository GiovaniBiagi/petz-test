export enum PokemonGeneration {
  'generation-i' = 1,
  'generation-ii' = 2,
  'generation-iii' = 3,
  'generation-iv' = 4,
  'generation-v' = 5,
  'generation-vi' = 6,
  'generation-vii' = 7,
  'generation-viii' = 8,
  'generation-ix' = 9,
}

export type Pokemon = {
  id: number,
  name: string,
  generation: number,
}

export type RawPokemon = {
  id: number,
  name: string,
  past_types: Array<PokemonGeneration>,
}
