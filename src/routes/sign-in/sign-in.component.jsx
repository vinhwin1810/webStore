import {
  signInWithGooglePopup,
  createUserDocumentAuth,
} from "../../utils/firebase.utils";

function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google Pop up</button>
    </div>
  );
}

export default SignIn;
