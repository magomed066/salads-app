import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
	return (
		<Navbar bg="dark" variant="dark" className="mb-5">
			<Container>
				<Navbar.Brand href="#home">Salads App</Navbar.Brand>
				<Nav className="me-auto"></Nav>
			</Container>
		</Navbar>
	)
}

export default Header
