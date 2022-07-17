import React from 'react'
import './header.css'
import MenuIcon from '@material-ui/icons/Menu'
import { Avatar, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from './store/useSlice'
import { auth } from './firebase'


function Header() {
    const user=useSelector(selectUser)
    const dispatch=useDispatch()
    const SignOut=()=>{
          auth.signOut().then(()=>{
           dispatch(logout())
          })      
    }
  return (
    <div className='header'>
         <div className='header_left'>
             <IconButton>
                 <MenuIcon/>
             </IconButton>
             <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"></img>
         </div>
         <div className='header_middle'>
            <SearchIcon/>
            <input type="text" placeholder='Search mail'/>
            <ArrowDropDownIcon/>
         </div>
         <div className='header_right'>
                 <IconButton>
                     <AppsIcon/>
                 </IconButton>
                 <IconButton>
                     <NotificationsIcon/>
                 </IconButton>
                 <IconButton>
                     <SettingsIcon/>
                 </IconButton>
                 <IconButton>
                     <HelpOutlineIcon/>
                 </IconButton>
                 <Avatar className="avatar" onClick={SignOut} src={user?.photoUrl}/>
         </div>
    </div>
  )
}

export default Header