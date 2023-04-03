import Home from './routes/Home'
import Login from './routes/Login'
import NotFound from './routes/NotFound'
import Dashboard from './routes/Dashboard'

import React, { Fragment, useState } from "react";
import { Routes, Route } from "react-router-dom"
import { LoginStateProvider } from "./context/loginstate";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return(
    <>
      <LoginStateProvider value={[loggedIn, setLoggedIn]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LoginStateProvider>
    </>
  )
}

export default App;
