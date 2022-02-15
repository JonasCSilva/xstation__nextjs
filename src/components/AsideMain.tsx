import { VStack, Divider } from '@chakra-ui/react'
import { useState } from 'react'
import AsideMainButton from './AsideMainButton'

export default function AsideMain() {
  const selectedButtonIndexState = useState(1)

  const buttonProps = {
    selectedButtonIndexState: selectedButtonIndexState
  }

  let index = 0

  return (
    <VStack w='80%' my={6}>
      <VStack w='100%'>
        <AsideMainButton text='Trending' index={++index} {...buttonProps} />
        <AsideMainButton text='News' index={++index} {...buttonProps} />
        <AsideMainButton text='Offers' index={++index} {...buttonProps} />
        <AsideMainButton text='Recommended' index={++index} {...buttonProps} />
      </VStack>
      <Divider />
      <VStack w='100%'>
        <AsideMainButton text='DylanH867' index={++index} {...buttonProps} />
        <AsideMainButton text='Vincent_Parks45' index={++index} {...buttonProps} />
        <AsideMainButton text='Richard_The_Pro' index={++index} {...buttonProps} />
        <AsideMainButton text='xXThe_MasterXx' index={++index} {...buttonProps} />
        <AsideMainButton text='OLeo_z' index={++index} {...buttonProps} />
        <AsideMainButton text='Load More' index={++index} {...buttonProps} />
      </VStack>
      <Divider />
      <VStack w='100%'>
        <AsideMainButton text='Chat' index={++index} {...buttonProps} />
        <AsideMainButton text='Groups' index={++index} {...buttonProps} />
        <AsideMainButton text='Settings' index={++index} {...buttonProps} />
      </VStack>
    </VStack>
  )
}
