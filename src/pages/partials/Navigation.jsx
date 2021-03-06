import React from 'react'
import { Link, NavLink }Β from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Navigation = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Link to="/" className="navbar-brand">
					<span role="img" aria-label="A person holding up a hand">ππ½</span> React Query
				</Link>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">

							<NavLink to="/posts" className="nav-link">
								<span role="img" aria-label="a postal horn">π―</span> Posts
							</NavLink>

							<NavLink to="/random-dad-joke" className="nav-link">
								<span role="img" aria-label="a laughing face with tears">π</span> Random Dad Joke
							</NavLink>

							<NavLink to="/random-doggo" className="nav-link">
								<span role="img" aria-label="a dog">πΆ</span> Random doggo
							</NavLink>

							<NavDropdown title={<><span role="img" aria-label="a laughing face with tears">π€£</span> Random Joke</>} id="basic-nav-dropdown">
								<NavLink exact to="/random-joke" className="dropdown-item">Any Joke</NavLink>
								<NavDropdown.Divider />
								<NavLink to="/random-joke/general" className="dropdown-item">General Joke</NavLink>
								<NavLink to="/random-joke/knock-knock" className="dropdown-item">Knock-knock Joke</NavLink>
								<NavLink to="/random-joke/programming" className="dropdown-item">Programming Joke</NavLink>
							</NavDropdown>

						</Nav>
					</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
