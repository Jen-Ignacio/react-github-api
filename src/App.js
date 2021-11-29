//import {fetchData} from "./Utilities/apiCall";
import { useEffect, useState } from "react";

import MainHeader from "./Components/mainHeader";
import TableHeader from "./Components/tableHeader";
import User from "./Components/usersComponent";
import Modal from "./Components/modal";
import { DataContext } from "./DataContext/CountContext";

function App() {
  const [users, setUsers] = useState([]);
  const [showState, setShowState] = useState(false);
  const [modalData, setModalData] = useState({});
  const [clickCount, setClickCount] = useState(0);

  function buttonClickedHandler(user) {
    setModalData(user);
    setShowState(true);
  }

  function closeModal() {
    setShowState(false);
  }

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
      <DataContext.Provider value={{ clickCount, setClickCount }}>
        {showState ? (
          <Modal data={modalData} showState={showState} close={closeModal} />
        ) : (
          <></>
        )}
        <MainHeader />
        <TableHeader />
        {users.map((el, i) => {
          return (
            <User
              key={el.id}
              data={el}
              buttonClicked={() => buttonClickedHandler(el)}
            />
          );
        })}
      </DataContext.Provider>
    </div>
  );
}

export default App;
