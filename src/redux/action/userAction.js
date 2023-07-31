import { TYPES } from "../types";
import axios from "axios";
import {
  onProductFail,
  onProductLoad,
  onProductSucceed,
} from "./productAction";

export const handleGetUser = () => async (dispatch) => {
  try {
    dispatch(onProductLoad(true));
    const res = await axios.get(`https://reqres.in/api/users?page=1`);
    dispatch(onProductSucceed(res.data.data, false));
  } catch (error) {
    console.log(error);
    dispatch(onProductFail(false, error.message));
  }
};
