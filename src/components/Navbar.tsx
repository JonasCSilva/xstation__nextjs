import {
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  VStack
} from '@chakra-ui/react'
import { useContext } from 'react'
import { FaRegBell } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { ColorsContext } from '../contexts/ColorsContext'
import NotificationButton from './NotificationButton'

export default function Navbar() {
  const { bgColor } = useContext(ColorsContext)

  return (
    <HStack
      as='nav'
      pos='fixed'
      left={{ base: 0, lg: '18rem' }}
      top={0}
      w={{ base: '100%', lg: 'calc(100% - 18rem)' }}
      h='6rem'
      bgColor={bgColor}
      zIndex={2}
      borderBottomWidth='0.1rem'
      borderBottomColor='gray.700'
      borderBottomStyle='solid'
      justify='space-around'
    >
      <IconButton aria-label='Search games' icon={<FiSearch size='2rem' />} boxSize='3rem' variant='ghost' />
      <Popover>
        <PopoverTrigger>
          <IconButton aria-label='Notifications' icon={<FaRegBell size='2rem' />} boxSize='3rem' variant='ghost' />
        </PopoverTrigger>
        <PopoverContent w='fit-content'>
          <PopoverArrow />
          <PopoverBody py='0.6rem'>
            <VStack spacing='0.5rem'>
              <NotificationButton quantity={4} text='Unreal Messages' />
              <NotificationButton quantity={1} text='Wishlist Product on sale' />
              <NotificationButton quantity={2} text='Friendship Solicitations' />
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>

      <Avatar name={undefined} src={undefined} bg='green.500' boxSize='3rem'>
        <AvatarBadge boxSize='1.25rem' bg='green.500' borderColor={bgColor} />
      </Avatar>
    </HStack>
  )
}
