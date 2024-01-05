import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'
const Signin = ( ) => {
    const logGoogleUser = async ()=>{
        const response  = await signInWithGooglePopup();
        console.log(response);
    }

    return (
        <div>
            <h1>Sign IN Page</h1>
            <button onClick={logGoogleUser}>Sign In with Google</button>
        </div>
    );
}

export default Signin;