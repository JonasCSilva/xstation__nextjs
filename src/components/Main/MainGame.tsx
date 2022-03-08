import { Flex, Stack, Box, Image } from '@chakra-ui/react'
import { useState } from 'react'
import ImageButton from './ImageButton'
import MainGameLeftSide from './MainGameLeftSide'

const backgroundStyle = {
  position: 'absolute' as const,
  left: 0,
  top: 0,
  width: '100%',
  height: 'inherit'
}

export default function MainGame() {
  const [imageSrc, setImageSrc] = useState('/haloreach1.jpg')
  const selectedImageIndexState = useState(1)

  const imageButtonProps = {
    selectedImageIndexState,
    setImageSrc
  }

  return (
    <Flex h={{ base: '28rem', lg: '32rem', xl: 'calc(100vh - 12rem)' }} w='100%'>
      <Image src={imageSrc} alt='Main Game' fit='cover' align='50% 40%' {...backgroundStyle} />
      <Box bgGradient='linear(to-b, transparent 50%, black)' {...backgroundStyle} />
      <Box bgGradient='linear(to-l, transparent 60%, black )' {...backgroundStyle} />
      <Flex px='3.2rem' py='2.4rem' zIndex={1} justify='space-between' w='100%'>
        <MainGameLeftSide />
        <Flex align='flex-end' justify='flex-end' w='fit-content'>
          <Stack direction={{ base: 'column', lg: 'row' }} spacing='1rem'>
            {Array.from(Array(4).keys()).map(value => (
              <ImageButton key={value} {...imageButtonProps} imageIndex={++value} />
            ))}
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  )
}
