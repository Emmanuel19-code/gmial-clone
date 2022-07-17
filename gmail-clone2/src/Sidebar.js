import { Button, IconButton } from '@material-ui/core'
import React from 'react'
import AddIcon from '@material-ui/icons/Add'
import './sidebar.css'
import SidebarOption from './SidebarOption'
import InboxIcon from '@material-ui/icons/Inbox'
import StarIcon from '@material-ui/icons/Star'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import NearMeIcon from '@material-ui/icons/NearMe'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import NoteIcon from '@material-ui/icons/Note'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PersonIcon from '@material-ui/icons/Person'
import DuoIcon from  '@material-ui/icons/Duo'
import PhoneIcon from '@material-ui/icons/Phone'
import {useDispatch} from 'react-redux';
import {openSendMessage} from './store/mailSlice'


function Sidebar() {
   const dispatch=useDispatch()
  return (
      <div className='sidebar'>
  <Button startIcon={<AddIcon fontSize='large'/>} className='sidebar_compose'
   onClick={()=>dispatch(openSendMessage())}
  >
        Compose
    </Button>
    <SidebarOption 
    Icon={InboxIcon}
    title="inbox" 
    number={54}
    />
    <SidebarOption  Icon={StarIcon} title="Starred" number={54}/>
     <SidebarOption  Icon={AccessTimeIcon} title="Snoozed" number={54}/>
      <SidebarOption  Icon={LabelImportantIcon} title="Starred" number={54}/>
      <SidebarOption  Icon={NearMeIcon} title="Sent" number={54}/>
       <SidebarOption  Icon={NoteIcon} title="Starred" number={54}/>
        <SidebarOption  Icon={ExpandMoreIcon} title="Starred" number={54}/>
        <div className='sidebar_footer'>
             <div  className='sidebar_footerIcons'>
                     <IconButton>
                         <PersonIcon/>
                     </IconButton>
                       <IconButton>
                         <DuoIcon/>
                     </IconButton>
                     <IconButton>
                         <PhoneIcon/>
                     </IconButton>
             </div>
        </div>
      </div>
  
  )
}

export default Sidebar