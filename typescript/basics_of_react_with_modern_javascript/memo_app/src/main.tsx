import React from 'react';
import ReactDOM from 'react-dom/client';
/* Recoil */
import { RecoilRoot } from 'recoil';
/* Components */
import App from './App';
/* CSS */
import './main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </React.StrictMode>
);
