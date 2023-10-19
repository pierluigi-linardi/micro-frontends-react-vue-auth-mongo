import React from 'react';

import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom'
//import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById("_host-root");
const root = createRoot(container!);
root.render(<Router><App /></Router>);