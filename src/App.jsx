import './App.css';
import { useState } from 'react';
import PostList from './components/PostList/PostList.jsx';
import MainHeader from './components/MainHeader/MainHeader.jsx';

function App() {

    const [newPostVisible, setNewPostVisible] = useState(true);

    return (
        <>
            <MainHeader onNewPost={() => setNewPostVisible(true)} />
            <PostList
                newPostVisible={newPostVisible}
                onNewPostDismiss={() => setNewPostVisible(false)}
                onNewPost={() => setNewPostVisible(true)}
            />
        </>
    );
}

export default App
