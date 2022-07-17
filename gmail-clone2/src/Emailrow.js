import { Checkbox, IconButton } from '@material-ui/core'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import Mail from './Mail'
import React from 'react'
import { useDispatch } from 'react-redux'
import './emailrow.css'
import { selectMail } from './store/mailSlice';









function Emailrow({title,subject,description,time,id}) {
         const dispatch=useDispatch();
         
         const openMail=()=>{
              dispatch(selectMail({
                   title,
                   subject,
                   description,
                   time,
                   id
              }))
         }
  return (
     
      <div onClick={openMail} className='emailrow'>
         <div className='emailrow_options'>
              <Checkbox/>
              <IconButton>
                  <StarBorderOutlinedIcon/>
              </IconButton>
              <IconButton>
                  <LabelImportantOutlinedIcon/>
              </IconButton>
         </div>
         <div className='emailrow_title'>
               <h3 className='emailrow_title'>{title}</h3>
         </div>
         <div className='emailrow_message'>
               <h4>{subject}{" "}
                 <span className='emailrow_description'>
                        - {description}
               </span>
               </h4>
         </div>
         <p className='emailrow_time'>
              {time}
         </p>
    </div>

           
      
  
  )
}

export default Emailrow