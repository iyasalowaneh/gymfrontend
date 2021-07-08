import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { useHistory, useParams } from "react-router-dom";
//actions
import { createGym } from "../../store/actions/gymActions";

const GymForm = () => {
  //const gyms = useSelector((state) => state.gyms.gyms);
  const [gym, setGym] = useState({
    name: "",
    image: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const handleImage = (event) => {
    setGym({ ...gym, image: event.target.files[0] });
  };
  const handleChange = (event) => {
    setGym({ ...gym, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createGym(gym));
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      form
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">
          name{" "}
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Enter your gym name"
          name="name"
          onChange={handleChange}
          value={gym.name}
        />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">
          Image
        </label>
        <input
          type="file"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="Enter your image"
          name="image"
          onChange={handleImage}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default GymForm;
