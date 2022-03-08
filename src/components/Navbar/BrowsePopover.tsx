import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  VStack,
  Button,
  Icon
} from '@chakra-ui/react'
import DropdownOptionButton from './DropdownOptionButton'
import { FaRegCompass } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'

const genresArray = [
  'Action',
  'Action-Adventure',
  'Adventure',
  'Role-Playing',
  'Simulation',
  'Strategy',
  'Sports',
  'MMO'
]

export default function BrowsePopover() {
  return (
    <Popover>
      {({ isOpen }) => (
        <>
          <PopoverTrigger>
            <Button
              leftIcon={<Icon as={FaRegCompass} boxSize='2rem' />}
              rightIcon={
                <Icon
                  as={IoIosArrowDown}
                  transform={isOpen ? 'rotate(180deg)' : undefined}
                  transition='ease-in-out 0.3s'
                  boxSize='2rem'
                />
              }
              variant='ghost'
              h='3rem'
              fontSize='lg'
            >
              Browse
            </Button>
          </PopoverTrigger>
          <PopoverContent w='fit-content'>
            <PopoverArrow />
            <PopoverBody py='0.6rem'>
              <VStack spacing='0.5rem'>
                {genresArray.map((value, index) => (
                  <DropdownOptionButton key={index} text={value} />
                ))}
              </VStack>
            </PopoverBody>
          </PopoverContent>
        </>
      )}
    </Popover>
  )
}
