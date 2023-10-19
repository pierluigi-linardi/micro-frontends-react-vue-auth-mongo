import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode'
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import { Stack } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Page1 from './components/page1'
import Page2 from './components/page2'
import Component1 from './components/component1'
import { Outlet, Link } from "react-router-dom";
export default () => {
    const [state, setState] = useState<{
        email: string
    } | null>(null);
    const [token, setToken] = useState<string | null>(null);
    useEffect(() => {
        let token = localStorage.getItem('token');
        if (token) {
            let decode = jwt_decode(token);
            setToken(token);

            setState(decode as { email: string });

        }
    }, [token])

    return (<>
        <Badge bg="secondary">Sub REACT APP!!!</Badge>

        <nav>
            <ul>
                <li>
                    <Link to="/page1">Page1</Link>
                </li>
                <li>
                    <Link to="/page2">Page2</Link>
                </li>
                <li>
                    <Link to="/component1">Component1</Link>
                </li>

            </ul>
        </nav>
        <Stack direction="horizontal" gap={3} className='mx-auto' >
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Token</Card.Title>
                    <Card.Text>
                        {token}
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className='ms-auto'>
                <Card.Body>
                    <Card.Title>User</Card.Title>
                    <Card.Text>
                        {state?.email}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Stack>
        <Routes>
            <Route path="/page1" element={<Page1 />}></Route>
            <Route path="/page2" element={<Page2 />}></Route>
            <Route path="/component1" element={<Component1 />}></Route>

        </Routes>
    </>);
}