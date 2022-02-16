import { VStack, Divider, Button, Heading } from '@chakra-ui/react'
import { useState } from 'react'
import AsideMainButton from './AsideMainButton'
import { MdOutlineWhatshot, MdOutlineNewReleases, MdOutlineLocalOffer, MdOutlineRecommend } from 'react-icons/md'
import { BsArrowDownCircle } from 'react-icons/bs'
import { HiOutlineChat, HiOutlineUserGroup } from 'react-icons/hi'
import { RiSettings3Line } from 'react-icons/ri'

const buttonStyle = {
  h: '5.4vh',
  variant: 'ghost',
  isFullWidth: true
}

export default function AsideMain() {
  const selectedButtonIndexState = useState(1)

  const buttonProps = {
    selectedButtonIndexState: selectedButtonIndexState
  }

  let index = 0

  return (
    <VStack w='16vw'>
      <VStack w='16vw'>
        <AsideMainButton text='Trending' icon={<MdOutlineWhatshot size='1.8vw' />} index={++index} {...buttonProps} />
        <AsideMainButton text='News' icon={<MdOutlineNewReleases size='1.8vw' />} index={++index} {...buttonProps} />
        <AsideMainButton text='Offers' icon={<MdOutlineLocalOffer size='1.8vw' />} index={++index} {...buttonProps} />
        <AsideMainButton text='Recommended' icon={<MdOutlineRecommend size='1.8vw' />} index={++index} {...buttonProps} />
      </VStack>
      <Divider />
      <VStack w='16vw'>
        <AsideMainButton text='DylanH867' icon={<MdOutlineNewReleases size='1.8vw' />} index={++index} {...buttonProps} />
        <AsideMainButton text='Vincent_Parks45' icon={<MdOutlineNewReleases size='1.8vw' />} index={++index} {...buttonProps} />
        <AsideMainButton text='Richard_The_Pro' icon={<MdOutlineNewReleases size='1.8vw' />} index={++index} {...buttonProps} />
        <AsideMainButton text='xXThe_MasterXx' icon={<MdOutlineNewReleases size='1.8vw' />} index={++index} {...buttonProps} />
        <AsideMainButton text='OLeo_z' icon={<MdOutlineNewReleases size='1.8vw' />} index={++index} {...buttonProps} />
        <Button rightIcon={<BsArrowDownCircle size='1.8vw' />} {...buttonStyle}>
          <Heading isTruncated fontSize='1.1vw'>
            Load More
          </Heading>
        </Button>
      </VStack>
      <Divider />
      <VStack w='16vw'>
        <AsideMainButton text='Chat' icon={<HiOutlineChat size='1.8vw' />} index={++index} {...buttonProps} />
        <AsideMainButton text='Groups' icon={<HiOutlineUserGroup size='1.8vw' />} index={++index} {...buttonProps} />
        <AsideMainButton text='Settings' icon={<RiSettings3Line size='1.8vw' />} index={++index} {...buttonProps} />
      </VStack>
    </VStack>
  )
}
