import React from "react";
import { ListItem } from "../List";
import { Link } from "react-router-dom";

import "./style.css";

function Restowine({handleWineDelete, name, restId, id, hideShow, showMe, wineName, wineId, winetemp, winetannin, winesweetness, winesummary, winepronunciation, wineprimaryFlavors, winepairings, winedecant, wineglassType, winebody, winealcohol, wineageability, wineacidity}) {
  return (
    <div>
    <ListItem>
        <div className="listitemdiv3">
        <div className="winecollectiondiv1">
        <div className="winecollectionname1">
        {/* <div className="fontitalicsmall">{name}</div> */}
        <div><button className="winenamebtn1" onClick={() => hideShow(id)}>{name}</button></div>
        <div><button className="winedelbtn" onClick={() => handleWineDelete(id, restId)}>Delete</button></div>
          </div>
          <div><Link
            className="nav-link" 
            to="/quiz"
          ><button>
            Quiz Page
            </button>
              </Link></div>
          <div className="font-italic">{id}</div>

          <div>
              {showMe ?
                <div className="overlay5">
                  <div className="wineinfo1">
                    <div className="wineinfo2">
                      <div className="wineinfo3">
                        <div className="infowinewrap">

                          <div>{wineName}</div>
                          <div>{wineacidity}</div>
                          <div>{wineageability}</div>
                          <div>{winealcohol}</div>
                          <div>{winebody}</div>
                          <div>{winedecant}</div>
                          <div>{wineglassType}</div>
                          <div>{winepairings}</div>
                          <div>{wineprimaryFlavors}</div>
                          <div>{winepronunciation}</div>
                          <div>{winesummary}</div>
                          <div>{winesweetness}</div>
                          <div>{winetannin}</div>
                          <div>{winetemp}</div>
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

export default Restowine;
