import React from "react";
import { ListItem } from "../List";

import "./style.css";

function Wine({ title, subtitle, authors, link, description, image, Button }) {
  return (
    <ListItem>
      
          <h3 className="font-italic">{title}</h3>
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        

          <div className="btn-container">
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a>
            <Button />
          </div>
      
      
          <p className="font-italic small">Written by {authors}</p>
        

          <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
      

          <p>{description}</p>
        
    </ListItem>
  );
}

export default Wine;
