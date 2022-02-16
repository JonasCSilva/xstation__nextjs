import { HStack, Avatar, AvatarBadge, IconButton, useMediaQuery } from '@chakra-ui/react'
import { useContext } from 'react'
import { FaRegBell } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { ColorsContext } from '../contexts/ColorsContext'

export default function Navbar() {
  const { bgColor } = useContext(ColorsContext)
  const [isMQTrue] = useMediaQuery('(min-aspect-ratio: 1/1)')

  return (
    <HStack
      as='nav'
      pos='fixed'
      left={isMQTrue ? '20%' : 0}
      top={0}
      w={isMQTrue ? '80%' : '100%'}
      h='12vh'
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
