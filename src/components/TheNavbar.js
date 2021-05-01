import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import logo from './logo.json'
import payload from '../utils/payload'

import { Navbar, Nav } from 'react-bootstrap'
import './navbar.scss'

function TheNavbar() {
  const user = payload()
  const history = useHistory()
  const [width, setWidth] = useState(0)
  
  window.addEventListener('resize', ()=>{
    setWidth(window.innerWidth)
  })

  return (
    <div>
      { width <= 600 ? (<div>
      <Navbar bg="dark" className="nav" expand="lg" id="navbar">
        <Navbar.Brand>
          <img onClick={() => { history.push('/') }}
            src={logo.saad}
            width="70"
            height="50"
            className="d-inline-block align-top"
          />
          <img onClick={() => { history.push('/') }}
            src={logo.icp}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <div id="navbarItem">
        {user ? (
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link to="/" className="m-3 navBarLinks">Home</Link>
                <Link to="/" className="m-3 navBarLinks">Ocupación</Link>
                <Link to="/" className="m-3 navBarLinks">Calidad</Link>
                <Link to="/" className="m-3 navBarLinks">Entregas</Link>
                <Link to="/" className="m-3 navBarLinks">Admin</Link>
                <Link to="/" className="m-3 navBarLinks"
                  onClick={() => {
                    window.localStorage.removeItem('token')
                    history.push('/')
                  }}
                >Logout</Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        ) : (
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link to="/" className=" m-3 navBarLinks">Home</Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        )}
        </div>
      </Navbar>
      </div>) : (
      <div>
      <Navbar bg="dark" className="nav" expand="lg" id="navbar">
        <Navbar.Brand>
          <img onClick={() => { history.push('/') }}
            src={logo.saad}
            width="70"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <div id="navbarItem">
        {user ? (
          <div>
            
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link to="/" className="m-3 navBarLinks">Home</Link>
                <Link to="/" className="m-3 navBarLinks">Ocupación</Link>
                <Link to="/" className="m-3 navBarLinks">Calidad</Link>
                <Link to="/" className="m-3 navBarLinks">Entregas</Link>
                <Link to="/" className="m-3 navBarLinks">Admin</Link>
                <Link to="/" className="m-3 navBarLinks"
                  onClick={() => {
                    window.localStorage.removeItem('token')
                    history.push('/')
                  }}
                >Logout</Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        ) : (
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link to="/" className=" m-3 navBarLinks">Home</Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        )}
         <Navbar.Brand>
          <img onClick={() => { history.push('/') }}
            src={logo.icp}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        </div>
      </Navbar>
      </div>)}
    </div>
  )
}

export default TheNavbar;