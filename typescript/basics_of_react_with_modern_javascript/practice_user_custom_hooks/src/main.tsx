import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.css';
/* Providers */
import {
    IsFetchingUsersCompletedProvider,
    IsLoadingProvider,
    UsersProvider,
} from './providers';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <IsFetchingUsersCompletedProvider>
            <UsersProvider>
                <IsLoadingProvider>
                    <App />
                </IsLoadingProvider>
            </UsersProvider>
        </IsFetchingUsersCompletedProvider>
    </React.StrictMode>
);
