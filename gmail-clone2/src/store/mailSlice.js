import { createSlice } from "@reduxjs/toolkit";



export const mailSlice=createSlice({
    name:'mail',
    initialState:{
        selectedMail:null,
        sendMessageIsOpen:false,
    },
    reducers:{
         selectMail:(state,action)=>{
               state.selectedMail=action.payload;
         },
        openSendMessage:(state)=>{
            state.sendMessageIsOpen=true
        },
         ClosedSendMessage:(state)=>{
            state.sendMessageIsOpen=false
         },
    },
   
});

export const {selectMail,openSendMessage,ClosedSendMessage}=mailSlice.actions;
export const selectOpenMail=(state)=>state.mail.selectedMail
export const selectSendMessageIsOpen=(state)=>state.mail.sendMessageIsOpen;
export default mailSlice.reducer;