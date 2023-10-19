import React from 'react';
import { useState } from 'react';
import httpClient from '../httpClient'
import { useNavigate } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';
import { IUser } from '../model/IUser';

interface ILogInProps {
	onLoginSuccess: (user: IUser) => void;

}

const LogIn = (props: ILogInProps) => {
	const navigate = useNavigate();
	const [state, setState] = useState({
		fields: { email: '', password: '' }
	});

	const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setState({
			fields: {
				...state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

	const onFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()
		httpClient.logIn(state.fields).then(user => {
			if (user) {
				props.onLoginSuccess(user)
				navigate("/");
			}
		})
	}

	return (
		<>
			<Form onSubmit={onFormSubmit}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control onChange={onInputChange} type="email" name='email' placeholder="Enter email" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control name='password' type="password" placeholder="Password" onChange={onInputChange} />
				</Form.Group>
				<Button variant="primary" type="submit">
					Log In
				</Button>
			</Form>
		</>
	)

}

export default LogIn