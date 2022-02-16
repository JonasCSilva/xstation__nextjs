import { Divider, Flex, Heading, HStack, Select, useMediaQuery } from '@chakra-ui/react'
import GamesGrid from './GamesGrid'
import MainGame from './MainGame'

export default function Main() {
  const [isMQTrue] = useMediaQuery('(min-aspect-ratio: 1/1)')

  return (
    <Flex as='main' w={isMQTrue ? '80%' : '100%'} pos='absolute' align='center' direction='column' top='12vh' left={isMQTrue ? '20%' : 0}>
      <MainGame />
      <Divider bgColor='gray.600' h={1} borderWidth={0} />
      <HStack justify='space-between' my='6vh' w='85%'>
        <Heading as='h2' w='15vw' fontSize='2.3vw'>
          Popular
        </Heading>
        <Select w='15vw' placeholder='All platforms' fontSize='1vw' h='5vh'>
          <option>PC</option>
          <option>Playstation</option>
          <option>XBOX</option>
          <option>Nintendo</option>
        </Select>
      </HStack>
      <GamesGrid />
      <Flex as='footer' h='5vh' />
    </Flex>
  )
}
