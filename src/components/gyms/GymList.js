import { useState } from "react";
// import { Link } from "react-router-dom";
//components
import GymItem from "./GymItem";

// Styling
import { List } from "../../styles";

import { useSelector } from "react-redux";

const GymList = () => {
  // const [query, setQuery] = useState("");
  // .filter((gym) => gym.name.toUpperCase().includes(query.toUpperCase()))
  const gyms = useSelector((state) => state.gyms.gyms);

  let gymArray = gyms.map((gym) => <GymItem gym={gym} key={gym.id} />);
  return (
    <div>
      {/* <Link to="/gyms/form">Add a Gym</Link> */}
      {/* <SearchBar setQuery={setQuery} /> */}
      <List>{gymArray}</List>
    </div>
  );
};

export default GymList;
