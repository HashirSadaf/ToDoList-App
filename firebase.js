import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-SERVICE.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-SERVICE.js';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAl4FYt2MgXVl2zB88T5tGbdpRe9B7bYqk",
  authDomain: "todo-list-80490.firebaseapp.com",
  projectId: "todo-list-80490",
  storageBucket: "todo-list-80490.appspot.com",
  messagingSenderId: "651623151105",
  appId: "1:651623151105:web:0694742254d2b0876bb200",
  measurementId: "G-X2H2ZYGNLG"
});
const auth = getAuth(firebaseApp );

onAuthStateChanged(auth, user => {
  if(user != null){
    console.log('logged in!');
  } else {
    console.log("No user");
  }
})