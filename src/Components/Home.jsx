import React, { useContext } from "react";
import appContext from "../Context/AppContext";

function Home() {
  const { message, isAuth, setIsAuth } = useContext(appContext);

  return (
    <div style={{ backgroundColor: isAuth ? "green" : "red" }}>
      <h1>This is home page</h1>
      <h3>{message}</h3>
      {isAuth ? (
        <button onClick={() => setIsAuth(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsAuth(true)}>Login</button>
      )}
    </div>
  );
}

export default Home;
