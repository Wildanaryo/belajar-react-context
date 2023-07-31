import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import check from "../image/shield-check.svg";

export default function Users() {
  const navigate = useNavigate();

  const { isAuth, onLogout } = useContext(AuthContext);

  const handleLogout = () => {
    onLogout("");
    navigate("/");
  };

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
