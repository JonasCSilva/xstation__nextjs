import { Flex } from '@chakra-ui/react'
import AsideFooter from './AsideFooter'
import AsideHeader from './AsideHeader'
import AsideMain from './AsideMain'

export default function Aside() {
  return (
    <Flex
      display={{ base: 'none', lg: 'block' }}
      as='aside'
      pos='fixed'
      left={0}
      top={0}
      direction='column'
      justify='space-between'
      align='center'
      w='16rem'
      h='100%'
      borderRightWidth='0.1rem'
      borderRightColor='gray.700'
      borderRightStyle='solid'
      p={0}
    >
      <AsideHeader />
      <Flex w='100%' h='calc(100% - 12rem)' justify='center' overflowY='scroll'>
        <AsideMain />
      </Flex>
      <AsideFooter />
    </Flex>
  )
}
