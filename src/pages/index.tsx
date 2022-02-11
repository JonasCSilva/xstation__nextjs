import type { NextPage } from 'next'
import Head from 'next/head'
import { Button, Flex, useColorMode, Text, Img, Heading, Divider, Select, Grid } from '@chakra-ui/react'
import ItemCard from '../components/ItemCard'

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
        <Flex h='76vh' w='100%' bgPosition='0% 40%' bgRepeat='no-repeat' bgSize='cover' bgImage={'/haloreach.jpg'} />
        <Divider bgColor='gray.600' h={1} borderWidth={0} />
        <Flex justify='space-between' my={'6vh'} w={'85%'}>
          <Heading w={'15vw'}>Popular</Heading>
          <Select w={'15vw'} placeholder='Select option'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </Flex>
        <Grid templateColumns='repeat(4, 1fr)' gap={'3vw'} w={'90%'}>
          <ItemCard GameName='The Witcher 3' ImageLink={'/thewitcher.webp'} />
          <ItemCard GameName='Red Dead Redemption 2' ImageLink={'/reddead2.jpg'} />
          <ItemCard GameName='GTA 5' ImageAlign='45% 0%' ImageLink={'/gta5.jpg'} />
          <ItemCard GameName='Fallout 4' ImageAlign='13% 0%' ImageLink={'/fallout4.jpg'} />
          <ItemCard GameName='Dragon Age Inquisition' ImageAlign='15% 0%' ImageLink={'/dragonage.jpeg'} />
          <ItemCard GameName='TES 5: Skyrim' ImageLink={'/skyrim.jpg'} />
          <ItemCard GameName='Bioshock Infinite' ImageLink={'/bioshock.jpeg'} />
          <ItemCard GameName='MGS 5: The Phantom 5' ImageAlign='93% 0%' ImageLink={'/metalgear.jpg'} />
        </Grid>
        <Flex as={'footer'} h={'5vh'} />
      </Flex>
    </>
  )
}

export default Home
