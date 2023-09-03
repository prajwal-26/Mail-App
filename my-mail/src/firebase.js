// import firebase from 'firebase';

// const firebaseConfig = {
//     apiKey: "AIzaSyDYK0Z2J-SXV-93bNX_DZ7l19OpvFFCV1Q",
//     authDomain: "clone-38b1b.firebaseapp.com",
//     projectId: "clone-38b1b",
//     storageBucket: "clone-38b1b.appspot.com",
//     messagingSenderId: "912049638176",
//     appId: "1:912049638176:web:16c4c37a407892000d6545",
//     measurementId: "G-RD9GJ1D8L4"
//   };
//   const firebaseApp = firebase.initializeApp(firebaseConfig);
//   const db = firebaseApp.firestore();
//   const auth = firebase.auth();
//   const provider = new firebase.auth.GoogleAuthProvider();

//   export {db,auth,provider}
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDYK0Z2J-SXV-93bNX_DZ7l19OpvFFCV1Q",
    authDomain: "clone-38b1b.firebaseapp.com",
    projectId: "clone-38b1b",
    storageBucket: "clone-38b1b.appspot.com",
    messagingSenderId: "912049638176",
    appId: "1:912049638176:web:16c4c37a407892000d6545",
    measurementId: "G-RD9GJ1D8L4"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore/lite";

// const firebaseConfig = {
//   apiKey: "AIzaSyATcQBcBVJAYZbn9EfKNq6DjXtFdx25tss",
//   authDomain: "grey-hackbu.firebaseapp.com",
//   projectId: "grey-hackbu",
//   storageBucket: "grey-hackbu.appspot.com",
//   messagingSenderId: "748662363480",
//   appId: "1:748662363480:web:4faf4f4fcd12e0f20d012d",
//   measurementId: "G-7GDWG2D6FF",
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);
// const storage = getStorage(app);
// const provider=new GoogleAuthProvider()

// export { db, auth, storage,provider };