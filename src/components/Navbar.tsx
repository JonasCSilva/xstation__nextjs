import { HStack, Avatar, AvatarBadge, IconButton } from '@chakra-ui/react'
import { useContext } from 'react'
import { FaRegBell } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { ColorsContext } from '../contexts/ColorsContext'
import useWindowSize from '../hooks/useWindowSize'

export default function Navbar() {
  const { bgColor } = useContext(ColorsContext)
  const isMQTrue = useWindowSize()

  return (
    <HStack
      as='nav'
      pos='fixed'
      left={isMQTrue ? 0 : '20%'}
      top={0}
      w={isMQTrue ? '100vw' : '80%'}
      h={isMQTrue ? '8vh' : '12vh'}
      bgColor={bgColor}
      zIndex={2}
      borderBottomWidth='0.1vw'
      borderBottomColor='gray.700'
      borderBottomStyle='solid'
      justify='space-around'
    >
      <IconButton aria-label='Search games' icon={<FiSearch size='2vw' />} boxSize='3vw' variant='ghost' />
      <IconButton aria-label='Notifications' icon={<FaRegBell size='2vw' />} boxSize='3vw' variant='ghost' />
      <Avatar name={undefined} src={undefined} bg='green.500' boxSize='3.5vw'>
        <AvatarBadge boxSize='1.5vw' bg='green.500' borderColor={bgColor} />
      </Avatar>
    </HStack>
  )
}
