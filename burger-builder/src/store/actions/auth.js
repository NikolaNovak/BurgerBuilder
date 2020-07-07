import * as actionTypes from "./actionTypes";
import axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const auth = (email, password, isSignUp) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD6_ImvPlhFzlIl5m-1SGgKRIqV1YvP6wY";

    if (isSignUp)
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD6_ImvPlhFzlIl5m-1SGgKRIqV1YvP6wY";

    axios
      .post(url, authData)
      .then((response) => {
        dispatch(authSuccess(response.data.idToken, response.data.localId));
      })
      .catch((error) => {
        console.log(error);
        dispatch(authFail(error));
      });
  };
};
