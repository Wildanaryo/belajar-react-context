import "../App.css";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TYPES } from "../redux/types";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { onFail, onLoad, onLogin } from "../redux/action/authAction";
import { AuthContext } from "../Context/AuthProvider";

export default function Login() {
  // const dispatch = useDispatch();
  // const { token, isLoading, isError } = useSelector(
  //   (state) => state.authReducer
  // );
  const [inputUser, setInputUser] = useState("");
  const [inputPass, setInputPass] = useState("");
  // const { list, onGetData } = useContext(ProductContext);
  const { isAuth, isLoading, onLogin, isError } = useContext(AuthContext);

  // const getUser = async () => {
  //   try {
  //     dispatch(onLoad(true, false));
  //     const res = await axios.post(`https://reqres.in/api/register`, {
  //       email: inputUser,
  //       password: inputPass,
  //     });
  //     console.log(res.data.token);
  //     dispatch(onLogin(res.data.token));
  //     dispatch(onLoad(false, false));
  //   } catch (error) {
  //     dispatch(onFail(true, false));
  //     console.log(error);
  //   }
  // };

  const handleName = (e) => {
    setInputUser(e.target.value);
  };
  const handlePass = (e) => {
    setInputPass(e.target.value);
  };

  const handleLoginButton = () => {
    // getUser();
    onLogin(inputUser, inputPass);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/users"); // Mengarahkan pengguna ke halaman "/users" jika token tersedia
    }
  }, [isAuth]);

  if (isLoading) {
    return (
      <div style={{ color: "black" }}>
        <h1>Loading.....</h1>
      </div>
    );
  }

  return (
    <div
      style={{
        border: "5px solid black",
        borderRadius: "25px",
        height: "300px",
        width: "300px",
        color: "black",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div
        style={{
          width: "250px",
          display: "flex",
          flexDirection: "column",
          color: "black",
        }}
      >
        <h2 style={{ marginTop: "0px" }}>USER REGISTERATION</h2>
        <input
          type="text"
          id="name"
          style={{
            height: "30px",
            marginBottom: "4px",
            borderRadius: "10px",
          }}
          //   value="eve.holt@reqres.in"
          placeholder="Input Your E-mail"
          onChange={handleName}
        />
        <input
          type="password"
          id="pass"
          style={{
            height: "30px",
            marginBottom: "4px",
            borderRadius: "10px",
          }}
          //   value="cityslicka"
          placeholder="Input Your Password"
          onChange={handlePass}
        />
        <div>
          {isError && (
            <p
              style={{
                color: "red",
                margin: "5px",
              }}
            >
              Incorrect email or password
            </p>
          )}
        </div>
        <button
          onClick={handleLoginButton}
          type="submit"
          style={{
            marginTop: "20px",
          }}
        >
          Log-In
        </button>
      </div>
    </div>
  );
}
