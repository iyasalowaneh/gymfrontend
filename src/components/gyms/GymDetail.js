import { DetailWrapper } from "../../styles";
import { Image } from "../../styles";
import { Redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// import DeleteButton from "../buttons/DeleteButton";
import { Link } from "react-router-dom";
import ClassList from "../classes/ClassList";
const GymDetail = (props) => {
  const gyms = useSelector((state) => state.gyms.gyms);
  const classes = useSelector((state) => state.classes.classes);
  const user = useSelector((state) => state.users.users);

  console.log(classes);
  const gymSlug = useParams().gymSlug;
  const getIdBy = (classId) => classes.find((_class) => _class.id === classId);

  const gym = gyms.find((gym) => gym.slug === gymSlug);

  const gymClasses = gym.classes.map((class2) => getIdBy(class2.id));

  if (!gym) return <Redirect to="/" />;

  return (
    <DetailWrapper>
      {user && user.typeOfUser === "admin" && (
        <>
          <Link to={`/gyms/${gym.slug}/classes/new`}>Add Class</Link>
        </>
      )}
      {user && user.typeOfUser === "owner" && (
        <Link to={`/gyms/${gym.slug}/classes/new`}>Add Class</Link>
      )}

      <h1>{gym.name}</h1>
      <Image src={gym.image} alt={gym.name} />
      <ClassList classes={gymClasses} />
    </DetailWrapper>
  );
};

export default GymDetail;
