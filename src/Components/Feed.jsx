import React, { useContext } from "react";
import appContext from "../Context/AppContext";

function Feed() {
  const { message } = useContext(appContext);
  return (
    <div>
      <h1>This is feed page</h1>
      <h3>{message}</h3>
    </div>
  );
}

export default Feed;
