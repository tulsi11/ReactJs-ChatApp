import React from 'react'
import {Button} from '@material-ui/core'
import firebase from 'firebase/compat/app';
import {auth} from '../firebase.js'

function signin() {
    function SignInwithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    } 
  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
        <Button style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600' }} onClick={SignInwithGoogle}>Sign In with Google</Button>
    </div>
  )
}

export default signin