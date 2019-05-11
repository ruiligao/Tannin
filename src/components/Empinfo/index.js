import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

function Empinfo({ showMe4, useId, hideShow4, usefirstName, uselastName, userestaurantName, handleLogout }) {
  return (

    <div>
    {showMe4 ?
      <div className="overlay9">
        <div className="useinfowrapper1">
        <div className="useinfowrapper2">
        <div className="useinfowrapper3">
      <div>
      <div className="btnwrap1bclose">
      <button className="btnwrap1b" onClick={() => hideShow4(useId)}>Close</button></div>
      <div className="newempformtext"></div>
      <div>Id No: {useId}</div>
      <div>Restaurant Name: {userestaurantName}</div>
      
      <div>First Name: {usefirstName}</div>
      <div>Last Name: {uselastName}</div>
 
      
      <div className="form-group">
      <div>
        </div>
</div>


      <div className="btnwrap1awrap">

        
      </div>
      <button className="btnwrap1a" onClick={() => handleLogout()}>Logout</button>
      
    </div>


<br></br>

   

    {/* <div><Link
            className={window.location.pathname === "/employeepage" ? "nav-link active" : "nav-link"} 
            to="/employeepage"
          ><button>
            Employee page
            </button>
              </Link></div> */}
    </div>
    </div>
      </div>
      </div>
      :null
    }

    </div>
  );
}

export default Empinfo;
