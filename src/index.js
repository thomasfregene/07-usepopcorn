import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
// import './index.css';
// import App from './App';

function Test() {
  const  [movieRating, setMoveRating] = useState(0)
  return (
    <div>
      <StarRating color="blue" maxRating={5} onSetRating={setMoveRating}/>
      <p>This movies is rated {movieRating}</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={5} color="red" className="" defaultRating={3} />
    <Test />
    {/* <App /> */}
  </React.StrictMode>
);
