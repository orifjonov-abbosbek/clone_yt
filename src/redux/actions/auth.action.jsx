import { auth, provider } from "../../firebase";

import { signInWithPopup } from "firebase/auth";

export const Login = () => async (dispatch) => {
  try {
    const res = await signInWithPopup(auth, provider);

    console.log(res);
  } catch (error) {}
};
