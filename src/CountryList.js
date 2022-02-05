import countries from 'world-countries'
import styled from 'styled-components'
import CountryInfo from './CountryInfo'
import Header from './Header'
import { useState } from 'react'

// Style
const Container = styled.div`
    margin-top: 100pt;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
    border: none;
    outline: none;
    height: 26pt;
    width: 240pt;
    border-radius: 10pt;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);

    &:placeholder {
      margin-left: 10pt;
  }
`

const InputDiv = styled.div`
  text-align:center;
`

// Component
const CountryList = () => {

  // Function
  const TextInput = (event) => {
    setSearchString(event.target.value)
  }

  const matchText = (props) => {
    const word = props.name.common
    const lowerCaseWord = word.toLowerCase()
    const lowerCaseSearchString = searchString.toLowerCase()
    return (lowerCaseWord.indexOf(lowerCaseSearchString) === 0)
  }

  // Constants
  const [searchString, setSearchString] = useState('')
  const allCountries = countries.filter(country => country.name.common !== 'Antarctica')
  const sortedCountries = allCountries.sort((a, b) => b.area - a.area).slice(0, 15)

  const filteredWords = allCountries.filter(matchText)
  const sortedFilteredWords = filteredWords.slice(0, 15)

  return (

    <div>
      <Header displayedCountries={sortedFilteredWords} />
      <InputDiv>
        <Input onChange={TextInput} placeholder='Search country...' />
      </InputDiv>

      <Container>
        {sortedFilteredWords.map((country, index) => <CountryInfo country={country} detailed={index < 6} key={country.cca3} largest={sortedCountries[0].area} />)}
      </Container>

    </div>
  )
}

export default CountryList
