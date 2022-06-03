import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAfB2xMLM77oFjjDMglPqPAh0lGgBglnNo",
    authDomain: "chatapp-ea812.firebaseapp.com",
    projectId: "chatapp-ea812",
    storageBucket: "chatapp-ea812.appspot.com",
    messagingSenderId: "104126407766",
    appId: "1:104126407766:web:6d543a414d1defa1c587f7",
    measurementId: "G-TQ9T0BPEH1"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth()

export { db, auth }