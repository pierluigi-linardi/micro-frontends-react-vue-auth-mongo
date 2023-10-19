import { Container, Nav, NavDropdown, Navbar, Stack } from 'react-bootstrap'
import React from 'react';
interface INavBarProps {
}
const NavBar = (props: INavBarProps) => {
	return (
		<>

			<Navbar className="bg-body-tertiary">
				<Container>
					<Navbar.Brand href="/">Home</Navbar.Brand>
					<Navbar.Collapse id="basic-navbar-nav" role="">
						<Nav className="">
							<Nav.Link href="/react">React</Nav.Link>
						</Nav>
						<Nav className="">
							<Nav.Link href="/vue">Vue</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

		</>
	)
}

export default NavBar