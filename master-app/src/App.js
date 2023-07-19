import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import httpClient from './httpClient'

import NavBar from './NavBar'
import LogIn from './views/LogIn'
import LogOut from './views/LogOut'
import SignUp from './views/SignUp'
import VIP from './views/VIP'
import Home from './views/Home'
import { useEffect, useState } from 'react'
const SubReactApp = lazy(() => {
    return import('./SubReactApp');
});

const SubVueApp = lazy(() => {
    return import('./SubVueApp');
});

const App = () => {
    const [state, setState] = useState(null);
    useEffect(() => {
        setState({ currentUser: httpClient.getCurrentUser() });
    }, []);

    const onLoginSuccess = (user) => {
        setState({ currentUser: httpClient.getCurrentUser() })
    }

    const logOut = () => {
        httpClient.logOut()
        setState({ currentUser: null })
    }
    return (
        <>
            <div className='App container'>
                <NavBar currentUser={state?.currentUser} />
                <Routes>
                    <Route path="/login" element={<LogIn onLoginSuccess={onLoginSuccess} />}></Route>
                    <Route path="/logout" element={<LogOut onLogOut={logOut} />}></Route>
                    <Route path="/signup" element={<SignUp onSignUpSuccess={onLoginSuccess} />}></Route>
                    <Route path="/vip" element={<VIP />}></Route>
                    <Route path="/" element={<Home token={httpClient.getToken()} />}></Route>
                    <Route path="/react" element={<SubReactApp token={httpClient.getToken()} />}></Route>
                    <Route path="/vue" element={<SubVueApp token={httpClient.getToken()} />}></Route>
                </Routes>

            </div>

        </>);
}

export default App;