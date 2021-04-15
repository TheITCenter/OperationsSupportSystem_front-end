import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import logo from './logo.json'
import payload from '../utils/payload'

import { Navbar, Nav } from 'react-bootstrap'

function TheNavbar() {
  const user = payload()
  const history = useHistory()
  return (
    <div>
      <Navbar bg="dark" className="nav" expand="lg">
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
        {user?(
          <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/" className="m-3">Home</Link>
              <Link to="/" className="m-3"
            onClick={()=>{
              window.localStorage.removeItem('token')
              history.push('/')
            }}
            >Logout</Link>
            </Nav>
          </Navbar.Collapse>
          </div>
        ):(
          <div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">Home</Link>
          </Nav>
        </Navbar.Collapse>
        </div>
        )}
        
      </Navbar>
    </div>
  )
}

export default TheNavbar;