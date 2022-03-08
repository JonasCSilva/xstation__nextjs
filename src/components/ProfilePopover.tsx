import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  VStack,
  Avatar,
  AvatarBadge,
  Button,
  useColorMode
} from '@chakra-ui/react'
import DropdownOptionButton from './DropdownOptionButton'
import { MdManageAccounts, MdLogout } from 'react-icons/md'
import { bgColor } from '../theme'

export default function ProfilePopover() {
  const { colorMode } = useColorMode()

  return (
    <Popover>
      <PopoverTrigger>
        <Button borderRadius='50%' boxSize='3rem' m={0} style={{ marginInline: 0 }}>
          <Avatar name={undefined} src={undefined} bgColor='green.500' boxSize='3rem' cursor='pointer' m={0}>
            <AvatarBadge boxSize='1.25rem' bg='green.500' borderColor={bgColor[colorMode]} m={0} />
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent w='fit-content'>
        <PopoverArrow />
        <PopoverBody>
          <VStack spacing='0.5rem' m={0}>
            <DropdownOptionButton text='Account' icon={MdManageAccounts} />
            <DropdownOptionButton text='Log out' icon={MdLogout} />
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
