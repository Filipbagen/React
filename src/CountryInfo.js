import styled from 'styled-components'

// Style
const Container = styled.div`
    margin: 20pt;
    padding: 2pt 16pt;
    border-radius: 5pt;
    box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3);
    border-radius: 7pt;
    transition: .2s;

    &:hover {
        box-shadow: 0px 0px 10px 8px rgba(0,0,0,0.3);
    }
`

// width: ${props => props.ratio}%;

const CountryInfo = ({ country, detailed, largest }) => {
  // Constants
  const ratio = country.area / largest * 100

  const areaBar = {
    height: '10pt',
    backgroundColor: '#3F66A6',
    marginBottom: '6pt',
    width: ratio + '%',
    borderRadius: '3pt'
  }

  return (
    <Container>

      <p> <b>{country.flag} {country.name.common}</b> • {Math.round(country.area / 100000) / 10} million km<sup>2</sup></p>
      <div style={areaBar} />

      {/* Conditional Rendering */}
      {detailed &&
        <div>
          <p style={{ margin: '0' }}>Capital: {country.capital}</p>
          <p style={{ margin: '4pt 0 8pt 0' }}>Region: {country.subregion}</p>
        </div>}

    </Container>
  )
}

export default CountryInfo
