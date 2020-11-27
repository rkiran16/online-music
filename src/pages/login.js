import React, { useState,useEffect } from "react"
import Logo from "../assets/images/Spotify_Logo_RGB_Green.png"
import { loginUrl } from "../services/spotify"
import { Button } from "react-bootstrap"
import { Transition, animated } from 'react-spring/renderprops'

export default function Login() {
  let [show,setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  },[]);
  return (
    <div className="login">
      <div className="background-album-art">
        <div className="d-flex flex-column full-screen align-items-center justify-content-center">
          <Transition
            native
            items={show}
            from={{ position: 'absolute', overflow: 'hidden', height: 0 }}
            enter={[{ height: 'auto' }]}
            leave={{ height: 0 }}>
            {show =>
              show && (props => <animated.div style={props}>
                <div className="logo-container d-flex flex-column align-items-center justify-content-between">
                  <a href="/" className="logo">
                    <img src={Logo} width="250" alt="spotify" />
                  </a>
                  <Button className="login-btn" variant="primary" href={loginUrl} size="lg" block>
                    Login
                  </Button>
                </div>
              </animated.div>)
            }
          </Transition>
        </div>
      </div>
    </div>
  )
}