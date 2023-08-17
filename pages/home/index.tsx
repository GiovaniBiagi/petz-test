import Head from 'next/head'
import { Home as HomeTemplate } from '@/templates/Home/Home'
import { Layout } from '@/templates/Layout/Layout'
import { ReactElement } from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Centro Pokémon | Home</title>
        <meta
          name="description"
          content="Um aplicativo simples de agendamento para seu pokémon"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTemplate />
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
