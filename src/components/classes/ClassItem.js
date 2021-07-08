import { Image } from "../../styles";
import { Link } from "react-router-dom";
const ClassItem = (props) => {
  const class2 = props.class2;
  return (
    <div>
      <Link to={`/classes/${class2.slug}`}>
        <Image src={class2.image} alt={class2.name} />
      </Link>
      <h1>{class2.name}</h1>
      <p>{class2.type}</p>
    </div>
  );
};

export default ClassItem;
