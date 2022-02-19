import { Grid } from '@chakra-ui/react'
import { GameCardsValues } from '../types'
import GameCard from './GameCard'

export default function GamesGrid({ gameCardsValues }: { gameCardsValues: GameCardsValues[] }) {
  return (
    <Grid
      templateColumns={{ base: 'repeat(auto-fill, minmax(20rem, 1fr))', xl: 'repeat(3, 1fr)', '2xl': 'repeat(4, 1fr)' }}
      gap='3rem'
      w='90%'
    >
      {gameCardsValues.map(({ gameName, imageLink, defaultPrice, promoPrice, imageAlign, fontSize }, index) => {
        return (
          <GameCard
            key={index}
            rank={++index}
            {...{ gameName, imageLink, defaultPrice, promoPrice, imageAlign, fontSize }}
          />
        )
      })}
    </Grid>
  )
}
