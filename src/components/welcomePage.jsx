import React from "react";
import "../styles/welcome.css";

export const WelcomePage = () => {
  return (
    <div className="welcome-note">
      {" "}
      <div>
        My <span style={{color:"#ea7750"}}>Book</span>
      </div>
      <div> Shelf</div>{" "}
    </div>
  );
};
