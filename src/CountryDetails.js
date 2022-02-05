import CountryInfo from './CountryInfo'
import { useParams } from 'react-router'
import styled from 'styled-components'
import countries from 'world-countries'
import Header from './Header'

// Style
const Container = styled.div`
  margin-top: 70pt;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const Info = styled.div`
  text-align: center;
`

const HorizontalLine = styled.hr`
  width: 300pt;
  opacity: .4;
`

// Component
const CountryDetails = () => {
  // Function
  const getCountryByCca3 = (cca3) => {
    const CountryByCca3 = countries.find(country => country.cca3 === cca3)
    return (CountryByCca3)
  }

  // Constants
  const { cca3 } = useParams()
  const clickedCountry = getCountryByCca3(cca3)
  const borderCountries = clickedCountry.borders.map(border => getCountryByCca3(border))
  const SortedBorderCountries = borderCountries.sort((a, b) => b.area - a.area)

  return (
    <div>

      <Header displayedCountries={SortedBorderCountries} />
      <Info>
        {SortedBorderCountries.length === 0
          ? <h1>🤷🏽‍♂️ {getCountryByCca3(cca3).name.common} does not have any border countries</h1>
          : (
            <div>
              <HorizontalLine></HorizontalLine>
              <h4>Border countries to</h4>
              <h1>{getCountryByCca3(cca3).flag} {getCountryByCca3(cca3).name.common}</h1>
            </div>
          )}
      </Info>

      <Container>
        {SortedBorderCountries.map((country) => <CountryInfo country={country} detailed key={country.cca3} largest={SortedBorderCountries[0].area} />)}
      </Container>
    </div>
  )
}

export default CountryDetails
