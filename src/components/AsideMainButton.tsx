import { As, Button, Text, Icon } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'

type AsideMainButtonProps = {
  selectedButtonIndexState: [number, Dispatch<SetStateAction<number>>]
  text: string
  index: number
  icon: As<any>
}

export default function AsideMainButton({
  selectedButtonIndexState: [selectedButtonIndex, setSelectedButtonIndex],
  text,
  index,
  icon
}: AsideMainButtonProps) {
  return (
    <Button
      onClick={() => setSelectedButtonIndex(index)}
      aria-selected={selectedButtonIndex === index}
      leftIcon={<Icon as={icon} boxSize='1.8rem' />}
      h='2.7rem'
      variant='ghost'
      isFullWidth
      display='flex'
      justifyContent='left'
      transition='ease-in-out 0.2s'
      borderRadius='0.4rem'
      _selected={{ bgColor: 'green.500' }}
    >
      <Text isTruncated fontSize='1rem'>
        {text}
      </Text>
    </Button>
  )
}
