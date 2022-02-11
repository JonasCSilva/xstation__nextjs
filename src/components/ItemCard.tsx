import { GridItem, Heading, Image } from '@chakra-ui/react'

interface ItemCardProps {
  ImageLink: string
  ImageAlign?: string
  GameName: string
}

export default function ItemCard({ ImageLink, ImageAlign, GameName }: ItemCardProps) {
  return (
    <GridItem w='100%' h='60vh' bg='gray.700' borderRadius={'2vw'}>
      <Image w='100%' h='70%' fit='cover' align={ImageAlign} src={ImageLink} alt='Game Image' borderTopRadius={'2vw'} />
      <Heading>{GameName}</Heading>
    </GridItem>
  )
}
