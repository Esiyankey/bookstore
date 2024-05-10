import React, { useEffect, useState } from "react";
import "../styles/welcome.css";
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate =useNavigate()
  const [showWelcome, setShowWelcome] = useState(true);
  useEffect ( () => {
    const timed = setTimeout(() => {
      setShowWelcome(false);
      navigate('/login');
    }, 2000);
    return () => clearTimeout(timed);
  }, [history]);

  return (
    <>
      {showWelcome && (
        <div className="welcome-note">
          {" "}
          <div>
            My <span style={{ color: "#ea7750" }}>Book</span>
          </div>
          <div> Shelf</div>{" "}
        </div>
      )}
    </>
  );
};

export default WelcomePage;