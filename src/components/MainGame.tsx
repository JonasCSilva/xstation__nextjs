import { Flex, HStack, Box } from '@chakra-ui/react'
import { useState } from 'react'
import ImageButton from './ImageButton'

export default function MainGame() {
  const [image, setImage] = useState('/haloreach1.jpeg')
  const selectedImageNumberState = useState(1)

  const imageButtonProps = {
    selectedImageNumberState: selectedImageNumberState,
    setImage: setImage
  }

  return (
    <Flex justify='flex-end' align='flex-end' h='76vh' w='100%' bgPosition='0% 40%' bgRepeat='no-repeat' bgSize='cover' bgImage={image}>
      <Box position='absolute' bgGradient='linear(to-b, transparent, black )' width='inherit' height='inherit' left='0rem' top='0rem' />
      <HStack mr={14} mb={14} spacing={4}>
        <ImageButton {...imageButtonProps} imageNumber={1} />
        <ImageButton {...imageButtonProps} imageNumber={2} />
        <ImageButton {...imageButtonProps} imageNumber={3} />
        <ImageButton {...imageButtonProps} imageNumber={4} />
      </HStack>
    </Flex>
  )
}
