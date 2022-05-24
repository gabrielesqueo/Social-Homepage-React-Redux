import Navbar from './components/Navbar';
import Navigation from './components/Navigation';
import Feed from './components/Feed';
import ChatContainer from './components/ChatContainer';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { calculateAmount } from './features/chat/chatSlice';




function App() {
  const dispatch = useDispatch();
  const {chatItems} = useSelector((state) => state.chat.chatItems)

  useEffect(() => {
    dispatch(calculateAmount())
  }, [chatItems])

  return (
    <div className="App">
        <Navbar />
        <Navigation />
        <Feed />
        <ChatContainer />
    </div>
  );
}

export default App;
