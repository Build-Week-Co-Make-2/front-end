import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import store from './redux/Index';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';
import App from './App';

export const history = createBrowserHistory()



ReactDOM.render(
	<Provider store={store}>

		<Router history={history}>

			<App />
		</Router>
		
	</Provider>,

	document.getElementById('root')
);


