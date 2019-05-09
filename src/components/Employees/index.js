

import React from "react";
import { ListItem } from "../List";
import { Link } from "react-router-dom";

import "./style.css";


function Employees({handleWineDelete, id, firstName, empId, hideShowEmp, showMeEmp, empfirstName, emplastName, empEmail}) {
  return (
    <div>
    <ListItem>
        <div className="listitemdiv4">
        <div className="empnamediv">
        <div className="empnamecollectionname1">
        {/* <div className="fontitalicsmall">{name}</div> */}
        <div><button className="empnamebtn1" onClick={() => hideShowEmp(id)}>{firstName}</button></div>
        <div><button className="empdelbtn" onClick={() => handleWineDelete(id)}><i className="fas fa-user-minus lg"></i></button></div>
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
              {showMeEmp ?
                <div className="overlay7">
                  <div className="empinfo1">
                    <div className="empinfo2">
                      <div className="empinfo3">
                        <div className="infoempwrap">
                        <div>Id No: {empId}</div>
                          <div>{empfirstName}</div>
                          <div>{emplastName}</div>
                          <div>{empEmail}</div>
                          </div>

                        <br></br>

                      </div>
                      <div className="btnwrap">
                        <button><Link
                          
                          to="/admin"
                        >
                          Others
          </Link></button>

                        <button onClick={() => hideShowEmp(empId)}>CLOSE</button>
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

export default Employees;
