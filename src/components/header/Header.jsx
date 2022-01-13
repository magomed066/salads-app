import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<Navbar bg="dark" variant="dark" className="mb-5">
			<Container>
				<Navbar.Brand as={NavLink} to="/">
					Salads App
				</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link as={Link} to="/make-order">
						Make order
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	)
}

export default Header
