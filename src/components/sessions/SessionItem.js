import { Image } from "../../styles";
import { Link } from "react-router-dom";
const SessionItem = (props) => {
  const session = props.session;
  return (
    <div>
      <h3>{session.date}</h3>
      <h3>{session.time}</h3>
      <h3>{session.coachName}</h3>
      <h3>{session.isFull === true ? "avaliable" : "Not Avaliable"}</h3>
      {session.isFull === true ? <button>book session</button> : ""}
    </div>
  );
};

export default SessionItem;
