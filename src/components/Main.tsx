import { Divider, Flex, Heading, HStack, Select } from '@chakra-ui/react'
import GamesGrid from './GamesGrid'
import MainGame from './MainGame'

export default function Main() {
  return (
    <Flex as='main' w='84%' pos='absolute' align='center' direction='column' top='12vh' left='16%'>
      <MainGame />
      <Divider bgColor='gray.600' h={1} borderWidth={0} />
      <HStack justify='space-between' my={'6vh'} w={'85%'}>
        <Heading as={'h2'} w={'15vw'}>
          Popular
        </Heading>
        <Select w={'15vw'} placeholder='All platforms'>
          <option>PC</option>
          <option>Playstation</option>
          <option>XBOX</option>
          <option>Nintendo</option>
        </Select>
      </HStack>
      <GamesGrid />
      <Flex as={'footer'} h={'5vh'} />
    </Flex>
  )
}
