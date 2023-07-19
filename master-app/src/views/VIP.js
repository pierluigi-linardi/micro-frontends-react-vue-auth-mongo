import React from 'react';

const VIP = (props) => {
	return (
		<div className='VIP'>
			<h1>Welcome to the VIP!</h1>
			<img src={require('../vip.jpg')} alt="VIP" />
		</div>
	)
}

export default VIP