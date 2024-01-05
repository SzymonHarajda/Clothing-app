//! all comented stuff is for signInWithGoogleRedirect  the secound metod to google authorisation
// import {useEffect} from 'react';
// import { getRidirectResult } from 'firebase/auth'

import { /*auth*/ signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from '../../utils/firebase/firebase.utils'



const Signin = ( ) => {
    // useEffect(()=>{
    //     const response = await getRidirectResult(auth);
    //     if (response){
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    // },[])

    const logGoogleUser = async ()=>{
        const {user}  = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign IN Page</h1>
            <button onClick={logGoogleUser}>Sign In with Google</button>
            {/* <button onClick={signInWithGoogleRedirect}>Sign In with Google</button> */}
        </div>
    );
}

export default Signin;