import { Button, Flex, Heading, Img, Text, useColorMode } from '@chakra-ui/react'
import AsideMain from './AsideMain'

export default function Aside() {
  const { toggleColorMode } = useColorMode()

  return (
    <Flex
      display={{ base: 'none', lg: 'block' }}
      as='aside'
      pos='fixed'
      left={0}
      top={0}
      direction='column'
      justify='space-between'
      align='center'
      w='16rem'
      h='100%'
      borderRightWidth='0.1rem'
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
        borderBottomWidth='0.1rem'
        borderBottomColor='gray.700'
        borderBottomStyle='solid'
        px='1rem'
        h='6rem'
      >
        <Img src='/game-console4.png' boxSize='3rem' alt='Site logo' />
        <Heading as='h1' fontSize='2.8rem'>
          XStation
        </Heading>
      </Flex>
      <Flex w='100%' h='calc(100% - 12rem)' justify='center' overflowY='scroll'>
        <AsideMain />
      </Flex>
      <Flex
        w='100%'
        justify='center'
        align='center'
        h='6rem'
        borderTopWidth='0.1rem'
        borderTopColor='gray.700'
        borderTopStyle='solid'
      >
        <Button
          onClick={toggleColorMode}
          size='lg'
          borderRadius={0}
          bg='transparent'
          borderWidth='0.1rem'
          borderColor='gray.700'
          borderStyle='solid'
        >
          <Text fontWeight='semibold' color='gray.500' fontSize='xl'>
            Change Theme
          </Text>
        </Button>
      </Flex>
    </Flex>
  )
}
