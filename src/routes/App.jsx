import './App.css';
import PostList from '../components/PostList/PostList.jsx';
import { Outlet } from 'react-router';

function App() {

    return (
        <>
            <Outlet />
            <main>
                <PostList />
            </main>
        </>
    );
}

export default App

export async function loader() {
    const response = await fetch('http://localhost:8080/posts');
    const resData = await response.json();

    return resData.posts;
}
