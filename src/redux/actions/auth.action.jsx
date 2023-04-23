import { auth, provider } from "../../firebase";

import { signInWithPopup } from "firebase/auth";
import {
    
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../actionsTypes";

export const Login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });
    const res = await signInWithPopup(auth, provider);

    console.log(res);

    const accessToken = res.accessToken;
    const profile = {
      name: res.user.displayName,
      photoURL: res.user.photoURL,
    };

    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });

    dispatch({
      type: LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    console.log(error.message);

    dispatch({
      type: LOGIN_FAIL,
      payload: error.message,
    });
  }
};
