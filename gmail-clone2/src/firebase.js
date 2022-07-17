import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage';
import { collection } from 'firebase/firestore';
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDdawTrcdjSvt7HjMDy1pqvnFTjZ9o2RAo",
  authDomain: "fir-e1d57.firebaseapp.com",
  projectId: "fir-e1d57",
  storageBucket: "fir-e1d57.appspot.com",
  messagingSenderId: "1089384362161",
  appId: "1:1089384362161:web:358d95682a92f80ef1f290"
};
   
export const app=initializeApp(firebaseConfig);
export const database =getFirestore(app)
export const storage=getStorage(app)
export const db=collection(database,'emails');
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider()


{/*export const SignIn=()=>{
    signInWithPopup(auth,provider)
    .then((result)=>{
             
    })
    
}
*/}
