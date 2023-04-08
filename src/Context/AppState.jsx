import React, { useState } from "react";
import AppContext from "./AppContext";

function AppState(props) {
  const [isAuth, setIsAuth] = useState(true);
  return (
    <AppContext.Provider
      value={{
        message: "This is from the Context.",
        isAuth,
        setIsAuth,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppState;
