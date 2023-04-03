import React from "react";

const LoginStateContext = React.createContext();

function LoginStateProvider({value, children }) {
    /*
    The value prop of the provider will be our context data
    this value will be available to child components of this provider
    */
    return <LoginStateContext.Provider value={value}>{children}</LoginStateContext.Provider>;
}

export { LoginStateContext, LoginStateProvider };