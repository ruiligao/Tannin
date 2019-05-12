import React from "react";
import { ListItem } from "../List";
import { Link } from "react-router-dom";

import "./style.css";

function ScoreSummary({ wine, score }) {
  return (
    <div>
      <ListItem>
        <div>
          <div className="infodetails">Wine: {wine}</div>
          <div className="infodetails">Score: {score}</div>
        </div>
      </ListItem>
    </div>
  );
}

export default ScoreSummary;
