import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App, { loader as postLoader } from './routes/App.jsx'
import RootLayout from './routes/RootLayout.jsx'
import NewPost, { postSubmit } from './routes/NewPost/NewPost.jsx'
import PostDetail, { loader as postDetailLoader } from './routes/PostDetail/PostDetail.jsx'
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <App />,
                loader: postLoader,
                children: [
                    { path: '/new-post', element: <NewPost />, action: postSubmit },
                    { path: '/post/:postId', element: <PostDetail />, loader: postDetailLoader }
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
