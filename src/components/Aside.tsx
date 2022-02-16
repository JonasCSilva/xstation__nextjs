import { Button, Flex, Heading, Img, Text, useColorMode, useMediaQuery } from '@chakra-ui/react'
import AsideMain from './AsideMain'

export default function Aside() {
  const { toggleColorMode } = useColorMode()
  const [isMQTrue] = useMediaQuery('(min-aspect-ratio: 1.2/1)')

  return (
    <Flex
      display={isMQTrue ? 'block' : 'none'}
      as='aside'
      pos='fixed'
      left={0}
      top={0}
      direction='column'
      justify='space-between'
      align='center'
      w='20%'
      h='100vh'
      borderRightWidth='0.1vw'
      borderRightColor='gray.700'
      borderRightStyle='solid'
      p={0}
    >
      <Flex
        as='header'
        direction='row'
        justify='space-around'
        align='center'
        w='100%'
        borderBottomWidth='0.1vw'
        borderBottomColor='gray.700'
        borderBottomStyle='solid'
        px='1vw'
        h='12vh'
      >
        <Img src='/game-console4.png' boxSize='3vw' alt='Site logo' />
        <Heading as='h1' fontSize='2.8vw'>
          XStation
        </Heading>
      </Flex>
      <Flex w='100%' h='76vh' justify='center' overflowY='scroll'>
        <AsideMain />
      </Flex>
      <Flex width='100%' justify='center' align='center' h='12vh' borderTopWidth='0.1vw' borderTopColor='gray.700' borderTopStyle='solid'>
        <Button
          onClick={toggleColorMode}
          h='5vh'
          w='11vw'
          borderRadius={0}
          bg='transparent'
          borderWidth='0.1vw'
          borderColor='gray.700'
          borderStyle='solid'
        >
          <Text fontWeight='semibold' color='gray.500' fontSize='1.2vw'>
            Change Theme
          </Text>
        </Button>
      </Flex>
    </Flex>
  )
}
