import App from './App';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

const mount = (element: HTMLElement) => {
    const root = createRoot(element);
    root.render(<BrowserRouter><App /></BrowserRouter>);
};
// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {

    const devRoot = document.getElementById('_sub-a-root');
    if (devRoot) {
        mount(devRoot);
    }
}

export { mount };