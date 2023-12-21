import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './routes/App.jsx'
import RootLayout from './routes/RootLayout.jsx'
import NewPost from './routes/NewPost/NewPost.jsx'
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <App />,
                children: [
                    { path: '/new-post', element: <NewPost /> }
                ]
            },
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
