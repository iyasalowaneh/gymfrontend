import { useState } from "react";
import { Link } from "react-router-dom";
//components
import SessionItem from "./SessionItem";

// Styling
import { List, Linked } from "../../styles";

import { useSelector } from "react-redux";

const SessionT = () => {
  const sessions = useSelector((state) => state.sessions.sessions);
  let sessionArrayT = sessions
    .filter((session) => session.isFull === true)
    .map((session) => <SessionItem session={session} key={session.id} />);
  return (
    <div>
      <Linked to="/sessions">All sessions</Linked>

      <Linked to="/availablesessions">Available Sessions </Linked>
      <Linked to="/fullsessions">Full Sessions </Linked>

      <List>{sessionArrayT}</List>
    </div>
  );
};

export default SessionT;
