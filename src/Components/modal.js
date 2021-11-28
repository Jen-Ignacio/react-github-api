import React, { useEffect, useState } from "react";

export default function Modal(props) {
  const [userDeets, setUserDeets] = useState([]);

  useEffect(() => {
    setUserDeets(props.data);
  }, [props]);

  console.log(props.data);

  return (
    <div className="modal">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">TITEL</p>
          <p className="modal-card-title">Profile Views:</p>
          <button className="delete" aria-label="close"></button>
        </header>
        <section className="modal-card-body">DEETS ID</section>
        <footer className="modal-card-foot">
          <button className="button" aria-label="close">
            CLOSE
          </button>
        </footer>
      </div>
    </div>
  );
}
