import Routes from "./components/Routes";
import NavBarg from "./components/NavBarg";
import "./App.css";
import { useSelector } from "react-redux";
function App() {
  const classes = useSelector((state) => state.classes.classes);
  const sessions = useSelector((state) => state.sessions.sessions);

  return (
    <div>
      <>
        <NavBarg />
      </>
      <div>
        <Routes classes={classes} sessions={sessions} />
      </div>
    </div>
  );
}

export default App;
