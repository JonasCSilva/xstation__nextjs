import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  VStack,
  Avatar,
  AvatarBadge
} from '@chakra-ui/react'
import DropdownOptionButton from './DropdownOptionButton'
import { ColorsContext } from '../contexts/ColorsContext'
import { useContext } from 'react'
import { MdManageAccounts, MdLogout } from 'react-icons/md'

export default function ProfilePopover() {
  const { bgColor } = useContext(ColorsContext)

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar name={undefined} src={undefined} bg='green.500' boxSize='3rem' cursor='pointer'>
          <AvatarBadge boxSize='1.25rem' bg='green.500' borderColor={bgColor} />
        </Avatar>
      </PopoverTrigger>
      <PopoverContent w='fit-content'>
        <PopoverArrow />
        <PopoverBody py='0.6rem'>
          <VStack spacing='0.5rem'>
            <DropdownOptionButton text='Account' icon={MdManageAccounts} />
            <DropdownOptionButton text='Log out' icon={MdLogout} />
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
