import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
import httpClient from './httpClient'

import NavBar from './NavBar'
import LogIn from './views/LogIn'
import LogOut from './views/LogOut'
import SignUp from './views/SignUp'
import Home from './views/Home'
import { useEffect, useState } from 'react'
import { IUser } from './model/IUser';
import SubReactApp from './SubReactApp';
import SubVueApp from './SubVueApp';


const App = () => {
    const [state, setState] = useState<{ currentUser: IUser | null }>({ currentUser: null });
    useEffect(() => {
        setState({ currentUser: httpClient.getCurrentUser() });
    }, []);

    const onLoginSuccess = () => {
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
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/react" element={<Suspense fallback={<div>Loading...</div>}>
                        <SubReactApp />
                    </Suspense>}></Route>
                    <Route path="/vue" element={<Suspense fallback={<div>Loading...</div>}>
                        <SubVueApp />
                    </Suspense>}></Route>
                    <Route
                        path="*"
                        element={<Navigate to="/" replace />}
                    />
                </Routes>

            </div >

        </>);
}

export default App;