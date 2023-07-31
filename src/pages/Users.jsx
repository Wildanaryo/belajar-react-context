import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { TYPES } from "../redux/types";
import { useNavigate } from "react-router-dom";
import { handleGetUser } from "../redux/action/userAction";
import { onLogout } from "../redux/action/authAction";
import { AuthContext } from "../Context/AuthProvider";
import { ProductContext } from "../Context/ProductProvider";
import check from "../image/shield-check.svg";

export default function Users() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { list } = useSelector((state) => state.productReducer);
  // const { list, onGetData } = useContext(ProductContext);
  const { isAuth, onLogout } = useContext(AuthContext);

  // const getUser = async () => {
  //   // dispatch(handleGetUser());
  // };

  // useEffect(() => {
  //   // getUser();
  //   onGetData();
  // }, []);

  const handleLogout = () => {
    // isAuth("");
    onLogout("");
    navigate("/");
  };

  // if (!isAuth) {
  //   return null;
  // }

  return (
    <div
      style={{
        border: "5px solid black",
        borderRadius: "25px",
        height: "600px",
        width: "300px",
        color: "black",
      }}
    >
      <div
        style={{
          height: "300px",
          display: "grid",
          placeItems: "center",
        }}
      >
        <img
          src={check}
          alt="success"
          style={{
            width: "100px",
          }}
        />
        <h1 style={{ margin: "-90px" }}>SUCCESS</h1>
      </div>
      <div
        style={{
          backgroundColor: "white",
          height: "50%",
          borderRadius: "0 0 19px 19px",
          display: "grid",
          placeItems: "center",
        }}
      >
        <h3 style={{ padding: "10px" }}>
          Congratulation, your account has been successfully created.
        </h3>
        <h4 style={{ margin: "0px" }}>here's your token</h4>
        <h4 style={{ margin: "0px" }}>{isAuth}</h4>
        <button
          onClick={handleLogout}
          style={{
            marginBottom: "10px",
            backgroundColor: "red",
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
