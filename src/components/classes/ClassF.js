import { useState } from "react";
import { Link } from "react-router-dom";
//components
import ClassItem from "./ClassItem";
import SearchBar from "../SearchBar";

// Styling
import { List, Linked } from "../../styles";

import { useSelector } from "react-redux";

const ClassF = () => {
  const [query, setQuery] = useState("");

  const classes = useSelector((state) => state.classes.classes);
  let classArrayF = classes
    .filter((class2) => class2.availability === false)
    .filter((class2) => class2.name.toUpperCase().includes(query.toUpperCase()))
    .map((class2) => <ClassItem class2={class2} key={class2.id} />);
  return (
    <div>
      <Linked to="/classes">All classes</Linked>

      <Linked to="/availableclasses">Available Classes </Linked>
      <Linked to="/fullclasses">Full Classes </Linked>
      <SearchBar setQuery={setQuery} />

      <List>{classArrayF}</List>
    </div>
  );
};

export default ClassF;
