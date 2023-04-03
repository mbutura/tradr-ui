import Home from './routes/Home'
import Login from './routes/Login'
import NotFound from './routes/NotFound'
import Dashboard from './routes/Dashboard'

  import React, { Fragment, useState } from "react";
import { Routes, Route } from "react-router-dom"

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const value = [loggedIn, setLoggedIn];
  return(
    <>
        <Routes>
          <Route path="/" element={<Home value={value}/>} />
          <Route path="/login" element={<Login value={value}/>} />
          <Route path="/dashboard" element={<Dashboard value={value}/>} />
          <Route path="*" element={<NotFound value={value}/>} />
        </Routes>
    </>
  )
}

export default App;
