import { useEffect } from "react";
import { useApi } from "./utils/hooks/useApi";
import { fetchResource } from "./utils/api";

import Header from "./Components/mainHeader";
import TableHeader from "./Components/tableHeader";
import Users from "./Components/usersComponent";

function App() {
  const [users, setUsers] = useApi(() => fetchResource("users"));

  useEffect(() => {
    setUsers();
  }, []);

  return (
    <div className="container">
      <Header />
      <TableHeader />
      {users.data != null ? (
        users.data.map((e, i) => {
          return <Users key={i} data={e} />;
        })
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
