import { VStack, Button, Heading, Icon, StackDivider, Text } from '@chakra-ui/react'
import { useState } from 'react'
import AsideMainButton from './AsideMainButton'
import { MdOutlineWhatshot, MdOutlineNewReleases, MdOutlineLocalOffer, MdOutlineRecommend } from 'react-icons/md'
import { BsArrowDownCircle } from 'react-icons/bs'
import { HiOutlineChat, HiOutlineUserGroup } from 'react-icons/hi'
import { RiSettings3Line } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { IconType } from 'react-icons'

export default function AsideMain() {
  const selectedButtonIndexState = useState(1)

  const buttonProps = {
    selectedButtonIndexState: selectedButtonIndexState
  }

  type ButtonValues = {
    text: string
    icon: IconType
  }

  type ButtonValues2 = ButtonValues & {
    index: number
  }

  const buttonValues1: ButtonValues[] = [
    {
      text: 'Trending',
      icon: MdOutlineWhatshot
    },
    {
      text: 'News',
      icon: MdOutlineNewReleases
    },
    {
      text: 'Offers',
      icon: MdOutlineLocalOffer
    },
    {
      text: 'Recommended',
      icon: MdOutlineRecommend
    }
  ]

  const buttonValues2: ButtonValues[] = [
    {
      text: 'DylanH867',
      icon: CgProfile
    },
    {
      text: 'Vincent_Parks45',
      icon: CgProfile
    },
    {
      text: 'Richard_The_Pro',
      icon: CgProfile
    },
    {
      text: 'xXThe_MasterXx',
      icon: CgProfile
    },
    {
      text: 'OLeo_z',
      icon: CgProfile
    }
  ]

  const buttonValues3: ButtonValues[] = [
    {
      text: 'Chat',
      icon: HiOutlineChat
    },
    {
      text: 'Groups',
      icon: HiOutlineUserGroup
    },
    {
      text: 'Settings',
      icon: RiSettings3Line
    }
  ]

  const test: ButtonValues[] = [...buttonValues1, ...buttonValues2, ...buttonValues3]

  const test2: ButtonValues2[] = test.map((value, index) => ({ ...value, index }))

  const length1 = buttonValues1.length
  const length2 = buttonValues1.length + buttonValues2.length

  return (
    <VStack w='80%' spacing='0.75rem' py='0.75rem' h='fit-content' divider={<StackDivider borderWidth='0.05rem' />}>
      <VStack w='100%' spacing='0.5rem' align='flex-start'>
        <Text fontSize='0.8rem' ml='1.1rem'>
          Store
        </Text>
        {test2.slice(0, length1).map(({ text, icon, index }) => (
          <AsideMainButton {...{ text }} {...{ icon }} key={index} {...{ index }} {...buttonProps} />
        ))}
      </VStack>
      <VStack w='100%' spacing='0.5rem' align='flex-start'>
        <Text fontSize='0.8rem' ml='1.1rem'>
          Friends
        </Text>
        {test2.slice(length1, length2).map(({ text, icon, index }) => (
          <AsideMainButton {...{ text }} {...{ icon }} key={index} {...{ index }} {...buttonProps} />
        ))}
        <Button
          rightIcon={<Icon as={BsArrowDownCircle} boxSize='1.8rem' />}
          h='2.7rem'
          variant='ghost'
          isFullWidth
          borderRadius='0.4rem'
        >
          <Heading isTruncated fontSize='1.1rem'>
            Load More
          </Heading>
        </Button>
      </VStack>
      <VStack w='100%' spacing='0.5rem' align='flex-start'>
        <Text fontSize='0.8rem' ml='1.1rem'>
          Unity Gaming
        </Text>
        {test2.slice(length2).map(({ text, icon, index }) => (
          <AsideMainButton {...{ text }} {...{ icon }} key={index} {...{ index }} {...buttonProps} />
        ))}
      </VStack>
    </VStack>
  )
}
