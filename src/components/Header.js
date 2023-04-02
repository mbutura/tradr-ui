import '../theme.css';
import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
// eslint-disable-next-line
import { useNavigate } from "react-router-dom";

function Header() {
  const [loggedIn, setLoggedIn] = useState(undefined);
  // eslint-disable-next-line
  const navigate = useNavigate();

  function getLoginStatus(){
    fetch("/login")
    .then(res => {
      if (res.ok) { console.log("login ok"); setLoggedIn(true)} 
      else if (res['status'] === 401){ setLoggedIn(false)}
      throw new Error('Login status error');
    })
    .catch((error) => {
      console.log(error)
    });
  }

  const handleLogout = async() => {
    let response = undefined
    try {
      response = await fetch("/login", { method: "DELETE"});
    } catch (error){
      console.log("errors")
    }

    if (response?.ok) {
      navigate("/login");
    }
  }

  useEffect(() => getLoginStatus(), []);

  return (
    <nav class="navbar navbar-expand-lg header-footer-theme">
        <div class="container-fluid">
            <NavLink to='/' className="navbar-brand"><img className="logo-img" src="https://drive.google.com/uc?export=download&id=17SixfxmepKF7HtHlO1BVCnWkoqiFNYYk" alt="HomePage" /></NavLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>            
            {(loggedIn !== undefined)&&(
              <div clasNames="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 theme-font text-white">
                  <li className="nav-item">{loggedIn?<button className="btn btn-link" onClick={handleLogout}>Logout</button> : <NavLink to='/login' className="nav-link">Login</NavLink>}</li>
                </ul>
              </div>
            )}
        </div>
    </nav>
  )
}

export default Header;