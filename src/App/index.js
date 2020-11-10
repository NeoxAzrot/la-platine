import { BrowserRouter, Switch, Route } from "react-router-dom"

// Les pages
import Home from 'pages/Home'
import Search from 'pages/Search'
import Account from 'pages/Account'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
