import type { NextPage } from 'next'
import Head from 'next/head'
import Aside from '../components/Aside'
import Navbar from '../components/Navbar'
import Main from '../components/Main'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>XStation</title>
      </Head>
      <Aside />
      <Navbar />
      <Main />
    </>
  )
}

export default Home
