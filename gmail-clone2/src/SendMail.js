import React from 'react'
import './sendmail.css'
import CloseIcon from '@material-ui/icons/Close'
import { Button } from '@material-ui/core'
import {useForm} from 'react-hook-form'
import { ClosedSendMessage } from './store/mailSlice'
import {useDispatch} from 'react-redux'
import {app,database} from './firebase'
import {ref} from 'firebase/storage'
import {getAuth,signInWithEmailAndPassword,} from 'firebase/auth'
import {collection,addDoc} from 'firebase/firestore'
import {db} from './firebase'


function SendMail() {
  const dispatch=useDispatch()
    const {register,handleSubmit,formState:{errors}}=useForm();
      const auth=getAuth();

    const onSubmit=(formdata)=>{
          console.log(formdata)
        addDoc(db,formdata)
        .then(()=>{
        }).catch((err)=>{
          console.log(err)
        })
          dispatch(ClosedSendMessage())
    }
  {/*  collection('emails').add({
            to:formdata.to,
            subject:formdata.subject,
            message:formdata.message,
        
          })

        */}
     {/* timestamp:firebase.firestore.FieldValue.serverTimestamp()*/}
  return (
    <div className='sendmail'>
        <div className='sendmail_header'>
               <h3>new message</h3>
               <CloseIcon className='sendmail_close' onClick={()=>dispatch(ClosedSendMessage())}/>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("To",{required:true})} placeholder='To' type="email" />
        {errors.receiver &&<p className='F_errormessage'>To is required</p>}

        <input {...register("subject",{required:true},{errors})} placeholder='Subject'  type="text"/>
        {errors.title && <p className='F_errormessage'>Subject is required</p>}

    <input {...register("message",{required:true})} placeholder='Message...' type="text" className='sendmail_messge'/>
     {errors.message && <p className='F_errormessage'>Message field is required</p>}
            <div className='sendmail_options'>
                <Button className='sendmail_send'
                 variant='contained'
                 color='primary'
                 type="submit"
                >Send</Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail