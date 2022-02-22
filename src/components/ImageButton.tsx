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
      w='7rem'
      h='3.5rem'
      borderRadius='0.8rem'
      bg='none'
      isDisabled={selectedImageIndex === imageIndex}
      _disabled={{ opacity: 1, cursor: 'default' }}
      _selected={{ boxShadow: '0rem 0rem 1rem 0.15rem #fffeff' }}
      _hover={{ boxShadow: '0rem 0rem 1rem 0.05rem #fffeff' }}
    >
      <Image
        src={`/haloreach${imageIndex}.jpg`}
        alt={`Game Image ${imageIndex}`}
        borderWidth='0.15rem'
        borderStyle='solid'
        borderColor='#313b40'
        boxSize='inherit'
        fit='cover'
        borderRadius='inherit'
      />
    </Button>
  )
}
