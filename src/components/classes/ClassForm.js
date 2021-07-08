import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { useHistory, useParams } from "react-router-dom";
//actions
import { createClass } from "../../store/actions/classAction";

const ClassForm = () => {
  const gyms = useSelector((state) => state.gyms.gyms);
  const classSlug = useParams().classSlug;
  const gymSlug = useParams().gymSlug;
  const classes = useSelector((state) => state.classes.classes);
  const [class2, setClass] = useState({
    gymId: gyms.find((gym) => gym.slug === gymSlug).id,

    name: "",
    type: "",
    price: 20,
    image: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const handleImage = (event) => {
    setClass({ ...class2, image: event.target.files[0] });
  };
  const handleChange = (event) => {
    setClass({ ...class2, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createClass(class2));
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
          placeholder="Enter your class name"
          name="name"
          onChange={handleChange}
          value={class2.name}
        />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">
          type{" "}
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Enter your class type"
          name="type"
          onChange={handleChange}
          value={class2.type}
        />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">
          price{" "}
        </label>
        <input
          type="number"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Enter your class price"
          name="price"
          onChange={handleChange}
          value={class2.price}
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
      <button type="submit">Add Class</button>
    </form>
  );
};

export default ClassForm;
