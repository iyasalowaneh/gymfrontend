import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { useHistory, useParams } from "react-router-dom";
//actions
import { createSession } from "../../store/actions/sessionAction";

const SessionForm = () => {
  const classes = useSelector((state) => state.classes.classes);
  const classSlug = useParams().classSlug;
  const sessions = useSelector((state) => state.sessions.sessions);
  const [session, setSession] = useState({
    classId: classes.find((class2) => class2.slug === classSlug).id,

    date: "",
    time: "",
    coachName: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (event) => {
    setSession({ ...session, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createSession(session));
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
          type="date"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Enter your class name"
          name="date"
          onChange={handleChange}
          value={session.date}
        />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">
          time{" "}
        </label>
        <input
          type="time"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Time"
          name="time"
          onChange={handleChange}
          value={session.time}
        />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">
          coach name{" "}
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Enter your session coach name"
          name="coachName"
          onChange={handleChange}
          value={session.coachName}
        />
      </div>
      <button type="submit">Add Session</button>
    </form>
  );
};

export default SessionForm;
