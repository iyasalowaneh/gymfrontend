import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useHistory } from "react-router-dom";
//actions
import { signin } from "../../store/actions/authActions";

const Signin = () => {
  const userSlug = useParams().userSlug;

  const users = useSelector((state) => state.users.users);
  const [user, SetUser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (event) => {
    SetUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(user, history));
    // history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      form
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">
          Username
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Enter your username"
          name="username"
          onChange={handleChange}
          value={user.username}
        />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">
          password
        </label>
        <input
          type="password"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="Enter your password"
          name="password"
          onChange={handleChange}
          value={user.password}
        />
      </div>
      <button type="submit">Signin</button>
    </form>
  );
};

export default Signin;
