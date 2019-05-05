import React from "react";
import { ListItem } from "../List";
import { Link } from "react-router-dom";

import "./style.css";

// subtitle, authors, link, description, 
function Wine({ name, id, hideShow, showMe, handleWineAdd,wineName, wineId }) {

  return (
    <div>
      <ListItem>
        <div className="listitemdiv">
          <div>
            <h3 className="font-italic">{name}</h3>
            <div>{id}</div>
            <div>
              <button className="sampleBtn" onClick={() => handleWineAdd(id)}>Add Wine</button>
              <button className="sampleBtn" onClick={() => hideShow(id)}>Info</button>
            </div>
            <div>
              {showMe ?
                <div className="overlay4">
                  <div className="wrap1">
                    <div className="wrap2">
                      <div className="wrap3">
                        <div className="signUpwrap">
                          <div>{wineName}</div>
                          <div>{wineId}</div>
                        </div>

                        <br></br>

                      </div>
                      <div className="btnwrap">
                        <button><Link
                          className={window.location.pathname === "/admin" ? "nav-link active" : "nav-link"}
                          to="/admin"
                        >
                          admin
          </Link></button>

                        <button onClick={() => hideShow(id)}>CLOSE</button>
                      </div>
                    </div>
                  </div>
                </div>
                : null
              }
            </div>






            {/* {subtitle && <h5 className="font-italic">{subtitle}</h5>}
          <p className="font-italic small">Written by {authors}</p> */}
          </div>

          <div>
            {/* <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a> */}
            {/* <Button /> */}


            {/* <button className="sampleBtn" onClick={() => hideShow()}>Login/ Sign Up</button> */}

          </div>
          {/* <img className="img-thumbnail img-fluid w-100" src={image} alt={title} /> */}


          {/* <p>{description}</p> */}
        </div>

      </ListItem>


    </div>

  );
}

export default Wine;
