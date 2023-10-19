import { Container, Nav, NavDropdown, Navbar, Stack } from 'react-bootstrap'
import React from 'react';
import { IUser } from './model/IUser';
interface INavBarProps {
	currentUser: IUser | null
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
						<Nav className="me-auto">
							{!props.currentUser &&
								<>
									<Nav.Link href="/login">Log In</Nav.Link>
									<Nav.Link href="/signup">Sign Up</Nav.Link></>
							}
						</Nav>
					</Navbar.Collapse>
					{
						props?.currentUser &&
						<Navbar.Collapse className="justify-content-end" role="">
							<Stack direction="horizontal" gap={3}>
								<Navbar.Text>
									Signed in as: <a href="#">{props.currentUser.email} </a>
								</Navbar.Text>
								<Nav.Link href="/logout">Log Out</Nav.Link>
							</Stack>

						</Navbar.Collapse>
					}
				</Container>
			</Navbar>

		</>
	)
}

export default NavBar