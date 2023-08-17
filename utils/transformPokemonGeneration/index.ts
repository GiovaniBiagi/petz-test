import { PokemonGeneration } from "@/types/Pokemon"

export const transformPokemonGeneration = (generation: PokemonGeneration): number => {
  return Number(PokemonGeneration[generation])
}
