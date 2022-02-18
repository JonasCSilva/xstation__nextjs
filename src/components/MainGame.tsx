import { Flex, HStack, VStack, Box, Image, Button, Heading, Text, Tag, TagLeftIcon, TagLabel } from '@chakra-ui/react'
import { RiErrorWarningLine } from 'react-icons/ri'
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
  const [imageSrc, setImageSrc] = useState('/haloreach1.jpg')
  const selectedImageIndexState = useState(1)

  const imageButtonProps = {
    selectedImageIndexState,
    setImageSrc
  }

  let index = 0

  return (
    <Flex h='calc(100vh - 12rem)' w='100%'>
      <Image src={imageSrc} alt='Game Logo' fit='cover' align='50% 40%' {...backgroundStyle} />
      <Box bgGradient='linear(to-b, transparent, black )' {...backgroundStyle} />
      <Flex px='3.2rem' py='2.4rem' zIndex={1}>
        <VStack spacing='1.5rem' align='flex-start' justify='space-around' /* flex={1} */ /* w='calc(auto - 6rem)' */>
          <Image src='/logoreach2.png' alt='Game Logo' />
          <VStack align='flex-start' pl='1.8rem' spacing='0.5rem'>
            <Tag minH={0} minW={0} variant='solid' bgColor='#ff754c' px='0.2rem'>
              <TagLeftIcon w='1.3rem' h='1.3rem' as={RiErrorWarningLine} />
              <TagLabel h='1.5rem' fontWeight='semibold' fontSize='1rem'>{`Top ${7} this month`}</TagLabel>
            </Tag>
            <Text fontSize='2rem' fontWeight='bold' lineHeight='1.2'>
              Experience the heroic story of Noble Team
            </Text>
            <Text fontSize='1.2rem' fontWeight='bold'>
              Available for{' '}
              <Text as='span' decoration='underline'>
                PC
              </Text>{' '}
              and{' '}
              <Text as='span' decoration='underline'>
                XBOX
              </Text>
            </Text>
            <HStack my='0.8rem' spacing='0.8rem'>
              <HStack spacing='0.4rem'>
                <Heading as='h4' lineHeight='100%' fontSize='1.8rem' textDecoration='line-through' fontWeight='extrabold' color='gray.500'>
                  $14
                </Heading>
                <Heading as='h4' lineHeight='100%' fontSize='2.4rem'>
                  $9
                </Heading>
              </HStack>
              <Button colorScheme='green' h='2.5rem' w='6.6rem' fontSize='1rem' borderRadius='0.4rem'>
                Buy Now!
              </Button>
            </HStack>
          </VStack>
        </VStack>
        <Flex align='flex-end' justify='flex-end' w='fit-content'>
          <HStack spacing='1rem'>
            <ImageButton {...imageButtonProps} imageIndex={++index} />
            <ImageButton {...imageButtonProps} imageIndex={++index} />
            <ImageButton {...imageButtonProps} imageIndex={++index} />
            <ImageButton {...imageButtonProps} imageIndex={++index} />
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  )
}
