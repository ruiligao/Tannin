import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Userinfo({ showMe3, id, restaurantId, hideShow3, firstName, lastName, email,password, handleAddEmployeeChange, handleAddEmpolyeeFormSubmit }) {
  return (

    <div>

    {showMe3 ?
      <div className="overlay1">
        <div className="wrapper1">
        <div className="wrapper2">
        <div className="wrapper3">
      <div>
      <div className="newempformtext"></div>
      <div>{id}</div>
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>{email}</div>
      <div>{restaurantId}</div>

      
      <div className="form-group">
      <div>
      
        </div>
        
        

</div>


      <div className="btnwrap1awrap">

        <button className="btnwrap1a" onClick={() => hideShow3()}>Close</button>
      </div>
    
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
