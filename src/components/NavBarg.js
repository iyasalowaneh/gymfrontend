import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Logo, NavProducts, H1 } from "../styles";
import { signout } from "../store/actions/authActions";

const NavBarg = () => {
  const user = useSelector((state) => state.users.users);
  console.log(user);
  const dispatch = useDispatch();
  console.log(user);

  return (
    <div className="topnav">
      <Link to="/">Home</Link>
      <NavProducts to="/gyms">Gyms</NavProducts>
      <NavProducts to="/classes"> Classes </NavProducts>
      <NavProducts to="/signin">Signin</NavProducts>

      {user && (
        <>
          <H1>
            Hello {user.firstName} {user.lastName} {user.typeOfUser}
          </H1>
          <H1> User: {user.typeOfUser}</H1>
          <button onClick={() => dispatch(signout())}>signout</button>
        </>
      )}
      {user && user.typeOfUser === "admin" && (
        <>
          <NavProducts to="/signup">Registration</NavProducts>
          <NavProducts to="/gymform"> create gym </NavProducts>
          <NavProducts to="/classform"> create classes </NavProducts>
        </>
      )}
      {user && user.typeOfUser === "owner" && (
        <NavProducts to="/classform"> create classes </NavProducts>
      )}
    </div>
  );
};
export default NavBarg;
