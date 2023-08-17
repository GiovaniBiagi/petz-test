import { SubHeader } from '@/components/SubHeader/SubHeader'
import { AboutUs as AboutUsTemplate } from '@/templates/AboutUs/AboutUs'
import { Layout } from '@/templates/Layout/Layout'
import Head from 'next/head'
import { ReactElement } from 'react'

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>Quem Somos</title>
        <meta
          name="description"
          content="Um pouco sobre nossa história e trajeto"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutUsTemplate />
    </>
  )
}

AboutUs.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <SubHeader
        title="Quem Somos"
        subtitle="A maior rede de tratamento pokémon."
      />
      {page}
    </Layout>
  )
}
