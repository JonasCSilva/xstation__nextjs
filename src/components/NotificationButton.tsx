import { Text, Button } from '@chakra-ui/react'

type NotificationButtonProps = {
  quantity: number
  text: string
}

export default function NotificationButton({ quantity, text }: NotificationButtonProps) {
  return (
    <Button variant='ghost'>
      <Text as='span' color='orange.500' mr='0.4rem' fontSize='1.4rem'>
        {quantity}
      </Text>
      {text}
    </Button>
  )
}
