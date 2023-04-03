import '../theme.css';
import { NavLink } from "react-router-dom";
// eslint-disable-next-line
import { useNavigate } from "react-router-dom";
import React from 'react';

function Header({value}) {
  // console.log(`Header value: ${value}`)
  const [loggedIn, setLoggedIn] = value;

  // eslint-disable-next-line
  const navigate = useNavigate();

  const handleLogInout = async() => {
    if (loggedIn === true){
      let response = undefined
      try {
        response = await fetch("/login", { method: "DELETE"});
      } catch (error){
        console.log("errors")
      }

      if (response?.ok) {
        setLoggedIn(false)
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }

  return (
    <nav className="navbar navbar-expand-lg header-footer-theme">
        <div className="container-fluid">
            <NavLink to='/' className="navbar-brand"><img className="logo-img" src="https://drive.google.com/uc?export=download&id=17SixfxmepKF7HtHlO1BVCnWkoqiFNYYk" alt="HomePage" /></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>            
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 theme-font">
                  <li className="nav-item"><button className="btn btn-outline-light rounded-lg" onClick={handleLogInout}>{loggedIn?"Logout":"Login"}</button></li>
                </ul>
              </div>
        </div>
    </nav>
  )
}

export default Header;