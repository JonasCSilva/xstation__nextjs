import { GridItem, Heading, Image, HStack, Button, Tag, TagLeftIcon, TagLabel, VStack } from '@chakra-ui/react'
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
      <VStack spacing='2vh' h='fit-content' justify='center' pb='2vh' pt='1.6vh'>
        <Heading as='h3' fontSize={fontSize} textAlign='center' lineHeight={'3vh'}>
          {gameName}
        </Heading>
        <Tag h='1.4vw' variant='solid' bgColor='#ff754c' px='0.2vw' py='0.2vh' borderRadius='0.4vw'>
          <TagLeftIcon boxSize='1.4vw' as={RiErrorWarningLine} />
          <TagLabel fontWeight='semibold' fontSize='1vw'>{`Top ${rank} this month`}</TagLabel>
        </Tag>
        <HStack justify='center' align='center' spacing='0.6vw'>
          <Heading as='h4' lineHeight='100%' fontSize='1.2vw' textDecoration='line-through' fontWeight='extrabold' color='gray.500'>
            ${defaultPrice}
          </Heading>
          <Heading as='h4' lineHeight='100%' fontSize='1.4vw'>
            ${promoPrice}
          </Heading>
          <Button colorScheme='green' h='5vh' fontSize='1vw' borderRadius='0.4vw'>
            Buy Now!
          </Button>
        </HStack>
      </VStack>
    </GridItem>
  )
}
