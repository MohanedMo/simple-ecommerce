import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/@fortawesome/fontawesome-free/css/all.css"


import App from './components/app';
import { Provider } from 'react-redux';
import { store } from './rtk/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
    </BrowserRouter>
);
