import { Button, Flex, Text, useColorMode } from '@chakra-ui/react'

export default function AsideFooter() {
  const { toggleColorMode } = useColorMode()

  return (
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
  )
}
