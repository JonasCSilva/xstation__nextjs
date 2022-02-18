import { Divider, Flex, Heading, HStack, Select } from '@chakra-ui/react'
import GamesGrid from './GamesGrid'
import MainGame from './MainGame'

export default function Main() {
  return (
    <Flex as='main' w='80%' pos='absolute' align='center' direction='column' top='6rem' left='20%'>
      <MainGame />
      <Divider bgColor='gray.600' h={1} borderWidth={0} />
      <HStack justify='space-between' my='2rem' w='85%'>
        <Heading as='h2' size='xl'>
          Popular
        </Heading>
        <Select w='20%' placeholder='All platforms'>
          <option>PC</option>
          <option>Playstation</option>
          <option>XBOX</option>
          <option>Nintendo</option>
        </Select>
      </HStack>
      <GamesGrid />
      <Flex as='footer' h='3rem' />
    </Flex>
  )
}
