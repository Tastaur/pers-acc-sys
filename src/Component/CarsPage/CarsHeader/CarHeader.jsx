import React from 'react'
import {Container, Nav, Navbar, NavLink} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarToggle from 'react-bootstrap/NavbarToggle'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
import NavbarBrand from 'react-bootstrap/NavbarBrand'


const CarHeader = props => {

  return <Navbar collapseOnSelect expand={'md'} bg={'dark'} variant={'dark'}>
    <Container>
      <NavbarBrand href={'/people'}>
        Транспортные средства
      </NavbarBrand>
      <NavbarToggle aria-controls={'responsive-navbar-nav'}/>
      <NavbarCollapse id={'responsive-navbar-nav'}>
        <Nav className={'mr-auto'}>
          <NavLink href={`${props.startUrl}/1rota`}> 1 Рота </NavLink>
          <NavLink href={`${props.startUrl}/2rota`}> 2 Рота </NavLink>
          <NavLink href={`${props.startUrl}/3rota`}> 3 Рота </NavLink>
        </Nav>
      </NavbarCollapse>
    </Container>
  </Navbar>

}

export default CarHeader
