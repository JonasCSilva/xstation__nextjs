import { VStack, Text } from '@chakra-ui/react'
import AsideMainButton from './AsideMainButton'
import { ButtonValues2 } from './AsideMain'
import { Dispatch, ReactElement, SetStateAction } from 'react'

type SectionProps = {
  title: string
  length1?: number
  length2?: number
  buttonValues: ButtonValues2[]
  buttonProps: {
    selectedButtonIndexState: [number, Dispatch<SetStateAction<number>>]
  }
  children?: ReactElement
}

export default function Section({ title, buttonValues, length1 = 0, length2, buttonProps, children }: SectionProps) {
  return (
    <VStack w='100%' spacing='0.5rem' align='flex-start'>
      <Text fontSize='0.8rem' ml='1.1rem'>
        {title}
      </Text>
      {buttonValues.slice(length1, length2).map(({ text, icon, index }) => (
        <AsideMainButton {...{ text }} {...{ icon }} key={index} {...{ index }} {...buttonProps} />
      ))}
      {children}
    </VStack>
  )
}
