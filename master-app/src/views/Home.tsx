import React, { lazy, Suspense } from 'react';
const SubReactApp = lazy(() => {
	return import('../SubReactApp');
});

const SubVueApp = lazy(() => {
	return import('../SubVueApp');
});

const Home = ({ token }) => {
	return (
		<>

			<div style={{ borderStyle: 'solid' }}>
				<Suspense fallback={<div>Loading...</div>}>
					<SubReactApp token={token} />
				</Suspense>
			</div>
			<div style={{ borderStyle: 'solid', marginTop: '10px' }}>
				<Suspense fallback={<div>Loading...</div>}>
					<SubVueApp token={token} />
				</Suspense>
			</div>

		</>
	)
}

export default Home