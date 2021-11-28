//import {fetchData} from "./Utilities/apiCall";
import { useEffect, useState } from "react";

import MainHeader from "./Components/mainHeader";
import TableHeader from "./Components/tableHeader";
import User from "./Components/usersComponent";

function App() {
  const [users, setUsers] = useState([]);



  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => firstTen(data));
  }, []);

  function firstTen(users) {
    let spliced = users.splice(0, 10);
    let sorted = spliced.sort((a, b) => {
      var nameA = a.login.toUpperCase();
      var nameB = b.login.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });

    return setUsers(sorted);
  }

  return (
    <div className="container">
      
      <MainHeader />
      <TableHeader />
      {users.map((el, i) => {
        return (
          <User key={el.id} data={el} />
        );
      })}
    </div>
  );
}

export default App;
