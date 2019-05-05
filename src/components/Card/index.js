import React from "react";
import "./style.css";
function Card({ title, children }) {
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h3>
          <strong>
           {title}
          </strong>
        </h3>
      </div>
      <div className="cardwrapper1">
      <div className="cardwrapper2">
      <div className="cardbody">{children}</div>
      </div>
      </div>
    </div>
  );
}

export default Card;
