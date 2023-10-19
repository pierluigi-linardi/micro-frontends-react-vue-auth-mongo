import axios from 'axios'
import jwtDecode from 'jwt-decode'

// instantiate axios
const axiosInstance = axios.create();
const getToken = () => {
	return localStorage.getItem('token')
}

const setToken = (token: any) => {
	localStorage.setItem('token', token)
	return token
}

const getCurrentUser = () => {
	const token = getToken()
	if (token) {
		return jwtDecode(token);
	}
	return null;
}

const logIn = function (credentials: any) {
	return axiosInstance({ method: 'post', url: 'http://localhost:3001/api/users/authenticate', data: credentials })
		.then((serverResponse) => {
			const token = serverResponse.data.token
			if (token) {
				// sets token as an included header for all subsequent api requests
				axiosInstance.defaults.headers.common.token = setToken(token)
				return jwtDecode(token)
			} else {
				alert('invalid credentials');
				return false;

			}
		})
}

// logIn and signUp functions could be combined into one since the only difference is the url we're sending a request to..
const signUp = (userInfo: any) => {
	console.log('Signin...');
	return axiosInstance({ method: 'post', url: 'http://localhost:3001/api/users', data: userInfo })
		.then((serverResponse) => {
			const token = serverResponse.data.token
			if (token) {
				// sets token as an included header for all subsequent api requests
				axiosInstance.defaults.headers.common.token = setToken(token)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

const logOut = () => {
	localStorage.removeItem('token')
	delete axiosInstance.defaults.headers.common.token
	return true
}


axiosInstance.defaults.headers.common.token = getToken()
const httpClient =
{
	getToken, setToken, logIn, logOut, signUp, getCurrentUser
}
export default httpClient