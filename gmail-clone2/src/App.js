import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {Routes,Route} from 'react-router-dom'
import Mail from './Mail'
import EmailList from './EmailList'
import SendMail from './SendMail';
import {useDispatch, useSelector} from 'react-redux'
import { selectUser } from './store/useSlice';
import Details from './Details'
import { useEffect } from 'react';
import {auth} from './firebase'
import {login} from './store/useSlice'
import Value from './Value';

function App() {
  const dispatch=useDispatch()
  const user=useSelector(selectUser)
            useEffect(()=>{
                auth.onAuthStateChanged(user=>{
                  if(user){
                    dispatch(login({
              displayName:user.displayName,
              email:user.email,
              photoUrl:user.photoURL
                    }))
                  }
                })
            },[])
  return (
               
       <div className="app">
         {/*
             <Header/>
              <div className='app_body'>
                   <Sidebar/>
                   <Routes>
                     <Route path="/" element={<EmailList/>}></Route>
         <Route path="/mail" element={[<Mail/>]}></Route>
                  
         </Routes>
             </div>
         {sendMessageIsOpen && <SendMail/>}  
  */}
     {!user && <Details/>}     
     {user && <Value/>}     
     </div>
   );
}

export default App;
