import React, { useEffect, useState } from "react"
import { Container, Navbar, Card } from "react-bootstrap";
import { useTransition, animated } from 'react-spring'
import SpotifyWebApi from "spotify-web-api-js"

const spotify = new SpotifyWebApi()

export default function Home() {
  let [playLists, setPlayLists] = useState({})
  useEffect(() => {
    spotify.getUserPlaylists().then((playlists) => {
      console.log(playlists)
      setPlayLists(playlists)
    })
  }, [])
  return (
    <div className="home">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      </Navbar>
      <Container>
        <div className="playlists pt-4 pb-4">
          <h2 className="mb-4 text-white">PlayLists</h2>
          <div className="playlists__grid">
            {Object.keys(playLists).length > 0 && playLists.items.map((item,index) => {
              const { images, name, tracks } = item;
              return (
                <Card className="bg-dark text-white">
                  <Card.Img variant="top" src={images[0].url} />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{`Total Tracks : ${tracks.total}`}</Card.Subtitle>
                  </Card.Body>
                </Card>
              )
            })}
          </div>
        </div>
      </Container>
    </div>
  )
}