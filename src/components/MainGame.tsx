import { Flex, HStack, VStack, Box, Image, Button, Heading } from '@chakra-ui/react'
import { useState } from 'react'
import ImageButton from './ImageButton'

const backgroundStyle = {
  position: 'absolute' as const,
  left: 0,
  top: 0,
  width: 'inherit',
  height: 'inherit'
}

export default function MainGame() {
  const [image, setImage] = useState('/haloreach1.jpeg')
  const selectedImageNumberState = useState(1)

  const imageButtonProps = {
    selectedImageNumberState: selectedImageNumberState,
    setImage: setImage
  }

  return (
    <Flex h='76vh' w='100%'>
      <Image src={image} alt='Game Logo' fit='cover' align='0% 40%' {...backgroundStyle} />
      <Box bgGradient='linear(to-b, transparent, black )' {...backgroundStyle} />
      <Flex p={14} zIndex={1}>
        <VStack spacing={4} justify='center' w='30vw'>
          <Image w='20vw' src='/logoreach2.png' alt='Game Logo' />
          <HStack justify='center' my={4}>
            <HStack spacing={2} justify='center'>
              <Heading as='h4' lineHeight='100%' fontSize='3xl' textDecoration='line-through' fontWeight='extrabold' color='gray.500'>
                $14
              </Heading>
              <Heading as='h4' lineHeight='100%' fontSize='4xl'>
                $9
              </Heading>
            </HStack>
            <Button colorScheme='green' size='lg'>
              Buy Now!
            </Button>
          </HStack>
        </VStack>
        <Flex align='flex-end'>
          <HStack spacing={4}>
            <ImageButton {...imageButtonProps} imageNumber={1} />
            <ImageButton {...imageButtonProps} imageNumber={2} />
            <ImageButton {...imageButtonProps} imageNumber={3} />
            <ImageButton {...imageButtonProps} imageNumber={4} />
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  )
}
