import styled from 'styled-components'
import { Link } from 'react-router-dom'
import countries from 'world-countries'

// Style
const Home = styled.div`
    paddin: 200pt;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
`

const generateRandomCountry = () => {
  const countriesWithBorders = countries.filter(country => country.borders.length > 0)
  const randomCountry = Math.floor(Math.random() * countriesWithBorders.length)
  const countryToFind = countriesWithBorders[randomCountry]

  return countryToFind
}

// Component
const Header = ({ displayedCountries }) => {
  const localData = window.localStorage.getItem('toFind')
  let toFind = localData ? JSON.parse(localData) : null

  if (!toFind) {
    toFind = generateRandomCountry()
    window.localStorage.setItem('toFind', JSON.stringify(toFind))
  }

  const newCountry = () => {
    window.localStorage.setItem('toFind', JSON.stringify(generateRandomCountry()))
    console.log(toFind)
  }

  // Constants
  const found = displayedCountries.map(country => country.cca3).includes(toFind.cca3)

  return (
    <div>
      <Home>

        <button onClick={newCountry}>
            Change Country
        </button>

        <Link to='/'>🏠 Home</Link>
      </Home>
      {found ? (
        <h1>🎉 You won!</h1>
      ) : (
        <h1>Find {toFind.flag}{toFind.name.common}</h1>
      )}

    </div>
  )
}

export default Header
