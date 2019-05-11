import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

function Userinfo({ showMe3, useEmail, useId, hideShow3, usefirstName, uselastName, userestaurantName, handleLogout }) {
  return (

    <div>
    {showMe3 ?
      <div className="overlay8">
        <div className="userinfowrapper1">
        <div className="userinfowrapper2">
        <div className="userinfowrapper3">
      <div>
      <div className="btnwrap1bclose">
      <button className="btnwrap1buserclose" onClick={() => hideShow3(useId)}><i className="fas fa-times-circle"></i></button></div>
      <div className="newempformtext"></div>
      <div>Id No: {useId}</div>
      <br></br>
      <div>Restaurant: {userestaurantName}</div>
      <br></br>
      <div>First Name: {usefirstName}</div>
      <br></br>
      <div>Last Name: {uselastName}</div>
      <br></br>
      <div>Email: {useEmail}</div>
 
      
      <div className="form-group">
      <div>
        </div>
</div>
<br></br>

      <div className="btn1logoutwrap">
      <button className="btn1logout" onClick={() => handleLogout()}>Logout <i className="fas fa-sign-out-alt"></i></button>
      </div>


      
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

export default Userinfo;
