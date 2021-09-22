import countries from 'world-countries'
import CountryInfo from './CountryInfo'
import styled from 'styled-components'

// Style
const Container = styled.div`
  position: absolute;
  top: 80pt;
  
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const App = (props) => {
  const sortedCountries = countries.sort((a, b) => b.area - a.area).filter(country => country.name.common !== 'Antarctica').slice(0, 15)

  return (
    <Container>
      {sortedCountries.map((country, index) => <CountryInfo country={country} detailed={index < 6} key={country.cca3} largest={sortedCountries[0].area} />)}
    </Container>
  )
}

export default App
