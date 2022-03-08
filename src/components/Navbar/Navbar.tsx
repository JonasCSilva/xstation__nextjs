import { HStack } from '@chakra-ui/react'
import { useContext } from 'react'
import { ColorsContext } from '../../contexts/ColorsContext'
import BrowsePopover from './BrowsePopover'
import NotificationsPopover from './NotificationsPopover'
import ProfilePopover from './ProfilePopover'
import SearchBar from './SearchBar'

export default function Navbar() {
  const { bgColor } = useContext(ColorsContext)

  return (
    <HStack
      as='nav'
      pos='fixed'
      left={{ base: 0, lg: '16rem' }}
      top={{ base: undefined, lg: 0 }}
      bottom={{ base: 0, lg: undefined }}
      w={{ base: '100%', lg: 'calc(100% - 16rem)' }}
      h='6rem'
      px='2rem'
      bgColor={bgColor}
      zIndex={2}
      borderBottomWidth={{ base: 0, lg: '0.1rem' }}
      borderTopWidth={{ base: '0.25rem', lg: 0 }}
      borderBottomColor='gray.700'
      borderBottomStyle='solid'
      justify='space-around'
    >
      <BrowsePopover />
      <SearchBar />
      <NotificationsPopover />
      <ProfilePopover />
    </HStack>
  )
}
