import { BrowserRouter, Switch, Route } from "react-router-dom"

// Les pages
import Home from 'pages/Home'

import Search from 'pages/Search'
import SearchResult from 'pages/SearchResult'
import Artist from 'pages/Artist'
import Album from 'pages/Album'

import Account from 'pages/Account'
import Likes from 'pages/Likes'
import Settings from 'pages/Settings'

import Player from 'pages/Player'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/search/result">
          <SearchResult />
        </Route>
        <Route path="/search/artist">
          <Artist />
        </Route>
        <Route path="/search/album">
          <Album />
        </Route>
        <Route path="/search">
          <Search />
        </Route>

        <Route path="/account/likes">
          <Likes />
        </Route>
        <Route path="/account/settings">
          <Settings />
        </Route>
        <Route path="/account">
          <Account />
        </Route>

        <Route path="/player">
          <Player />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
