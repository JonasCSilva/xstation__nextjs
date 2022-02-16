import { Button, Image } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'

type ImageButtonProps = {
  selectedImageIndexState: [number, Dispatch<SetStateAction<number>>]
  imageIndex: number
  setImageSrc: Dispatch<SetStateAction<string>>
}

export default function ImageButton({
  selectedImageIndexState: [selectedImageIndex, setSelectedimageIndex],
  imageIndex,
  setImageSrc
}: ImageButtonProps) {
  return (
    <Button
      onClick={() => {
        setSelectedimageIndex(imageIndex)
        setImageSrc(`/haloreach${imageIndex}.jpg`)
      }}
      aria-selected={selectedImageIndex === imageIndex}
      p={0}
      w='9vw'
      h='9vh'
      borderRadius='0.8vw'
      isDisabled={selectedImageIndex === imageIndex}
      _disabled={{ opacity: 1, cursor: 'default' }}
      _selected={{ boxShadow: '0rem 0rem 1vw 0.15vw #fffeff' }}
      _hover={{ boxShadow: '0rem 0rem 1vw 0.05vw #fffeff' }}
    >
      <Image
        src={`/haloreach${imageIndex}.jpg`}
        alt={`Game Image ${imageIndex}`}
        borderWidth='0.1vw'
        borderStyle='solid'
        borderColor='#313b40'
        boxSize='inherit'
        fit='cover'
        borderRadius='inherit'
      />
    </Button>
  )
}
