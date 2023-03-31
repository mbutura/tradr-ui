import React from 'react'
import { NavLink, useLocation } from "react-router-dom"

function Header() {
  let currentRoute = useLocation().pathname
  let currentlyOnPortal = currentRoute.includes("manage")
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <NavLink to='/' className="navbar-brand">Senpai Engineering</NavLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item">{currentlyOnPortal?<NavLink to='/manage/personnel' className="nav-link">Manage-personnel</NavLink> : <NavLink to='/' className="nav-link">Home</NavLink>}</li>
                  <li class="nav-item">{currentlyOnPortal?<NavLink to='/manage/jobs' className="nav-link">Manage-jobs</NavLink> : <NavLink to='/login' className="nav-link">Staff-login</NavLink>}</li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header;