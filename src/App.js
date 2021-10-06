import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CountryDetails from './CountryDetails'
import CountryList from './CountryList'

const App = () => {
  return (
    <Router>
      <div>
        {/* <Header displayedCountries={} /> */}
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

export default App
