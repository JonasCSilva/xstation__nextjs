import type { NextPage } from 'next'
import Head from 'next/head'
import { Button, Flex, useColorMode, Text, Img, Heading, Divider, Select, Grid } from '@chakra-ui/react'
import ItemCard from '../components/ItemCard'
import MainGame from '../components/MainGame'

const Home: NextPage = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <>
      <Head>
        <title>XStation</title>
      </Head>
      <Flex
        as={'aside'}
        pos='fixed'
        left={0}
        top={0}
        direction='column'
        justify='space-between'
        align='center'
        w='16%'
        h={'100vh'}
        borderRightWidth={1}
        borderRightColor={'gray.700'}
        borderRightStyle='solid'
        padding={0}
      >
        <Flex
          as='header'
          direction='row'
          justify='space-between'
          align='center'
          width='100%'
          borderBottomWidth={1}
          borderBottomColor={'gray.700'}
          borderBottomStyle='solid'
          px={4}
          h='12vh'
        >
          <Img src={'/game-console4.png'} boxSize='3vw' alt='Site logo' />
          <Heading as={'h1'} size='lg'>
            XStation
          </Heading>
        </Flex>
        <Flex width='100%' justify='center' align='center' h={'12vh'} borderTopWidth={1} borderTopColor={'gray.700'} borderTopStyle='solid'>
          <Button onClick={toggleColorMode} borderRadius={0} bg='transparent' borderWidth={1} borderColor={'gray.700'} borderStyle='solid'>
            <Text fontWeight='semibold' color='gray.500'>
              Change Theme
            </Text>
          </Button>
        </Flex>
      </Flex>
      <Flex
        as={'nav'}
        pos='fixed'
        left={'16%'}
        top={0}
        w='84%'
        h='12vh'
        bgColor={'gray.800'}
        zIndex={1}
        borderBottomWidth={1}
        borderBottomColor={'gray.700'}
        borderBottomStyle='solid'
      ></Flex>
      <Flex as='main' w='84%' pos='absolute' align='center' direction='column' top='12vh' left='16%'>
        <MainGame />
        <Divider bgColor='gray.600' h={1} borderWidth={0} />
        <Flex justify='space-between' my={'6vh'} w={'85%'}>
          <Heading as={'h2'} w={'15vw'}>
            Popular
          </Heading>
          <Select w={'15vw'} placeholder='All platforms'>
            <option>PC</option>
            <option>Playstation</option>
            <option>XBOX</option>
            <option>Nintendo</option>
          </Select>
        </Flex>
        <Grid templateColumns='repeat(4, 1fr)' gap={'3vw'} w={'90%'}>
          <ItemCard rank={2} defaultPrice={34} promoPrice={19} gameName='The Witcher 3' imageLink={'/thewitcher.jpeg'} />
          <ItemCard
            rank={3}
            defaultPrice={59}
            promoPrice={54}
            gameName='Red Dead Redemption 2'
            fontSize='md'
            imageLink={'/reddead2.jpeg'}
          />
          <ItemCard rank={4} defaultPrice={49} promoPrice={24} gameName='GTA 5' imageAlign='45% 0%' imageLink={'/gta5.jpeg'} />
          <ItemCard rank={5} defaultPrice={49} promoPrice={39} gameName='Fallout 4' imageAlign='13% 0%' imageLink={'/fallout4.jpeg'} />
          <ItemCard
            rank={6}
            defaultPrice={34}
            promoPrice={19}
            gameName='Dragon Age Inquisition'
            fontSize='lg'
            imageAlign='15% 0%'
            imageLink={'/dragonage.jpeg'}
          />
          <ItemCard rank={7} defaultPrice={29} promoPrice={14} gameName='TES 5: Skyrim' imageLink={'/skyrim.jpeg'} />
          <ItemCard rank={8} defaultPrice={19} promoPrice={9} gameName='Bioshock Infinite' imageLink={'/bioshock.jpeg'} />
          <ItemCard
            rank={9}
            defaultPrice={39}
            promoPrice={29}
            gameName='MGS 5: The Phantom Pain'
            fontSize='md'
            imageAlign='93% 0%'
            imageLink={'/metalgear.jpeg'}
          />
        </Grid>
        <Flex as={'footer'} h={'5vh'} />
      </Flex>
    </>
  )
}

export default Home
