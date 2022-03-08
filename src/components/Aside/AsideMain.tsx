import { VStack, Button, Heading, Icon, StackDivider } from '@chakra-ui/react'
import { useState } from 'react'
import { MdOutlineWhatshot, MdOutlineNewReleases, MdOutlineLocalOffer, MdOutlineRecommend } from 'react-icons/md'
import { BsArrowDownCircle } from 'react-icons/bs'
import { HiOutlineChat, HiOutlineUserGroup } from 'react-icons/hi'
import { RiSettings3Line } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { IconType } from 'react-icons'
import AsideMainSection from './AsideMainSection'

type ButtonValues = {
  text: string
  icon: IconType
}

export type ButtonValues2 = ButtonValues & {
  index: number
}

export default function AsideMain() {
  const selectedButtonIndexState = useState(1)

  const buttonProps = {
    selectedButtonIndexState: selectedButtonIndexState
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

  const SectionProps = {
    buttonValues: test2,
    buttonProps
  }

  const length1 = buttonValues1.length
  const length2 = buttonValues1.length + buttonValues2.length

  return (
    <VStack w='80%' spacing='0.75rem' py='0.75rem' h='fit-content' divider={<StackDivider borderWidth='0.05rem' />}>
      <AsideMainSection title='Store' {...SectionProps} length2={length1} />
      <AsideMainSection title='Friends' {...SectionProps} {...{ length1 }} {...{ length2 }}>
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
      </AsideMainSection>
      <AsideMainSection title='General' {...SectionProps} length1={length2} />
    </VStack>
  )
}
