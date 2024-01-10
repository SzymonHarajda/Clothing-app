import { useState } from "react";
import FornmInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";

import {
  signInUserWithEmailAndPasword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,

} from "../../utils/firebase/firebase.utils";


const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {  email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

    try {
      const response  = signInUserWithEmailAndPasword(email,password);
      console.log(response);
      resetFormFields();
    } catch (err) {
      alert("Wrong email or password!, Try againe!");
    }
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
const  signInWithGoogle = async () => {
  const { user } = await signInWithGooglePopup();
  const userDocRef = createUserDocumentFromAuth(user);
};

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form >
        
        <FornmInput
          label="Email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FornmInput
          label="Password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button buttonType="google" onClick={signInWithGoogle}>Google Sign In </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
