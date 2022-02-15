import { Button, Flex, Heading, Img, Text, useColorMode } from '@chakra-ui/react'
import AsideMain from './AsideMain'

export default function Aside() {
  const { toggleColorMode } = useColorMode()

  return (
    <Flex
      as={'aside'}
      pos='fixed'
      left={0}
      top={0}
      direction='column'
      justify='space-between'
      align='center'
      w='20%'
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
      <Flex w='100%' h='76vh' justify='center' overflowY='scroll'>
        <AsideMain />
      </Flex>
      <Flex width='100%' justify='center' align='center' h={'12vh'} borderTopWidth={1} borderTopColor={'gray.700'} borderTopStyle='solid'>
        <Button onClick={toggleColorMode} borderRadius={0} bg='transparent' borderWidth={1} borderColor={'gray.700'} borderStyle='solid'>
          <Text fontWeight='semibold' color='gray.500'>
            Change Theme
          </Text>
        </Button>
      </Flex>
    </Flex>
  )
}
