import { Button, Image } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'

type ImageButtonProps = {
  selectedImageNumberState: [number, Dispatch<SetStateAction<number>>]
  imageNumber: number
  setImage: Dispatch<SetStateAction<string>>
}

export default function ImageButton({
  selectedImageNumberState: [selectedImageNumber, setSelectedImageNumber],
  imageNumber,
  setImage
}: ImageButtonProps) {
  return (
    <Button
      onClick={() => {
        setSelectedImageNumber(imageNumber)
        setImage(`/haloreach${imageNumber}.jpeg`)
      }}
      aria-selected={selectedImageNumber === imageNumber}
      p={0}
      w='9vw'
      h='9vh'
      _selected={{ boxShadow: '0rem 0rem 1rem 0.15rem #fffeff' }}
      _hover={{ boxShadow: '0rem 0rem 1rem 0.05rem #fffeff' }}
    >
      <Image
        src={`/haloreach${imageNumber}.jpeg`}
        alt={`Game Image ${imageNumber}`}
        borderWidth={1}
        borderStyle='solid'
        borderColor='#313b40'
        boxSize='inherit'
        fit='cover'
        borderRadius='inherit'
      />
    </Button>
  )
}
