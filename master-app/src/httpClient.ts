import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { IUser } from './model/IUser';

// instantiate axios
const axiosInstance = axios.create();
const getToken = (): string | null => {
	return localStorage.getItem('token')
}

const setToken = (token: string) => {
	localStorage.setItem('token', token)
	return token
}

const getCurrentUser = (): IUser | null => {
	const token = getToken()
	if (token) {
		return jwt_decode(token);
	}
	return null;
}

const logIn = function (credentials: IUser) {
	debugger;
	return axiosInstance({ method: 'post', url: 'http://localhost:3001/api/users/authenticate', data: credentials })
		.then((serverResponse) => {
			const token = serverResponse.data.token
			if (token) {
				// sets token as an included header for all subsequent api requests
				axiosInstance.defaults.headers.common.token = setToken(token)
				return jwt_decode(token) as IUser
			} else {
				alert('invalid credentials');
				return false;

			}
		})
}

// logIn and signUp functions could be combined into one since the only difference is the url we're sending a request to..
const signUp = (userInfo: IUser) => {
	debugger;
	console.log('Signin...');
	return axiosInstance({ method: 'post', url: 'http://localhost:3001/api/users', data: userInfo })
		.then((serverResponse) => {
			const token = serverResponse.data.token
			if (token) {
				// sets token as an included header for all subsequent api requests
				axiosInstance.defaults.headers.common.token = setToken(token)
				return jwt_decode(token) as IUser
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