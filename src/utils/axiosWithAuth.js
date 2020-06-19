import axios from 'axios';

const axiosWithAuth = () => {
	const token = localStorage.getItem('token');

	return axios.create({
		// config object
		headers: {
			authorization: token,
		},
		baseURL: 'https://co-make-9cf46.web.app/api/login',
	});
};

export default axiosWithAuth;
