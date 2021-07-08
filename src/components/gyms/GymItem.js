import { Image } from "../../styles";
import { Link } from "react-router-dom";
const ShopsItem = (props) => {
  const gym = props.gym;
  return (
    <div>
      <Link to={`/gyms/${gym.slug}`}>
        <Image src={gym.image} alt={gym.name} />
      </Link>
      <h1>{gym.name}</h1>
    </div>
  );
};

export default ShopsItem;
