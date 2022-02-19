import type { NextPage } from 'next'
import Head from 'next/head'
import Aside from '../components/Aside'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import { Flex } from '@chakra-ui/react'
import { GameCardsValues } from '../types'
import { gameCardsValues } from '../data'

const Home: NextPage<{ gameCardsValues: GameCardsValues[] }> = ({ gameCardsValues }) => {
  return (
    <Flex>
      <Head>
        <title>XStation</title>
      </Head>
      <Aside />
      <Navbar />
      <Main gameCardsValues={gameCardsValues} />
    </Flex>
  )
}

export default Home

export async function getServerSideProps() {
  return {
    props: { gameCardsValues }
  }
}
