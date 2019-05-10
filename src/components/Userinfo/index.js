import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Userinfo({ showMe3, useId, hideShow3, usefirstName, handleLogout }) {
  return (

    <div>
    {showMe3 ?
      <div className="overlay8">
        <div className="wrapper1">
        <div className="wrapper2">
        <div className="wrapper3">
      <div>
      <div className="newempformtext"></div>
      <div>Id No: {useId}</div>
      
      <div>{usefirstName}</div>
      <div>{usefirstName}</div>
 
      
      <div className="form-group">
      <div>
        </div>
</div>


      <div className="btnwrap1awrap">

        <button className="btnwrap1a" onClick={() => hideShow3(useId)}>Close</button>
      </div>
      <button className="btnwrap1a" onClick={() => handleLogout()}>Logout</button>
      
    </div>


<br></br>

   

    <div><Link
            className={window.location.pathname === "/employeepage" ? "nav-link active" : "nav-link"} 
            to="/employeepage"
          ><button>
            Employee page
            </button>
              </Link></div>
    </div>
    </div>
      </div>
      </div>
      :null
    }

    </div>
  );
}

export default Userinfo;
