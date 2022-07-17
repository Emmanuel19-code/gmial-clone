import React from 'react'
import { Button } from '@material-ui/core'
import {SignIn} from './firebase'
import './login.css'
import {auth,provider} from './firebase'
import {signInWithPopup} from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { login } from './store/useSlice'

function Details() {
  const dispatch=useDispatch()
   const SignIn=()=>{
     signInWithPopup(auth,provider)
    .then(({user})=>{
            dispatch(login({
              displayName:user.displayName,
              email:user.email,
              photoUrl:user.photoURL
            }))  
    }).catch((err)=>{
      alert(err)
    })
   }
  return (
    <div className='login'>
         <div className='login_container'>
               <img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg" alt=""></img>
               <Button onClick={SignIn} variant='contained' color='primary'>Login</Button>
         </div> 
    </div>
  )
}

export default Details