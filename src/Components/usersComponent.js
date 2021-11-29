import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../DataContext/CountContext";

export default function Users(props) {
  const [userData, setUserData] = useState({});
  const [count, setCount] = useState(0);
  const { setClickCount } = useContext(DataContext);

  function handleClicked() {
    let updateCount = count + 1;
    setCount(updateCount);
    setClickCount(updateCount);

    props.buttonClicked();
  }

  useEffect(() => {
    setUserData(props.data);
  }, [props.data]);

  return (
    <div className="is-flex block is-size-4">
      <div className="column is-one-third is-size-4">{userData.login}</div>
      <div className="column is-narrow has-text-right">{userData.id}</div>
      <div className="column is-narrow is-medium">
        <button
          className="modal-button button is-primary"
          data-toggle="modal"
          aria-haspopup="true"
          onClick={handleClicked}
        >
          MORE INFO
        </button>
      </div>
    </div>
  );
}
