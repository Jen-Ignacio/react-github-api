import React, { useEffect, useState } from "react";

export default function Modal(props) {
  const [showState, setShowState] = useState(false);
  const [modalData, setModalData] = useState({});
  const [visitNumber, setVisitNumber] = useState(0);

  useEffect(() => {
    setModalData(props.data);
    setShowState(props.showState);
    setVisitNumber(props.clickCount);
  }, [props]);

  return (
    <div className={showState ? "modal is-active" : "modal"}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">GITHUB USER: {modalData.login}</p>

          <button
            className="delete"
            aria-label="close"
            onClick={props.close}
          ></button>
        </header>
        <section className="modal-card-body">
          <p className="modal-card-title">Profile Views: {visitNumber}</p>
          <br />
          <p className="block">login: {modalData.login}</p>
          <p className="block">ID: {modalData.id}</p>
          <p className="block">Node ID: {modalData.node_id}</p>
          <p className="block">Avatar URL: {modalData.avatar_url}</p>
          <p className="block">Gravatar ID: {modalData.gravatar_id}</p>
          <p className="block">URL: {modalData.url}</p>
          <p className="block">HTML URL: {modalData.html_url}</p>
          <p className="block">FOLLOWERS URL: {modalData.followers_url}</p>
          <p className="block">FOLLOWING URL: {modalData.following_url}</p>
          <p className="block">GISTS: {modalData.gists_url}</p>
          <p className="block">STARRED: {modalData.starred_url}</p>
          <p className="block">SUBSCRIPTIONS: {modalData.subscriptions_url}</p>
          <p className="block">ORGANIZATIONS: {modalData.organizations_url}</p>
          <p className="block">REPOS: {modalData.repos_url}</p>
          <p className="block">EVENTS: {modalData.events_url}</p>
          <p className="block">
            RECEIVED EVENTS: {modalData.received_events_url}
          </p>
          <p className="block">TYPE: {modalData.type}</p>
          <p className="block">SITE ADMIN: {modalData.site_admin}</p>
        </section>
        <footer className="modal-card-foot">
          <button className="button" aria-label="close" onClick={props.close}>
            CLOSE
          </button>
        </footer>
      </div>
    </div>
  );
}
