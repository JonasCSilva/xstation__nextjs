import { Divider, Flex, Heading, HStack, Select } from '@chakra-ui/react'
import { GameCardsValues } from '../types'
import GamesGrid from './GamesGrid'
import MainGame from './MainGame'

export default function Main({ gameCardsValues }: { gameCardsValues: GameCardsValues[] }) {
  return (
    <Flex
      as='main'
      pos='absolute'
      align='center'
      direction='column'
      top='6rem'
      left={{ base: 0, lg: '16rem' }}
      w='auto'
    >
      <MainGame />
      <Divider bgColor='gray.600' h='0.05rem' borderWidth={0} />
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
      <GamesGrid gameCardsValues={gameCardsValues} />
      <Flex as='footer' h='3rem' />
    </Flex>
  )
}
