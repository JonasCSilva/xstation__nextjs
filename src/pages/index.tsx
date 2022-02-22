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
      {/* Combine */}
      <Navbar />
      <Flex
        h='calc(100vh - 6rem)'
        overflowY='scroll'
        as='main'
        pos='absolute'
        top={{ base: 0, lg: '6rem' }}
        left={{ base: 0, lg: '16rem' }}
        w={{ base: '100%', lg: 'calc(100% - 16rem)' }}
      >
        <Main gameCardsValues={gameCardsValues} />
      </Flex>
      {/* Combine */}
    </Flex>
  )
}

export default Home

export async function getServerSideProps() {
  return {
    props: { gameCardsValues }
  }
}
