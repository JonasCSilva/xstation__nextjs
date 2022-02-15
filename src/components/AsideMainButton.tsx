import { Button, Heading } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'
import { MdOutlineWhatshot } from 'react-icons/md'

const buttonStyle = {
  size: 'md',
  variant: 'ghost',
  isFullWidth: true,
  display: 'flex',
  justifyContent: 'left',
  transition: 'ease-in-out 0.2s'
}

type AsideMainButtonProps = {
  selectedButtonIndexState: [number, Dispatch<SetStateAction<number>>]
  text: string
  index: number
}

export default function AsideMainButton({
  selectedButtonIndexState: [selectedButtonIndex, setSelectedButtonIndex],
  text,
  index
}: AsideMainButtonProps) {
  return (
    <Button
      onClick={() => setSelectedButtonIndex(index)}
      aria-selected={selectedButtonIndex === index}
      _selected={{ bgColor: 'green.500' }}
      leftIcon={<MdOutlineWhatshot />}
      {...buttonStyle}
    >
      <Heading isTruncated size='sm'>
        {text}
      </Heading>
    </Button>
  )
}
