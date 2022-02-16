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
    <Flex h='76vh' w='100%'>
      <Image src={imageSrc} alt='Game Logo' fit='cover' align='50% 40%' {...backgroundStyle} />
      <Box bgGradient='linear(to-b, transparent, black )' {...backgroundStyle} />
      <Flex px='3.2vw' py='2.4vw' zIndex={1} w='100%' h='100%'>
        <VStack spacing={'3vh'} align='flex-start' justify='space-around' w='36%'>
          <Image src='/logoreach2.png' alt='Game Logo' />
          <VStack align='flex-start' pl='1.8vw' spacing='1vh'>
            <Tag minH={0} minW={0} variant='solid' bgColor='#ff754c' px='0.2vw'>
              <TagLeftIcon w='1.3vw' h='1.3vw' as={RiErrorWarningLine} />
              <TagLabel h='3vh' fontWeight='semibold' fontSize='1vw'>{`Top ${7} this month`}</TagLabel>
            </Tag>
            <Text fontSize='2vw' fontWeight='bold' lineHeight='1.2'>
              Experience the heroic story of Noble Team
            </Text>
            <Text fontSize='1.2vw' fontWeight='bold'>
              Available for{' '}
              <Text as='span' decoration='underline'>
                PC
              </Text>{' '}
              and{' '}
              <Text as='span' decoration='underline'>
                XBOX
              </Text>
            </Text>
            <HStack my='0.8vw' spacing='0.8vw'>
              <HStack spacing='0.4vw'>
                <Heading as='h4' lineHeight='100%' fontSize='1.8vw' textDecoration='line-through' fontWeight='extrabold' color='gray.500'>
                  $14
                </Heading>
                <Heading as='h4' lineHeight='100%' fontSize='2.4vw'>
                  $9
                </Heading>
              </HStack>
              <Button colorScheme='green' h='5vh' w='6.6vw' fontSize='1vw'>
                Buy Now!
              </Button>
            </HStack>
          </VStack>
        </VStack>
        <Flex align='flex-end' justify='flex-end' w='64%'>
          <HStack spacing='1vw'>
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
