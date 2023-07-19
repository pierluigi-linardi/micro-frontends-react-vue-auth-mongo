import React from 'react';
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom';

const LogOut = (props) => {
	useEffect(() => {
		props.onLogOut()
	}, []);

	return (<Navigate to="/login"></Navigate>)
}


export default LogOut