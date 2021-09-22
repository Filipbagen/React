import styled from 'styled-components'
import Tilt from 'react-tilt'

// Style
const Country = styled.div`
    background-color: #fff;
    width: 25vw;
    margin: 6pt;
    padding: 1pt 8pt;
    border-radius: 5pt;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
    border-radius: 7pt;
    transition: .2s;

    &:hover {
        box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
    }
`

const Bar = styled.div`
    width: ${props => props.width};
    height: 10pt;
    background-color: #3F66A6;
    margin-bottom: 10pt;
    border-radius: 3pt;
`

const InfoStyle = styled.p`
    padding: 0;
`

const CountryInfo = ({ country, detailed, largest }) => {
  // Constants
  const ratio = country.area / largest * 100

  return (
    <Tilt options={{ scale: 1.02, reverse: true, max: 20 }}>
      <Country>

        <InfoStyle> <b>{country.flag} {country.name.common}</b> • {Math.round(country.area / 100000) / 10} million km<sup>2</sup></InfoStyle>
        <Bar width={ratio + '%'} />

        {/* Conditional Rendering */}
        {detailed &&
          <div>
            <InfoStyle>Capital: {country.capital}</InfoStyle>
            <InfoStyle>Region: {country.subregion}</InfoStyle>
          </div>}

      </Country>
    </Tilt>
  )
}

export default CountryInfo
