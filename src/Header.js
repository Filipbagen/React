import styled from 'styled-components'
import { Link } from 'react-router-dom'
import countries from 'world-countries'

// Style
const Home = styled.div`
    paddin: 200pt;
`

const ToFind = styled.div`
    text-align: center;
    margin-top: 50pt;
`

const Button = styled.button`
  border: none;
  height: 22pt;
  width: 120pt;
  border-radius: 7pt;
  background-color: #3F66A6;
  color: white;
  font-weight: bold;
  font-size: 12pt;
  margin: 30pt 0 0 30pt;
  transition: .2s;

  &:hover {
    cursor: pointer;
    background-color: #345891;
  }
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

    console.log(window.location.href)
  }

  // Constants
  const found = displayedCountries.map(country => country.cca3).includes(toFind.cca3)

  return (
    <div>
      <Home>
        <Link to='/'>
          <Button onClick={newCountry}>
            Change Country
          </Button>
        </Link>
      </Home>

      <ToFind>
        {found ? (
          <h1>🎉 You won!</h1>
        ) : (
          <h1>Find {toFind.name.common}{toFind.flag}</h1>
        )}
      </ToFind>

    </div>
  )
}

export default Header
