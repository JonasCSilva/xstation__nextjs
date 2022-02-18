import { Grid } from '@chakra-ui/react'
import GameCard from './GameCard'

export default function GamesGrid() {
  return (
    <Grid
      templateColumns={{ base: 'repeat(auto-fill, minmax(20rem, 1fr))', xl: 'repeat(3, 1fr)', '2xl': 'repeat(4, 1fr)' }}
      gap='3rem'
      w='90%'
    >
      <GameCard rank={1} defaultPrice={34} promoPrice={19} gameName='The Witcher 3' imageAlign='40% 50%' imageLink='/thewitcher.jpg' />
      <GameCard
        rank={2}
        defaultPrice={59}
        promoPrice={54}
        gameName='Red Dead Redemption 2'
        imageAlign='55% 99%'
        fontSize='1.2rem'
        imageLink='/reddead2.jpg'
      />
      <GameCard rank={3} defaultPrice={49} promoPrice={24} gameName='GTA 5' imageAlign='48% 50%' imageLink='/gta5.jpg' />
      <GameCard rank={4} defaultPrice={49} promoPrice={39} gameName='Fallout 4' imageAlign='15% 18%' imageLink='/fallout4.jpg' />
      <GameCard
        rank={5}
        defaultPrice={34}
        promoPrice={19}
        gameName='Dragon Age Inquisition'
        fontSize='1.3rem'
        imageAlign='27% 50%'
        imageLink='/dragonage.jpg'
      />
      <GameCard rank={6} defaultPrice={29} promoPrice={14} gameName='TES 5: Skyrim' imageAlign='45% 50%' imageLink='/skyrim.jpg' />
      <GameCard rank={8} defaultPrice={19} promoPrice={9} gameName='Bioshock Infinite' imageLink='/bioshock.jpg' />
      <GameCard
        rank={9}
        defaultPrice={39}
        promoPrice={29}
        gameName='MGS 5: The Phantom Pain'
        fontSize='1.2rem'
        imageAlign='28% 50%'
        imageLink='/metalgear.jpg'
      />
    </Grid>
  )
}
