import { useState, useContext } from 'react';
import FornmInput from '../form-input/form-input.component';
import { SignUpContainer } from './sign-up-form.styles';
import Button from '../button/button.component';
import { UserContext } from '../../contexts/user.context';
import {
  creatAuthUserWithEmailAndPasword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('password do not metch');
      return;
    }
    try {
      const { user } = await creatAuthUserWithEmailAndPasword(email, password);
      setCurrentUser(user);

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
      alert('User created');
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        alert('Cannot creat user email in use');
      } else console.log('user creation encouter an error:', err);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FornmInput
          label="Display Name"
          required
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
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
        <FornmInput
          label="Confirm Password"
          required
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
