import { useState } from "react";
import { Link } from "react-router-dom";
//components
import SessionItem from "./SessionItem";
import SearchBar from "../SearchBar";

// Styling
import { List, Linked } from "../../styles";

import { useSelector } from "react-redux";

const SessionF = () => {
  const sessions = useSelector((state) => state.sessions.sessions);
  let sessionArrayF = sessions
    .filter((session) => session.isFull === false)
    .map((session) => <SessionItem session={session} key={session.id} />);

  return (
    <div>
      <Linked to="/sessions">All sessions</Linked>

      <Linked to="/availablesessions">Available Sessions </Linked>
      <Linked to="/fullsessions">Full Sessions </Linked>
      <List>{sessionArrayF}</List>
    </div>
  );
};

export default SessionF;
