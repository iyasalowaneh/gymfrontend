import { Redirect, Route, Switch } from "react-router";
//Home components
import Home from "./Home";
//ProductList components
import GymList from "./gyms/GymList";
import Signup from "./users/Signup";
import Signin from "./users/Signin";
import GymForm from "./gyms/GymForm";
import ClassForm from "./classes/ClassForm";
import ClassList from "./classes/ClassList";
import { useSelector } from "react-redux";
import GymDetail from "./gyms/GymDetail";
import ClassF from "./classes/ClassF";
import ClassT from "./classes/ClassT";
import ClassDetail from "./classes/ClassDetail";
import SessionList from "./sessions/SessionList";
import SessionT from "./sessions/SessionT";
import SessionF from "./sessions/SessionF";
import SessionForm from "./sessions/SessionForm";

function Routes(props) {
  const user = useSelector((state) => state.users.users);

  return (
    <Switch>
      <Route path="/gyms/:gymSlug/classes/new">
        <ClassForm />
      </Route>
      <Route path="/classes/:classSlug/sessions/new">
        <SessionForm />
      </Route>
      <Route path="/classes/:classSlug">
        <ClassDetail />
      </Route>

      <Route exact path="/gyms/:gymSlug">
        <GymDetail />
      </Route>
      <Route path="/availablesessions">
        <SessionT />
      </Route>

      <Route path="/availableclasses">
        <ClassT />
      </Route>
      <Route path="/fullsessions">
        <SessionF />
      </Route>
      <Route path="/fullclasses">
        <ClassF />
      </Route>
      <Route path="/sessions">
        <SessionList sessions={props.sessions} />
      </Route>
      <Route path="/classes">
        <ClassList classes={props.classes} />
      </Route>

      <Route path="/gymform">
        <GymForm />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/gyms">
        <GymList />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}
export default Routes;
