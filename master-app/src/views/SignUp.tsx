import React from 'react';
import { useState } from 'react';
import httpClient from '../httpClient'
import { useNavigate } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';
import { IUser } from '../model/IUser';

interface ISignUpProps {
	onSignUpSuccess: (user: IUser) => void;

}

// sign up form behaves almost identically to log in form. We could create a flexible Form component to use for both actions, but for now we'll separate the two:
const SignUp = (props: ISignUpProps) => {
	const navigate = useNavigate();
	const [state, setState] = useState<{ fields: IUser }>({
		fields: {} as IUser
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
		httpClient.signUp(state.fields).then(user => {
			setState({ fields: { email: '', password: '' } })
			if (user) {
				props.onSignUpSuccess(user)
				navigate("/");
			}
		})
	}

	return (
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
				Sign Up
			</Button>
		</Form>
	)
}



export default SignUp