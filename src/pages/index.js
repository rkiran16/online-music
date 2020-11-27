import React, { Fragment, useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/scss/app.scss";
import { getTokenFromUrl } from "../services/spotify";
import Login from './login';
import Home from './Home';
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

export default function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
    }
  }, []);
  return (
    <Fragment>
      {token ? <Home/> :  <Login />}
    </Fragment>
  )
}
