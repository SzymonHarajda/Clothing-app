import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'



const Signin = ( ) => {
    const logGoogleUser = async ()=>{
        const [{user}]  = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign IN Page</h1>
            <button onClick={logGoogleUser}>Sign In with Google</button>
        </div>
    );
}

export default Signin;