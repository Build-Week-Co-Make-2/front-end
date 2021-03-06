import React from 'react';
import { Button, Navbar } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

const NavBar = () => {
const logout = () => {
		localStorage.removeItem("token")
	
}



	return (
		<div>
			<Navbar className="navbar">
				<div>
					<img style={{ color: 'white' }} src={logo} alt="Logo" />
				</div>

				<div>
					<Link to='/'>
						<Button className="btn">Sign Up</Button>
					</Link>
					<Link to='/login'>
						<Button className="btn">Login</Button>
					</Link>
					<Button onClick={logout} className="btn">LogOut</Button>
				</div>
			</Navbar>
		</div>
	);
};

export default NavBar;
