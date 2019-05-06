import React from "react";
import { ListItem } from "../List";

import "./style.css";

function Restowine({ id, Wines, Button }) {
  return (
    <ListItem>
        <div className="listitemdiv3">
        <div>
          <h3 className="font-italic">{id}</h3>
 
          <p className="font-italic small">{Wines}</p>
          </div>
          <div>
            <Button />
          </div>

          </div>
    </ListItem>
  );
}

export default Restowine;
