import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // cores error explaned


  // how to use proxy for cross origin
  
  return (
    <>
      <div>
        <h1>Backend Chai or code</h1>
        <p>Jokes: {jokes.length}</p>

        {jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
