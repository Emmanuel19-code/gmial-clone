import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import {Routes,Route} from 'react-router-dom'
import Mail from './Mail'
import EmailList from './EmailList'
import SendMail from './SendMail';
import { selectSendMessageIsOpen } from './store/mailSlice';
import {useDispatch, useSelector} from 'react-redux'


function Value() {
    const sendMessageIsOpen=useSelector(selectSendMessageIsOpen)
  return (
    <div className='app'>
        <Header/>
              <div className='app_body'>
                   <Sidebar/>
                   <Routes>
                   <Route path="/" element={<EmailList/>}></Route>
         <Route path="/mail" element={[<Mail/>]}></Route>
                  
         </Routes>
             </div>
         {sendMessageIsOpen && <SendMail/>}
    </div>
  )
}

export default Value