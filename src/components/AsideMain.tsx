import { VStack, Divider, Button, Heading, Icon } from '@chakra-ui/react'
import { useState } from 'react'
import AsideMainButton from './AsideMainButton'
import { MdOutlineWhatshot, MdOutlineNewReleases, MdOutlineLocalOffer, MdOutlineRecommend } from 'react-icons/md'
import { BsArrowDownCircle } from 'react-icons/bs'
import { HiOutlineChat, HiOutlineUserGroup } from 'react-icons/hi'
import { RiSettings3Line } from 'react-icons/ri'

const buttonStyle = {
  h: '2.7rem',
  variant: 'ghost',
  isFullWidth: true,
  borderRadius: '0.4rem'
}

export default function AsideMain() {
  const selectedButtonIndexState = useState(1)

  const buttonProps = {
    selectedButtonIndexState: selectedButtonIndexState
  }

  let index = 0

  return (
    <VStack w='80%' spacing='0.75rem'>
      <VStack w='100%' spacing='0.5rem'>
        <AsideMainButton text='Trending' icon={MdOutlineWhatshot} index={++index} {...buttonProps} />
        <AsideMainButton text='News' icon={MdOutlineNewReleases} index={++index} {...buttonProps} />
        <AsideMainButton text='Offers' icon={MdOutlineLocalOffer} index={++index} {...buttonProps} />
        <AsideMainButton text='Recommended' icon={MdOutlineRecommend} index={++index} {...buttonProps} />
      </VStack>
      <Divider borderWidth='0.05rem' />
      <VStack w='100%' spacing='0.5rem'>
        <AsideMainButton text='DylanH867' icon={MdOutlineNewReleases} index={++index} {...buttonProps} />
        <AsideMainButton text='Vincent_Parks45' icon={MdOutlineNewReleases} index={++index} {...buttonProps} />
        <AsideMainButton text='Richard_The_Pro' icon={MdOutlineNewReleases} index={++index} {...buttonProps} />
        <AsideMainButton text='xXThe_MasterXx' icon={MdOutlineNewReleases} index={++index} {...buttonProps} />
        <AsideMainButton text='OLeo_z' icon={MdOutlineNewReleases} index={++index} {...buttonProps} />
        <Button rightIcon={<Icon as={BsArrowDownCircle} boxSize='1.8rem' />} {...buttonStyle}>
          <Heading isTruncated fontSize='1.1rem'>
            Load More
          </Heading>
        </Button>
      </VStack>
      <Divider borderWidth='0.05rem' />
      <VStack w='100%' spacing='0.5rem'>
        <AsideMainButton text='Chat' icon={HiOutlineChat} index={++index} {...buttonProps} />
        <AsideMainButton text='Groups' icon={HiOutlineUserGroup} index={++index} {...buttonProps} />
        <AsideMainButton text='Settings' icon={RiSettings3Line} index={++index} {...buttonProps} />
      </VStack>
    </VStack>
  )
}
