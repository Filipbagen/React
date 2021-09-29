import countries from 'world-countries'
import CountryInfo from './CountryInfo'
import styled from 'styled-components'
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { useParams } from 'react-router'

// Style
const Container = styled.div`
  position: absolute;
  top: 80pt;
  
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const App = () => {
  return (
    <Router>
      <div>
        <Switch>

          <Route path='/country/:cca3'>
            <CountryDetails />
          </Route>

          <Route path='/'>
            <CountryList />
          </Route>

        </Switch>
      </div>
    </Router>
  )
}

const CountryList = (props) => {
  const sortedCountries = countries.sort((a, b) => b.area - a.area).filter(country => country.name.common !== 'Antarctica').slice(0, 15)
  const [searchString, setSearchString] = useState('')

  const TextInput = event => {
    setSearchString(event.target.value)
  }

  const matchText = props => {
    const word = props.name.common

    const lowerCaseWord = word.toLowerCase()
    const lowerCaseSearchString = searchString.toLowerCase()

    return (lowerCaseWord.indexOf(lowerCaseSearchString) === 0)
  }

  const filteredWords = countries.filter(matchText)
  const sortedFilteredWords = filteredWords.slice(0, 15)

  return (
    <div>
      <input onChange={TextInput} placeholder='Search country...' />
      <Container>
        {sortedFilteredWords.map((country, index) => <CountryInfo country={country} detailed={index < 6} key={country.cca3} largest={sortedCountries[0].area} />)}
      </Container>
    </div>
  )
}

const CountryDetails = () => {
  const { cca3 } = useParams()

  const clickedCountry = getCountryByCca3(cca3)
  const borderCountries = clickedCountry.borders.map(border => getCountryByCca3(border))
  const SortedBorderCountries = borderCountries.sort((a, b) => b.area - a.area)

  return (
    <div>
      <Link to='/'>Back</Link>
      <h4> Border countries: </h4>
      <Container>
        {SortedBorderCountries.map((country, index) => <CountryInfo country={country} detailed={index < 6} key={country.cca3} largest={country.area} />)}
      </Container>
    </div>
  )
}

const getCountryByCca3 = (cca3) => {
  const CountryByCca3 = countries.find(country => country.cca3 === cca3)
  return (CountryByCca3)
}

export default App
