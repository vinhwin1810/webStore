import {
  auth,
  signInWithGoogleRedirect,
  signInWithGooglePopup,
  createUserDocumentAuth,
} from "../../utils/firebase.utils";

// import { getRedirectResult } from "firebase/auth";
// import { useEffect } from "react";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

function SignIn() {
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await getRedirectResult(auth);

  //     if (response) {
  //       const userDocRef = await createUserDocumentAuth(response.user);
  //     }
  //   }
  //   fetchData();
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google Pop up</button>
      <SignUpForm />
    </div>
  );
}

export default SignIn;
