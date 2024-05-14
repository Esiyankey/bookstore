import { useState, useEffect } from "react";
import { Quote } from "./Quote";
import { Books } from "./Books";
import { Search_Bar } from "./Search_Bar";

export const Outlet__Page = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateClock = () => {
      setCurrentTime(new Date());
    };
    const intervalId = setInterval(updateClock, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup function to stop timer on unmount
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) {
      return "Good Morning!";
    } else if (hour < 17) {
      return "Good Afternoon!";
    } else {
      return "Good Evening!";
    }
  };
  return (
    <>
      <div style={{ marginTop: "5rem", paddingLeft: "2rem" }}>
        <Quote />
        <div className="recommended">
          <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
            {getGreeting()}
          </h2>
          <h4 style={{ fontSize: "1.2rem", fontWeight: "lighter" }}>
            Recommended for You
          </h4>
          <Books />
        </div>
      </div>
    </>
  );
};
