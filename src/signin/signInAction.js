import axios from "axios";
import {
  asyncActionStart,
  asyncActionError,
  asyncActionFinish
} from "../app/features/async/asyncActions";

export const LOGIN_USER = "LOGIN_USER";
export const SIGNUP_USER = "SIGNUP_USER";
export const AUTH_ERROR = "AUTH_ERROR";
export const GET_USER = "GET_USER";

export const loginUser = (values, history) => async dispatch => {
  dispatch(asyncActionStart());

  try {
    const res = await axios.post(
      "http://localhost:5000/signin",
      {
        email: values.email,
        password: values.password
      },
      {
        withCredentials: true
      }
    );

    dispatch({
      type: LOGIN_USER,
      payload: res.data
    });
    dispatch(asyncActionFinish());
    history.push("/");
  } catch (error) {
    dispatch(asyncActionError());
    console.log(error.response.data);
    dispatch(authError(error.response.data));
  }
};

export const signupUser = (values, history) => async dispatch => {
  dispatch(asyncActionStart());

  try {
    const res = await axios.post(
      "http://localhost:5000/signup",
      {
        email: values.email,
        password: values.password,
        name: values.name
      },
      {
        withCredentials: true
      }
    );

    dispatch({
      type: SIGNUP_USER,
      payload: res.data
    });
    dispatch(asyncActionFinish());
    history.push("/");
  } catch (error) {
    dispatch(asyncActionError());
    console.log(error.response.data);
    dispatch(authError(error.response.data));
  }
};

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export const getUser = () => async dispatch => {
  dispatch(asyncActionStart());
  try {
    const res = await axios.get("http://localhost:5000/api/me", {
      withCredentials: true
    });
    dispatch({
      type: GET_USER,
      payload: res.data
    });
    dispatch(asyncActionFinish());
  } catch (err) {
    dispatch(asyncActionError());
  }
};
