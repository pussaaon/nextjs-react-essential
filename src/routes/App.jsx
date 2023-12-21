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
