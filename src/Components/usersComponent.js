import React, { useEffect, useState } from "react";

import Modal from "./modal";

export default function Users(props) {
  const [userData, setUserData] = useState({});
  const [clickCount, setClickCount] = useState(0);
  const [showState, setShowState] = useState(false);

  useEffect(() => {
    setUserData(props.data);
    setClickCount(clickCount);
  }, [clickCount, props]);

  function handleClick(e) {
    e.preventDefault();
    setShowState(true);
    setClickCount(clickCount + 1);
  }

  function closeModal() {
    setShowState(false);
  }

  return (
    <>
      <Modal
        close={closeModal}
        showState={showState}
        data={userData}
        clickCount={clickCount}
      />
      <div className="is-flex block is-size-4">
        <div className="column is-one-third is-size-4">{userData.login}</div>
        <div className="column is-narrow has-text-right">{userData.id}</div>
        <div className="column is-narrow is-medium">
          <button
            className="modal-button button is-primary"
            data-toggle="modal"
            aria-haspopup="true"
            onClick={(e) => handleClick(e)}
          >
            MORE INFO
          </button>
        </div>
      </div>
    </>
  );
}
