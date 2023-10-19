import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode'
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import { Button, Form, Stack } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Page1 from './components/page1'
import Page2 from './components/page2'
import Component1 from './components/component1'
import { Outlet, Link } from "react-router-dom";
import { Icontent } from './model/content';
import axios from 'axios';

export default () => {

    const [viewState, setViewState] = useState<{
        user: string,
        message: string,
        loading: boolean
    }>({ user: '', message: '', loading: false });

    const [token, setToken] = useState<string | null>(null);

    const [content, setContent] =
        useState<Icontent>({
            name: 'name',
            description: 'description',
            contentType: 'Art'
        } as Icontent)

    useEffect(() => {
        const dafneUserData = JSON.parse(localStorage.getItem('dafne-user-data') ?? '{}');
        if (dafneUserData) {
            setContent({
                ...content,
                chainId: dafneUserData.metaMask.chainId,
                owner: dafneUserData.metaMask.account,
            });
            setToken(dafneUserData.token);
            setViewState({ ...viewState, user: dafneUserData.userName ?? '' });
        }
    }, [])

    const createContent = async () => {
        setViewState({ ...viewState, message: '', loading: true });

        try {
            const result = await axios.post(process.env.CREATE_CONTENT_REQUEST_URL!,
                content,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization: `Bearer ${token}`
                    },
                }
            );
            if (result?.status == 200 && result.data) {
                setViewState({ ...viewState, message: `Content create with id: [${result.data._id}]`, loading: false });
            }

        } catch (error: any) {
            setViewState({ ...viewState, message: `[${error?.response?.status}] ${error?.response?.statusText}`, loading: false });
        }

    }

    return (<>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Create Content</Card.Title>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="input"
                        onChange={(e) => {
                            setContent({ ...content, name: e.target.value });
                        }}
                    ></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="input"
                        onChange={(e) => {
                            setContent({ ...content, description: e.target.value });
                        }}
                    ></Form.Control>
                </Form.Group>
                <Form.Group >
                    <Form.Label>File</Form.Label>
                    <Form.Control type="file" onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
                        if (e.target.files && e.target.files?.length > 0) {
                            const fileBuffer = await e.target.files[0].arrayBuffer();
                            setContent(
                                { ...content, arrayBuffer: Array.from(new Uint8Array(fileBuffer)) }
                            )
                        }
                    }}></Form.Control>
                </Form.Group>
                <Button
                    onClick={createContent}
                    className='mt-3'>{viewState.loading ? 'Loading...' : 'Create'}</Button>
                <div>
                    <b>{viewState.message}</b>
                </div>
            </Card.Body>
        </Card >
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
                        {viewState?.user}
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