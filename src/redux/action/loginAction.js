import axios from "axios";
import { TYPES } from "../types";
import { onLogin } from "./authAction";
import { onTokenLoad } from "./tokenAction";

export const handleGetToken = () => (dispatch) => {
  try {
    dispatch(onTokenLoad(true));
    const res = axios.post(`https://reqres.in/api/login`, {
      email: inputUser,
      password: inputPass,
    });
    dispatch(onLogin(res.data.token));
    dispatch(onTokenLoad(false));
  } catch (error) {
    console.log(error);
  }
};
