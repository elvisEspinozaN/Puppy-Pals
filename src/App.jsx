import { useState } from "react";
import "./App.css";
import { puppyList } from "./data.js";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);

  return (
    <div className="App">
      {featPupId && (
        <div className="featured-pup">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}

      <h1>Puppy List</h1>
      <div className="puppy-list">
        {puppies.map((puppy) => (
          <p
            className="puppy-item"
            onClick={() => setFeatPupId(puppy.id)}
            key={puppy.id}
          >
            {puppy.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
