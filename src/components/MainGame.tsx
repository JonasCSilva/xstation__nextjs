import { Flex, HStack, Button, Image, Box } from '@chakra-ui/react'
import { useState } from 'react'

export default function MainGame() {
  const [image, setImage] = useState('/haloreach1.jpg')

  return (
    <Flex justify='flex-end' align='flex-end' h='76vh' w='100%' bgPosition='0% 40%' bgRepeat='no-repeat' bgSize='cover' bgImage={image}>
      <Box position='absolute' bgGradient='linear(to-b, transparent, black )' width='inherit' height='inherit' left='0rem' top='0rem' />
      <HStack mr={14} mb={14} spacing={4}>
        <Button
          p={0}
          w='9vw'
          h='9vh'
          onClick={e => e.target.setAttribute()}
          aria-selected='true'
          _selected={{ borderWidth: 5, borderStyle: 'solid', borderColor: '#fff' }}
        >
          <Image
            borderWidth={1}
            borderStyle='solid'
            borderColor='#313b40'
            boxSize='inherit'
            fit='cover'
            src={'/haloreach1.jpg'}
            alt='Game Image'
            borderRadius='inherit'
          />
        </Button>
        <Button p={0} w='9vw' h='9vh' onClick={() => setImage('/haloreach2.jpg')} _hover={{ boxShadow: 'dark-lg' }}>
          <Image
            borderWidth={1}
            borderStyle='solid'
            borderColor='#313b40'
            boxSize='inherit'
            fit='cover'
            src={'/haloreach2.jpg'}
            alt='Game Image'
            borderRadius='inherit'
          />
        </Button>
        <Button p={0} w='9vw' h='9vh' onClick={() => setImage('/haloreach3.png')} _hover={{ boxShadow: 'dark-lg' }}>
          <Image
            borderWidth={1}
            borderStyle='solid'
            borderColor='#313b40'
            boxSize='inherit'
            fit='cover'
            src={'/haloreach3.png'}
            alt='Game Image'
            borderRadius='inherit'
          />
        </Button>
        <Button p={0} w='9vw' h='9vh' onClick={() => setImage('/haloreach4.jpg')} _hover={{ boxShadow: 'dark-lg' }}>
          <Image
            borderWidth={1}
            borderStyle='solid'
            borderColor='#313b40'
            boxSize='inherit'
            fit='cover'
            src={'/haloreach4.jpg'}
            alt='Game Image'
            borderRadius='inherit'
          />
        </Button>
      </HStack>
    </Flex>
  )
}
