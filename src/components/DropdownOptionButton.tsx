import { Text, Button, Icon, As } from '@chakra-ui/react'

type DropdownOptionButtonProps = {
  quantity?: number
  icon?: As<any>
  text: string
}

export default function DropdownOptionButton({ quantity, text, icon }: DropdownOptionButtonProps) {
  return (
    <Button variant='ghost' isFullWidth leftIcon={icon && <Icon as={icon} boxSize='1.4rem' m={0} />}>
      {quantity && (
        <Text as='span' color='orange.500' /* mr='0.4rem' */ fontSize='1.4rem'>
          {quantity}
        </Text>
      )}
      {text}
    </Button>
  )
}
