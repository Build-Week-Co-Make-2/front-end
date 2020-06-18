import React from 'react';
import { Route } from 'react-router-dom';
import {Button, Navbar, Card} from 'reactstrap';
import {Link} from 'react-router-dom';
import SignupForm from './components/SignupForm'
import Login from './components/Login'


import './App.css';

function App() {
  return (
    <>
    <Navbar color="info">
      <h1 style={{color: "white"}}>Co-Make</h1>
      <Link to={"/"}>
        <Button color="info">
          Home
        </Button>
        </Link>
    </Navbar>
    <Route exact path='/'>
    <Card>
      <Link to={'/signup'}>
      <Button color="info">
        Sign Up
      </Button>
      </Link>
      <Link to={'/login'}>
        <Button color="info">
          Login
        </Button>
      </Link>
      </Card>
      </Route>
      <Route path='/signup'>
        <SignupForm />

      </Route>
      <Route path='/login'>
        <Login />
      </Route>
    </>
  );
}

export default App;
