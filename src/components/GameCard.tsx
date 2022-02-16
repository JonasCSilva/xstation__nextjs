import { GridItem, Heading, Image, HStack, Button, Tag, TagLeftIcon, TagLabel, Flex } from '@chakra-ui/react'
import { RiErrorWarningLine } from 'react-icons/ri'

interface GameCardProps {
  imageLink: string
  imageAlign?: string
  gameName: string
  fontSize?: string | number
  rank: number
  defaultPrice: number
  promoPrice: number
}

export default function GameCard({
  imageLink,
  imageAlign,
  gameName,
  fontSize = '1.6vw',
  rank = 1,
  defaultPrice,
  promoPrice
}: GameCardProps) {
  return (
    <GridItem w='100%' bg='gray.700' borderRadius='2vw' cursor='pointer' _hover={{ boxShadow: 'dark-lg' }} transition='ease-in-out 0.2s'>
      <Image w='100%' h='40vh' fit='cover' align={imageAlign} src={imageLink} alt='Game Image' borderTopRadius='2vw' />
      <Heading as='h3' fontSize={fontSize} textAlign='center' lineHeight={6} my={4}>
        {gameName}
      </Heading>
      <Flex justify='center'>
        <Tag h='1.4vw' variant='solid' bgColor='#ff754c' px={1}>
          <TagLeftIcon boxSize='1.4vw' as={RiErrorWarningLine} />
          <TagLabel fontWeight='semibold'>{`Top ${rank} this month`}</TagLabel>
        </Tag>
      </Flex>
      <HStack justify='center' my={4}>
        <HStack spacing='0.6vw' justify='center' align='center'>
          <Heading as='h4' lineHeight='100%' fontSize='1.2vw' textDecoration='line-through' fontWeight='extrabold' color='gray.500'>
            ${defaultPrice}
          </Heading>
          <Heading as='h4' lineHeight='100%' fontSize='1.4vw'>
            ${promoPrice}
          </Heading>
        </HStack>
        <Button colorScheme='green' h='5vh' fontSize='1vw'>
          Buy Now!
        </Button>
      </HStack>
    </GridItem>
  )
}
