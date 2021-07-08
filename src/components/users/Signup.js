import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useHistory } from "react-router-dom";
//actions
import { signup } from "../../store/actions/authActions";

const Signup = () => {
  const userSlug = useParams().userSlug;

  const users = useSelector((state) => state.users.users);
  const [user, SetUser] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    typeOfUser: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (event) => {
    SetUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user, history));
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
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">
          email
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Enter your email"
          name="email"
          onChange={handleChange}
          value={user.email}
        />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">
          first name
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Enter your First name"
          name="firstName"
          onChange={handleChange}
          value={user.firstName}
        />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">
          last name
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Enter your Last Name"
          name="lastName"
          onChange={handleChange}
          value={user.lastName}
        />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">
          type Of User
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Enter typeOfUser"
          name="typeOfUser"
          onChange={handleChange}
          value={user.typeOfUser}
        />
      </div>
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
