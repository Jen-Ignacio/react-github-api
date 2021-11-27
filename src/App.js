import "./App.css";
import { useEffect, useState } from "react";
import APICALL from "./APIComponent/apiCall";

function App() {
  const [users, getUsers] = useState([]);

  useEffect(() => {
    let pulled = true;

    APICALL.getUsers().then((users) => {
      if (pulled) {
        APICALL.setUsers(users);
      }
    });
    return () => (pulled = false);
  }, []);
  return <div className="container">
    
  </div>;
}

export default App;
