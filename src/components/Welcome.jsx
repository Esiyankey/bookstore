import React from "react";
import "../styles/welcome.css";
import { useNavigate } from "react-router-dom";
import AOS from "aos";

export const Welcome = () => {
  const navigate = useNavigate();
  const [showWelcome, setShowWelcome] = useState(true);
  useEffect(() => {
    const timed = setTimeout(() => {
      setShowWelcome(false);
      navigate("/login");
      AOS.init();
    }, 2000);
    return () => clearTimeout(timed);
  }, [history]);

  return (
    <>
      {showWelcome && (
        <div className="welcome-note">
          {" "}
          <div className="my">
            <div data-aos="fade-right">My</div>{" "}
            <div data-aos="fade-left">
              <span style={{ color: "#ea7750" }}>Book</span>
            </div>
          </div>
          <div data-aos="fade-up"> Shelf</div>{" "}
        </div>
      )}
    </>
  );
};
