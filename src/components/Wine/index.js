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
          <div className="winenamediv">
          <div className="winenamediv2">
               <div><button className="winenamebtn" onClick={() => hideShow(id)}>{name}</button></div> <div><button className="btnadd" onClick={() => handleWineAdd(id)}><i className="fa fa-plus-circle fa-2x" aria-hidden="true"></i></button></div>   
               </div>        
            
            <div>{id}</div>
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
            </div>
            </div>


      </ListItem>


    </div>

  );
}

export default Wine;
