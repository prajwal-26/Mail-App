import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import { useEffect } from 'react';
import Login from './Login';
import { auth } from './firebase';
function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
dispatch(
  login({
    displayName: user.dispatchName,
    email: user.email,
    photoUrl: user.photoUrl,
  })
)
      } else{

      }
    })
  }, [])
  
  return (
    <Router>
      {!user ? (<Login/>):(
        <div className="App">
        <Header />
        <div className="app_body">
          <Sidebar />
          <Routes>
            <Route path="/mail" element={<Mail />} />
            <Route path="/" element={<EmailList />} />
          </Routes>
        </div>
      {sendMessageIsOpen &&  <SendMail/> } 
      </div>

      ) }
      
    </Router>
  );
}

export default App;

