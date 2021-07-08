import { DetailWrapper } from "../../styles";
import { Image } from "../../styles";
import { Redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// import DeleteButton from "../buttons/DeleteButton";
import { Link } from "react-router-dom";
import ClassList from "../classes/ClassList";
import SessionList from "../sessions/SessionList";
const ClasDetail = (props) => {
  const sessions = useSelector((state) => state.sessions.sessions);
  const classes = useSelector((state) => state.classes.classes);
  const user = useSelector((state) => state.users.users);

  console.log(classes);
  const classSlug = useParams().classSlug;
  const getIdBy = (sessionId) =>
    sessions.find((_session) => _session.id === sessionId);

  const class2 = classes.find((class2) => class2.slug === classSlug);

  const classSession = class2.sessions.map((session) => getIdBy(session.id));

  return (
    <DetailWrapper>
      {user && user.typeOfUser === "admin" && (
        <>
          <Link to={`/classes/${class2.slug}/sessions/new`}>Add Session</Link>
        </>
      )}
      {user && user.typeOfUser === "owner" && (
        <Link to={`/classes/${class2.slug}/sessions/new`}>Add Session</Link>
      )}

      <Image src={class2.image} alt={class2.name} />
      <h3>{class2.name}</h3>
      <h3>{class2.type}</h3>
      <h3>{class2.price}$</h3>
      <h3>{class2.availability === true ? "avaliable" : "Not Avaliable"}</h3>
      <SessionList sessions={classSession} />
    </DetailWrapper>
  );
};

export default ClasDetail;
