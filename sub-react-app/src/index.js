import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom'
const mount = (element) => {
    alert('mount react')

    ReactDOM.render(<Router><App /></Router>, element);
};
// If we are in development and in isolation, call mount immediately

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_sub-a-root');
    if (devRoot) {
        mount(devRoot);
    }
}

export { mount };