import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'

import NavBar from './NavBar'
import Home from './views/Home'
import { useEffect, useState } from 'react'
import SubReactApp from './SubReactApp';
import SubVueApp from './SubVueApp';
import { IUserSession } from './model/IUserSession';
import LocalStorageHelper from './helpers/local-storage-helper';


const App = () => {
    const [state, setState] = useState<{ currentUser: IUserSession | null }>({ currentUser: null });
    useEffect(() => {
        const storage = {
            userName: 'test-user',
            token: process.env.MASTER_TOKEN,
            metaMask:
            {
                chainId: 80001,
                account: '0x03c836f5e6376a333134248bf27234cc041b3430'
            }
        } as IUserSession;
        LocalStorageHelper.setUserSession(
            storage
        );
        setState({ currentUser: storage })
    }, []);


    return (
        <>
            <div className='App container'>
                <NavBar />
                <Routes>
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