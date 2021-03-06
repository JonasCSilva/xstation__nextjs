import {
  GridItem,
  Heading,
  Image,
  HStack,
  Button,
  Tag,
  TagLeftIcon,
  TagLabel,
  VStack,
  useColorMode
} from '@chakra-ui/react'
import { RiErrorWarningLine } from 'react-icons/ri'
import { GameCardsValues } from '../../types'

type GameCardProps = GameCardsValues & {
  rank: number
}

const bgColor = { light: 'gray.300', dark: 'gray.700' }
const defaultPriceColor = { light: 'gray.600', dark: 'gray.500' }

export default function GameCard({
  imageLink,
  imageAlign,
  gameName,
  fontSize = '1.6rem',
  rank = 1,
  defaultPrice,
  promoPrice
}: GameCardProps) {
  const { colorMode } = useColorMode()

  return (
    <GridItem
      w='100%'
      bg={bgColor[colorMode]}
      borderRadius='2rem'
      cursor='pointer'
      _hover={{ boxShadow: 'dark-lg' }}
      transition='ease-in-out 0.2s'
    >
      <Image
        w='100%'
        h={{ base: '28rem', sm: '26rem', md: '26rem', xl: '20rem' }}
        fit='cover'
        align={imageAlign}
        src={imageLink}
        alt='Game Image'
        borderTopRadius='2rem'
      />
      <VStack spacing='1rem' h='fit-content' justify='center' pb='1rem' pt='0.8rem'>
        <Heading as='h3' {...{ fontSize }} textAlign='center' lineHeight={'1.5rem'}>
          {gameName}
        </Heading>
        <Tag h='1.4rem' variant='solid' bgColor='#ff754c' px='0.2rem' py='0.1rem' borderRadius='0.4rem'>
          <TagLeftIcon boxSize='1.4rem' as={RiErrorWarningLine} />
          <TagLabel fontWeight='semibold' fontSize='1rem'>{`Top ${rank} this month`}</TagLabel>
        </Tag>
        <HStack justify='center' align='center' spacing='0.6rem'>
          <Heading
            as='h4'
            lineHeight='100%'
            fontSize='1.2rem'
            textDecoration='line-through'
            fontWeight='extrabold'
            color={defaultPriceColor[colorMode]}
          >
            ${defaultPrice}
          </Heading>
          <Heading as='h4' lineHeight='100%' fontSize='1.4rem'>
            ${promoPrice}
          </Heading>
          <Button colorScheme='green' h='2.5rem' fontSize='1rem' borderRadius='0.4rem'>
            Buy Now!
          </Button>
        </HStack>
      </VStack>
    </GridItem>
  )
}
