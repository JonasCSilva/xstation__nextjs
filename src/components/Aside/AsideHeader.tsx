import { Flex, Heading, Img } from '@chakra-ui/react'

export default function AsideHeader() {
  return (
    <Flex
      as='header'
      direction='row'
      justify='space-around'
      align='center'
      w='100%'
      borderBottomWidth='0.1rem'
      borderBottomColor='gray.700'
      borderBottomStyle='solid'
      px='1rem'
      h='6rem'
    >
      <Img src='/game-console4.png' boxSize='2.6rem' alt='Site logo' />
      <Heading as='h1' fontSize='2.4rem'>
        XStation
      </Heading>
    </Flex>
  )
}
