import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCM8D-GA3oP7eC-yzOtCM3LWDvFnl0ns98",
    authDomain: "barter-system-20dd7.firebaseapp.com",
    projectId: "barter-system-20dd7",
    storageBucket: "barter-system-20dd7.appspot.com",
    messagingSenderId: "506002170697",
    appId: "1:506002170697:web:ff3664d66d55ad96ca7098"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
