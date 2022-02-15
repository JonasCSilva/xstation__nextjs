import { VStack, Divider } from '@chakra-ui/react'
import { useState } from 'react'
import AsideMainButton from './AsideMainButton'
import { MdOutlineWhatshot, MdOutlineNewReleases, MdOutlineLocalOffer, MdOutlineRecommend } from 'react-icons/md'
import { BsArrowDownCircle } from 'react-icons/bs'
import { HiOutlineChat, HiOutlineUserGroup } from 'react-icons/hi'
import { RiSettings3Line } from 'react-icons/ri'

export default function AsideMain() {
  const selectedButtonIndexState = useState(1)

  const buttonProps = {
    selectedButtonIndexState: selectedButtonIndexState
  }

  let index = 0

  return (
    <VStack w='80%' my={6}>
      <VStack w='100%'>
        <AsideMainButton text='Trending' icon={<MdOutlineWhatshot size={26} />} index={++index} {...buttonProps} />
        <AsideMainButton text='News' icon={<MdOutlineNewReleases size={26} />} index={++index} {...buttonProps} />
        <AsideMainButton text='Offers' icon={<MdOutlineLocalOffer size={26} />} index={++index} {...buttonProps} />
        <AsideMainButton text='Recommended' icon={<MdOutlineRecommend size={26} />} index={++index} {...buttonProps} />
      </VStack>
      <Divider />
      <VStack w='100%'>
        <AsideMainButton text='DylanH867' icon={<MdOutlineNewReleases size={26} />} index={++index} {...buttonProps} />
        <AsideMainButton text='Vincent_Parks45' icon={<MdOutlineNewReleases size={26} />} index={++index} {...buttonProps} />
        <AsideMainButton text='Richard_The_Pro' icon={<MdOutlineNewReleases size={26} />} index={++index} {...buttonProps} />
        <AsideMainButton text='xXThe_MasterXx' icon={<MdOutlineNewReleases size={26} />} index={++index} {...buttonProps} />
        <AsideMainButton text='OLeo_z' icon={<MdOutlineNewReleases size={26} />} index={++index} {...buttonProps} />
        <AsideMainButton text='Load More' icon={<BsArrowDownCircle size={26} />} index={++index} {...buttonProps} />
      </VStack>
      <Divider />
      <VStack w='100%'>
        <AsideMainButton text='Chat' icon={<HiOutlineChat size={26} />} index={++index} {...buttonProps} />
        <AsideMainButton text='Groups' icon={<HiOutlineUserGroup size={26} />} index={++index} {...buttonProps} />
        <AsideMainButton text='Settings' icon={<RiSettings3Line size={26} />} index={++index} {...buttonProps} />
      </VStack>
    </VStack>
  )
}
