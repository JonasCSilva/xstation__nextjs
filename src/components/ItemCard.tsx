import { GridItem, Heading, Image, HStack, Button, Tag, TagLeftIcon, TagLabel } from '@chakra-ui/react'
import { RiErrorWarningLine } from 'react-icons/ri'

interface ItemCardProps {
  imageLink: string
  imageAlign?: string
  gameName: string
  fontSize?: string | number
  rank: number
  defaultPrice: number
  promoPrice: number
}

export default function ItemCard({ imageLink, imageAlign, gameName, fontSize = '2xl', rank = 1, defaultPrice, promoPrice }: ItemCardProps) {
  return (
    <GridItem w='100%' bg='gray.700' borderRadius={'2vw'} cursor='pointer' _hover={{ boxShadow: 'dark-lg' }} transition='ease-in-out 0.2s'>
      <Image w='100%' h='40vh' fit='cover' align={imageAlign} src={imageLink} alt='Game Image' borderTopRadius={'2vw'} />
      <Heading as={'h3'} fontSize={fontSize} textAlign='center' lineHeight={6} my={4}>
        {gameName}
      </Heading>
      <HStack justify='center'>
        <Tag size={'md'} variant='solid' bgColor='#ff754c' px={1}>
          <TagLeftIcon boxSize={5} as={RiErrorWarningLine} />
          <TagLabel fontWeight='semibold'>{`Top ${rank} this month`}</TagLabel>
        </Tag>
      </HStack>
      <HStack justify='center' my={4}>
        <HStack spacing={2} justify='center' align='center'>
          <Heading as='h4' lineHeight='100%' fontSize='lg' textDecoration='line-through' fontWeight='extrabold' color='gray.500'>
            ${defaultPrice}
          </Heading>
          <Heading as='h4' lineHeight='100%' fontSize='xl'>
            ${promoPrice}
          </Heading>
        </HStack>
        <Button colorScheme='green' size='sm'>
          Buy Now!
        </Button>
      </HStack>
    </GridItem>
  )
}
