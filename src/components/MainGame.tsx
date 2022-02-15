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
      <Flex px={14} py={8} zIndex={1} w='100%' h='100%'>
        <VStack spacing={8} align='flex-start' w='36%'>
          <Image src='/logoreach2.png' alt='Game Logo' />
          <VStack align='flex-start' pl={8}>
            <Tag size={'md'} variant='solid' bgColor='#ff754c' px={1}>
              <TagLeftIcon boxSize={5} as={RiErrorWarningLine} />
              <TagLabel fontWeight='semibold'>{`Top ${7} this month`}</TagLabel>
            </Tag>
            <Text fontSize='3xl' fontWeight='bold'>
              Experience the heroic story of Noble Team
            </Text>
            <Text fontSize='lg' fontWeight='bold'>
              Available for{' '}
              <Text as='span' decoration='underline'>
                PC
              </Text>{' '}
              and{' '}
              <Text as='span' decoration='underline'>
                XBOX
              </Text>
            </Text>
            <HStack my={4} spacing={4}>
              <HStack spacing={2}>
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
        </VStack>
        <Flex align='flex-end' justify='flex-end' w='64%'>
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
