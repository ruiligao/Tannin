import React from "react";
import { ListItem } from "../List";

import "./style.css";

// subtitle, authors, link, description, 
function Wine({ name, Button }) {
  return (
    

    <ListItem>
      <div className="listitemdiv">
      <div>
          <h3 className="font-italic">{name}</h3>
          {/* {subtitle && <h5 className="font-italic">{subtitle}</h5>}
          <p className="font-italic small">Written by {authors}</p> */}
          </div>

          <div>
            {/* <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a> */}
            <Button />
          </div>
          {/* <img className="img-thumbnail img-fluid w-100" src={image} alt={title} /> */}
      

          {/* <p>{description}</p> */}
          </div>
        
    </ListItem>
    
  );
}

export default Wine;
