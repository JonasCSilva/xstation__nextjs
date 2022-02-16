import { HStack, Avatar, AvatarBadge, IconButton } from '@chakra-ui/react'
import { useContext } from 'react'
import { FaRegBell } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { ColorsContext } from '../contexts/ColorsContext'

export default function Navbar() {
  const { bgColor } = useContext(ColorsContext)

  return (
    <HStack
      as='nav'
      pos='fixed'
      left='20%'
      top={0}
      w='80%'
      h='12vh'
      bgColor={bgColor}
      zIndex={2}
      borderBottomWidth={1}
      borderBottomColor='gray.700'
      borderBottomStyle='solid'
      justify='space-around'
    >
      <IconButton aria-label='Search games' icon={<FiSearch size={26} />} size='lg' variant='ghost' />
      <IconButton aria-label='Notifications' icon={<FaRegBell size={24} />} size='lg' variant='ghost' />
      <Avatar name='Jonas Silva' src={undefined} bg='green.500'>
        <AvatarBadge boxSize='1.25em' bg='green.500' />
      </Avatar>
    </HStack>
  )
}
