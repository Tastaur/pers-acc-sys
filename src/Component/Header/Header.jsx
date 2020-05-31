import React from 'react'
import {Container, Nav, Navbar, NavLink} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.png'
import NavbarToggle from 'react-bootstrap/NavbarToggle'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
import NavbarBrand from 'react-bootstrap/NavbarBrand'


const Header = props => {

  return <Navbar fixed={'top'} collapseOnSelect expand={'md'} bg={'dark'} variant={'dark'}>
    <Container>
      <NavbarBrand href={'/'}>
        <img src={logo} alt='e' width={'30'} height={'30'} className={'d-inline-block align-top'}/>
        ОБ ДПС ГИБДД У МВД России по г. Тольятти
      </NavbarBrand>
      <NavbarToggle aria-controls={'responsive-navbar-nav'}/>
      <NavbarCollapse id={'responsive-navbar-nav'}>
        <Nav className={'mr-auto'}>
          <NavLink href={`/people`}> Личный состав </NavLink>
          <NavLink href={`/car`}> Транспорт </NavLink>
          <NavLink href={`/info`}> Телефонный справочник </NavLink>
        </Nav>
      </NavbarCollapse>
    </Container>
  </Navbar>

}

export default Header
