// import React from "react";
// import { ListItem } from "../List";

// import "./style.css";
// // title, subtitle, authors, link, description, Button
// function Employees( id, handleWineDelete ) {
//   return (
//     <ListItem>
//         <div className="listitemdiv2">
//         <div>
//           <h3 className="font-italic">{id}</h3>
//           <div><button className="winedelbtn" onClick={() => handleWineDelete(id)}>Delete</button></div>
//           {/* {subtitle && <h5 className="font-italic">{subtitle}</h5>}
//           <p className="font-italic small">Written by {authors}</p>
//           </div>
//           <div>
//             <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
//               View */}
//             {/* </a>
//             <Button /> */}
//           </div>

//           {/* <img className="img-thumbnail img-fluid w-100" src={image} alt={title} /> */}
      

//           {/* <p>{description}</p> */}
//           </div>
//     </ListItem>
//   );
// }

// export default Employees;

import React from "react";
import { ListItem } from "../List";
import { Link } from "react-router-dom";

import "./style.css";

function Employees({handleEmployeeDelete, id, hideShow, showMe, firstName}) {
  return (
    <div>
    <ListItem>
        <div className="listitemdiv3">
        <div className="winecollectiondiv1">
        <div className="winecollectionname1">
        {/* <div className="fontitalicsmall">{name}</div> */}
        <div><button className="winenamebtn1" onClick={() => hideShow(id)}>{firstName}</button></div>
        <div><button className="winedelbtn" onClick={() =>handleEmployeeDelete(id)}>Delete</button></div>
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

                          <div>{firstName}</div>
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

export default Employees;
