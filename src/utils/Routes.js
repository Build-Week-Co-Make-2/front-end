import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../components/Login';
import ProtectedRoute from './ProtectedRoute';
import Signup from '../components/SignupForm';

const Routes = () => {
	return (
		<div>
			{/* Protected Routes go here */}
			<Route exact path="/" component={Signup} />
			<Route path="/login" component={Login} />
		</div>
	);
};

export default Routes;
