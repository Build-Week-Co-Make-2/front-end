import React from 'react';
import { Button, Navbar } from 'reactstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<div>
			<Navbar className="navbar">
				<h1 style={{ color: 'white' }}>Co-Make</h1>

				<Button className="btn" href="" >
					Home
				</Button>

				<Link to={'/'}>
					<Button className="btn">Sign Up</Button>
				</Link>
				<Link to={'/login'}>
					<Button className="btn">Login</Button>
				</Link>
			</Navbar>
		</div>
	);
};

export default NavBar;
