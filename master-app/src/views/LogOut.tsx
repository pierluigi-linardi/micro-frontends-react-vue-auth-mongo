import React from 'react';
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
interface ILogOutProps {
	onLogOut: () => void;

}
const LogOut = (props: ILogOutProps) => {
	useEffect(() => {
		props.onLogOut()
	}, []);

	return (<Navigate to="/login"></Navigate>)
}


export default LogOut