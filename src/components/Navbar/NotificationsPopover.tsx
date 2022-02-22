import {
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  VStack,
  Center,
  Icon
} from '@chakra-ui/react'
import { FaRegBell } from 'react-icons/fa'
import DropdownOptionButton from './DropdownOptionButton'

export default function NotificationsPopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          aria-label='Notifications'
          position='relative'
          icon={
            <>
              <Icon as={FaRegBell} boxSize='2rem' />
              <Center
                as='span'
                position='absolute'
                top='-0.2rem'
                right='-0.2rem'
                fontSize='0.9rem'
                bgColor='orange.500'
                borderRadius='50%'
                zIndex={5}
                boxSize='1.5rem'
              >
                7
              </Center>
            </>
          }
          boxSize='3rem'
          variant='ghost'
        />
      </PopoverTrigger>
      <PopoverContent w='fit-content'>
        <PopoverArrow />
        <PopoverBody py='0.6rem'>
          <VStack spacing='0.5rem'>
            <DropdownOptionButton quantity={4} text='Unreal Messages' />
            <DropdownOptionButton quantity={1} text='Wishlist Product on sale' />
            <DropdownOptionButton quantity={2} text='Friendship Solicitations' />
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
