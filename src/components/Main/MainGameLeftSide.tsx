import { HStack, VStack, Image, Button, Heading, Text, Tag, TagLeftIcon, TagLabel } from '@chakra-ui/react'
import { RiErrorWarningLine } from 'react-icons/ri'

export default function MainGameLeftSide() {
  return (
    <VStack
      spacing='1.5rem'
      align='flex-start'
      justify='space-around'
      w={{ base: '14rem', lg: '16rem', xl: '20rem', '2xl': '26rem' }}
    >
      <Image src='/logoreach3.png' alt='Game Logo' />
      <VStack align='flex-start' pl='1.8rem' spacing='0.5rem'>
        <Tag minH={0} minW={0} variant='solid' bgColor='#ff754c' px='0.2rem'>
          <TagLeftIcon w='1.3rem' h='1.3rem' as={RiErrorWarningLine} />
          <TagLabel h='1.5rem' fontWeight='semibold' fontSize='1rem'>{`Top ${7} this month`}</TagLabel>
        </Tag>
        <Text color='white' fontSize={{ base: '1.6rem', '2xl': '2rem' }} fontWeight='bold' lineHeight='1.2'>
          Experience the heroic story of Noble Team
        </Text>
        <Text color='white' fontSize={{ base: '0.9rem', '2xl': '1.2rem' }} fontWeight='bold'>
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
            <Heading
              as='h4'
              lineHeight='100%'
              fontSize={{ base: '1.5rem', '2xl': '1.8rem' }}
              textDecoration='line-through'
              fontWeight='extrabold'
              color='gray.500'
            >
              $14
            </Heading>
            <Heading color='white' as='h4' lineHeight='100%' fontSize={{ base: '1.8rem', '2xl': '2.4rem' }}>
              $9
            </Heading>
          </HStack>
          <Button colorScheme='green' h='2.5rem' w='6.6rem' fontSize='1rem' borderRadius='0.4rem'>
            Buy Now!
          </Button>
        </HStack>
      </VStack>
    </VStack>
  )
}
