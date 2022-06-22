import React from "react";
import notAdmin from "../img/notadmin.svg";
const NotAdmin = () => {
  return (
    <div
      style={{
        height:"100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "20px",
      }}
    >
      <h1 className="text-danger">You are not an admin</h1>
      <img alt="NotAdmin" className=" img-responsive mt-4" src={notAdmin} style={{height:"350px", width:"100%"}} />
    </div>
  );
};

export default NotAdmin;