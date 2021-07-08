import { useState } from "react";
import { Link } from "react-router-dom";
//components
import SessionItem from "./SessionItem";
import SearchBar from "../SearchBar";

// Styling
import { List, Linked } from "../../styles";

import { useSelector } from "react-redux";

const SessionList = ({ sessions }) => {
  // const sessions = useSelector((state) => state.sessions.sessions);

  let sessionArray = sessions.map((session) => (
    <SessionItem session={session} key={session.id} />
  ));
  return (
    <div>
      <Linked to="/sessions">All sessions</Linked>

      <Linked to="/availablesessions">Available Sessions </Linked>
      <Linked to="/fullsessions">Full Sessions </Linked>

      <List>{sessionArray}</List>
    </div>
  );
};

export default SessionList;
