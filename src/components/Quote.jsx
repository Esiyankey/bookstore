import {useEffect,useState} from "react";
import '../styles/Homepage.css'
export const Quote = () => {
    const [getQuote, setGetQuote] = useState("");
  
    const fetchQuote = async () => {
      const response = await fetch("https://type.fit/api/quotes ");
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuote = data[randomIndex];
      setGetQuote(randomQuote);
      console.log(data);
    };
    useEffect(() => {
        fetchQuote(); // Fetch quote initially
        const intervalId = setInterval(fetchQuote, 24 * 60 * 60 * 1000); // Fetch quote every 24 hours
        return () => clearInterval(intervalId); // Cleanup function to clear interval
      }, []);

  return (
    <div className="quote">
      <h3 className="today">Today's Quote</h3>
      <p>
      "{getQuote.text}"
      </p>
      <div className="author">~{getQuote.author}</div>
    </div>
  );
};
