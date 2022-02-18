import type { NextPage } from 'next'
import Head from 'next/head'
import Aside from '../components/Aside'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import { Flex } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Flex>
      <Head>
        <title>XStation</title>
      </Head>
      <Aside />
      <Navbar />
      <Main />
    </Flex>
  )
}

export default Home
