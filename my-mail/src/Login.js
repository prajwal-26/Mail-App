// import React from 'react'
// import './Login.css'
// import mailer from './Images/mailer.png'
// import { Button } from '@mui/material'
// import { auth, provider } from './firebase'
// import { login } from './features/userSlice'
// import { useDispatch } from 'react-redux'
// const Login = () => {
//     const dispatch = useDispatch()
//     const signIn = () =>{
//         auth
//         .signInWithPopup(provider)
//         .then(({user}) => {
//             dispatchEvent(login({
//                 displayName: user.displayName,
//                 email: user.email,
//                 photoUrl: user.photoUrl
//             }))
//         })
//         .catch((error) => alert(error.message))
//     }
//   return (
//     <div className="login">
//         <div className="login_container">
//             <img src={mailer} alt="mail" />
//             <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
//         </div>
//     </div>
//   )
// }

// export default Login

import React from 'react';
import './Login.css';
import mailer from './Images/mailer.png';
import { Button } from '@mui/material';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { provider } from './firebase'; // Ensure you import the provider from your Firebase configuration file

const Login = () => {
    const dispatch = useDispatch();
    const auth = getAuth(); // Get the auth instance from Firebase

    const signIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            dispatch(
                login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL,
                })
            );
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className="login">
            <div className="login_container">
                <img src={mailer} alt="mail" />
                <Button variant="contained" color="primary" onClick={signIn}>
                    Login
                </Button>
            </div>
        </div>
    );
};

export default Login;
