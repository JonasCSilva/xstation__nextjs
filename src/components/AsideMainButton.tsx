import { Button, Heading } from '@chakra-ui/react'
import { Dispatch, JSXElementConstructor, ReactElement, SetStateAction } from 'react'

const buttonStyle = {
  h: '2.7rem',
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
  icon: ReactElement<any, string | JSXElementConstructor<any>>
}

export default function AsideMainButton({
  selectedButtonIndexState: [selectedButtonIndex, setSelectedButtonIndex],
  text,
  index,
  icon
}: AsideMainButtonProps) {
  return (
    <Button
      borderRadius='0.4rem'
      onClick={() => setSelectedButtonIndex(index)}
      aria-selected={selectedButtonIndex === index}
      _selected={{ bgColor: 'green.500' }}
      leftIcon={icon}
      {...buttonStyle}
    >
      <Heading isTruncated fontSize='1.1rem'>
        {text}
      </Heading>
    </Button>
  )
}
