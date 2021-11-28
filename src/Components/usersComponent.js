import React, { useEffect, useState } from "react";
import Modal from "./modal";

export default function Users(props) {
  const [userData, setUserData] = useState([]);
  const [showState, setShowState] = useState(false);

  function buttonClickedHandler() {
    setShowState((showState) => (showState = !showState));
  }

  useEffect(() => {
    setUserData(props.data);
  }, [props.data]);

  return (
    <div className="is-flex block is-size-4">
      {showState ? <Modal data={props.data} /> : <></>}
      <div className="column is-one-third is-size-4">{userData.login}</div>
      <div className="column is-narrow has-text-right">{userData.id}</div>
      <div className="column is-narrow is-medium">
        <button
          className="modal-button button is-primary"
          data-toggle="modal"
          aria-haspopup="true"
          onClick={buttonClickedHandler}
        >
          MORE INFO
        </button>
      </div>
    </div>
  );
}
