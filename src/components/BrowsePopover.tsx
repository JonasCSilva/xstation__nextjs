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

export default function BrowsePopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button leftIcon={<Icon as={FaRegCompass} />} rightIcon={<Icon as={IoIosArrowDown} />} variant='ghost'>
          Browse
        </Button>
      </PopoverTrigger>
      <PopoverContent w='fit-content'>
        <PopoverArrow />
        <PopoverBody py='0.6rem'>
          <VStack spacing='0.5rem'>
            <DropdownOptionButton text='Action' />
            <DropdownOptionButton text='Action-Adventure' />
            <DropdownOptionButton text='Adventure' />
            <DropdownOptionButton text='Role-Playing' />
            <DropdownOptionButton text='Simulation' />
            <DropdownOptionButton text='Strategy' />
            <DropdownOptionButton text='Sports' />
            <DropdownOptionButton text='MMO' />
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
