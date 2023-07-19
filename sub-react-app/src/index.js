import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom'
const mount = (el, token) => {
    ReactDOM.render(<Router><App token={token} /></Router>, el);
};

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_sub-a-root');
    if (devRoot) {
        mount(devRoot, null);
    }
}

export { mount };