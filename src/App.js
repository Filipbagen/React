import countries from 'world-countries'
import CountryInfo from './CountryInfo'
// import styled from 'styled-components'

// const countryBlock = styled.div`

// `

const App = (props) => {
  countries.sort((a, b) => b.area - a.area)
  const sortedCountries = countries.filter(country => country.name.common !== 'Antarctica').slice(0, 15)

  return (
    <div>
      {sortedCountries.map((country, index) => <CountryInfo country={country} detailed={index < 5} key={country.cca3} largest={countries[0].area} />)}
    </div>
  )
}

export default App
