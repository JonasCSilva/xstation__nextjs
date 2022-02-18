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
      h='6rem'
      bgColor={bgColor}
      zIndex={2}
      borderBottomWidth='0.1rem'
      borderBottomColor='gray.700'
      borderBottomStyle='solid'
      justify='space-around'
    >
      <IconButton aria-label='Search games' icon={<FiSearch size='2rem' />} boxSize='3rem' variant='ghost' />
      <IconButton aria-label='Notifications' icon={<FaRegBell size='2rem' />} boxSize='3rem' variant='ghost' />
      <Avatar name={undefined} src={undefined} bg='green.500' boxSize='3rem'>
        <AvatarBadge boxSize='1.25rem' bg='green.500' borderColor={bgColor} />
      </Avatar>
    </HStack>
  )
}
