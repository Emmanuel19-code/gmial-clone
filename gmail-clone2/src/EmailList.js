import { Checkbox,IconButton} from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import RedoIcon from '@material-ui/icons/Redo'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide'
import InboxIcon from '@material-ui/icons/Inbox'
import PeopleIcon from '@material-ui/icons/People'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import React, { useEffect } from 'react'
import './emailList.css'
import Section from './Section'
import Inbox from '@material-ui/icons/Inbox'
import Emailrow from './Emailrow'
import {app,storage} from './firebase'
import {useState} from 'react'
import {getDoc, onSnapshot} from 'firebase/firestore'
import {db} from './firebase'


function EmailList() {
   const [email,setEmail]=useState([]);
    
  
    
    
  return (
    <div className='email_list'>
        <div className='emailList_setting'>
                <div className='emailListS_left'>
                   <Checkbox/>
                     <IconButton>
                         <ArrowDropDownIcon/>
                     </IconButton>
                      <IconButton>
                         <RedoIcon/>
                   </IconButton>
                    <IconButton>
                         <MoreVertIcon/>
                   </IconButton>
                </div>
                <div className='emailListS_right'>
                           <IconButton>
                               <ChevronLeftIcon/>
                           </IconButton>
                           <IconButton>
                               <ChevronRightIcon/>
                           </IconButton>
                           <IconButton>
                               <KeyboardHideIcon/>
                           </IconButton>
                </div>
        </div>
        <div className='emailList_sections'>
                  <Section Icon={InboxIcon} title="primary" color="red"/>
                   <Section Icon={PeopleIcon} title="primary" color="#1Aa73E8"/>
                    <Section Icon={LocalOfferIcon} title="primary" color="grren"/>
        </div> 
        <div className='emailList_list'>
          {email.map((item)=>{
              return(
                  <Emailrow
                    title={item.To}
                    subject={item.subject}
                    description={item.message}
                  />
              )
          })}
            <Emailrow
             title="twitch"
             subject="hey fellow"
             description="this is a test"
             time="10pm"
            />
        </div>
    </div>
  )
}

export default EmailList