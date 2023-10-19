import React, { lazy, Suspense } from 'react';
import SubReactApp from '../SubReactApp';
import SubVueApp from '../SubVueApp';


interface IHomeProps {
}

const Home = (props: IHomeProps) => {
	return (
		<>

			<div style={{ borderStyle: 'solid' }}>
				<Suspense fallback={<div>Loading...</div>}>
					<SubReactApp />
				</Suspense>
			</div>
			<div style={{ borderStyle: 'solid', marginTop: '10px' }}>
				<Suspense fallback={<div>Loading...</div>}>
					<SubVueApp />
				</Suspense>
			</div>

		</>
	)
}

export default Home