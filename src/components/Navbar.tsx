import { Flex } from '@chakra-ui/react'
import { useContext } from 'react'
import { ColorsContext } from '../contexts/ColorsContext'

export default function Navbar() {
  const { bgColor } = useContext(ColorsContext)

  return (
    <Flex
      as={'nav'}
      pos='fixed'
      left={'16%'}
      top={0}
      w='84%'
      h='12vh'
      bgColor={bgColor}
      zIndex={2}
      borderBottomWidth={1}
      borderBottomColor={'gray.700'}
      borderBottomStyle='solid'
    />
  )
}
