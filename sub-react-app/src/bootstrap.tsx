import App from './App';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

const mount = ({
    mountPoint,
}: {
    mountPoint: HTMLElement;
}) => {
    if (!mountPoint) {
        return;
    }
    const root = createRoot(mountPoint);
    root.render(<BrowserRouter><App /></BrowserRouter>);
    return () => queueMicrotask(() => root.unmount());
};

export { mount };