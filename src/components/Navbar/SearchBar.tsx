import { IconButton, Input, InputLeftElement, InputGroup } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'

export default function SearchBar() {
  return (
    <InputGroup size='lg' w='40%' role='group'>
      <Input
        size='lg'
        _groupHover={{ borderColor: 'green.500', boxShadow: '0 0.1rem 0 0 #38A169' }}
        _focus={{ borderColor: 'green.500', boxShadow: '0 0.1rem 0 0 #38A169' }}
        variant='flushed'
        placeholder='Search anything'
      />
      <InputLeftElement>
        <IconButton aria-label='Search games' icon={<FiSearch size='2rem' />} boxSize='3rem' variant='ghost' />
      </InputLeftElement>
    </InputGroup>
  )
}
