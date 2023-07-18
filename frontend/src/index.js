import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import './web-responsive.css';
import App from "./components/App";

import { createRoot } from 'react-dom/client';

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
<Router>
    <App/>
</Router>
);