import { ReactElement } from 'react'
// import { GetServerSideProps } from "next";
import { SubHeader } from '@/components/SubHeader/SubHeader'
import { Layout } from '@/templates/Layout/Layout'
import { AppointmentScheduling as AppointmentSchedulingTemplate } from '@/templates/AppointmentScheduling/AppointmentScheduling'
import { getPokemonByName, getPokemons, getRegions } from '@/services/pokemon'
import { transformPokemonGeneration } from '@/utils/transformPokemonGeneration'
import { Pokemon } from '@/types/Pokemon'
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'
import Head from 'next/head'

export type AppointmentSchedulingPageProps = {
  regions: string[]
  pokemons: Pokemon[]
}

export default function AppointmentScheduling(
  props: AppointmentSchedulingPageProps
) {
  return (
    <>
      <Head>
        <title>Agendar Consulta</title>
        <meta
          name="description"
          content="Agendamento de consultas para o seu pokémon"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppointmentSchedulingTemplate {...props} />
    </>
  )
}

AppointmentScheduling.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <SubHeader
        title="Agendar Consulta"
        subtitle="Recupere seus pokémons em 5 segundos"
      />
      {page}
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const pokemons = await getPokemons()
    const regions = await getRegions()

    if (pokemons.length) {
      const pokemon = pokemons.map(async (pokemon) => {
        return await getPokemonByName(pokemon.name)
      })
      const pokemonsData = await Promise.all(pokemon)

      return {
        props: {
          revalidate: 60,
          regions: regions.map((region) => region.name),
          pokemons: pokemonsData.map((pokemon) => ({
            id: pokemon.id,
            name: capitalizeFirstLetter(pokemon.name),
            generation: pokemon.past_types.length
              ? Math.max(
                  ...pokemon.past_types.map((type) =>
                    transformPokemonGeneration(type)
                  )
                )
              : 1
          }))
        }
      }
    }
  } catch (error: any) {
    return {
      props: {
        availableScheduleDates: []
      }
    }
  }
}
