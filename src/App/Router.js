import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Home from 'pages/Home'
import Search from 'pages/Search'
import SearchResult from 'pages/SearchResult'
import Artist from 'pages/Artist'
import Album from 'pages/Album'
import Account from 'pages/Account'
import Likes from 'pages/Likes'
import Settings from 'pages/Settings'
import Player from 'pages/Player'
import NotFound from 'pages/NotFound'
import Spotify from 'pages/Spotify'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/search/result">
          <SearchResult />
        </Route>
        <Route exact path="/search/artist">
          <Artist />
        </Route>
        <Route exact path="/search/album">
          <Album />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>

        <Route exact path="/account/likes">
          <Likes />
        </Route>
        <Route exact path="/account/settings">
          <Settings />
        </Route>
        <Route exact path="/account">
          <Account />
        </Route>

        <Route exact path="/player">
          <Player />
        </Route>

        <Route exact path="/spotify">
          <Spotify />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="*">
          <NotFound />
        </Route>

        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
