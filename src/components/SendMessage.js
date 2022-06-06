import React, {useState} from 'react'
import {Input, Button} from '@material-ui/core'
import { db , auth } from '../firebase'
import firebase from 'firebase/compat/app';
function SendMessage() {
  const [msg,setmsg] = useState('')
  async function sendMessage(e){
    e.preventDefault()
    const {uid, photoURL} = auth.currentUser
    await db.collection('messages').add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    setmsg('')
  }
  return (
    <form  className='sendMsg' onSubmit={sendMessage}>
      <Input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} value={msg} onChange = {(e)=> setmsg(e.target.value)} placeholder='Message...'/>
      <Button style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px'}} type='submit'>Send</Button>
    </form>
  )
}

export default SendMessage