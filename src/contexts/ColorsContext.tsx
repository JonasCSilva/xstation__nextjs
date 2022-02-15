import { useColorModeValue } from '@chakra-ui/react'
import { createContext, ReactNode } from 'react'

interface ColorsContextData {
  bgColor: string
}

// Context Code
export const ColorsContext = createContext({} as ColorsContextData)
//

export function ColorsContextProvider({ children }: { children: ReactNode }) {
  const bgColor = useColorModeValue('gray.200', 'gray.800')

  return (
    <ColorsContext.Provider
      value={{
        bgColor
      }}
    >
      {children}
    </ColorsContext.Provider>
  )
}
