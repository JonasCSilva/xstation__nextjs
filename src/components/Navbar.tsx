import { HStack, IconButton, Input, InputLeftElement, InputGroup, useColorMode } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import { bgColor } from '../theme'
import BrowsePopover from './BrowsePopover'
import NotificationsPopover from './NotificationsPopover'
import ProfilePopover from './ProfilePopover'

export default function Navbar() {
  const { colorMode } = useColorMode()

  return (
    <HStack
      as='nav'
      pos='fixed'
      left={{ base: 0, lg: '16rem' }}
      top={0}
      w={{ base: '100%', lg: 'calc(100% - 16rem)' }}
      h='6rem'
      px='2rem'
      bgColor={bgColor[colorMode]}
      zIndex={2}
      borderBottomWidth='0.1rem'
      borderBottomColor='gray.700'
      borderBottomStyle='solid'
      justify='space-around'
    >
      <BrowsePopover />
      <InputGroup size='lg' w='40%' role='group'>
        <Input
          size='lg'
          _groupHover={{ borderColor: 'green.500', boxShadow: '0 0.1rem 0 0 #38A169' }}
          _focus={{ borderColor: 'green.500', boxShadow: '0 0.1rem 0 0 #38A169' }}
          variant='flushed'
          placeholder='Search anything'
        />
        <InputLeftElement>
          <IconButton aria-label='Search games' icon={<FiSearch size={32} />} boxSize='3rem' variant='ghost' />
        </InputLeftElement>
      </InputGroup>
      <NotificationsPopover />
      <ProfilePopover />
    </HStack>
  )
}
