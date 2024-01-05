import { initializeApp } from 'firebase/app'
import { 
        getAuth,
        signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider
    } from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCKwCrAqzdYtFckF1uFw2-MbrW9E3M0RVg",
    authDomain: "cloathing-db-6de50.firebaseapp.com",
    projectId: "cloathing-db-6de50",
    storageBucket: "cloathing-db-6de50.appspot.com",
    messagingSenderId: "88467929375",
    appId: "1:88467929375:web:5b88318ee8925f467a582a"
};

const firebaseApp = initializeApp(firebaseConfig); 

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup= ()=> signInWithPopup(auth,provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
    
    if(!userSnapshot.exists()){
        const {displayName , email} = userAuth;
        const creatAt = new Data();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                creatAt
            });
        } catch (err){
            console.log('error creating the user', err.message);
        }
    }
    return userDocRef;
}
