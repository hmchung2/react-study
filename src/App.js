import logo from "./logo.svg";
import "./App.css";
import { main as useEffect_useState } from "./components/useEffect_useState/MainApp";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();

  const goHome = () => {
    console.log("go home");
    history.push("/");
  };

  return (
    <div className="App">
      <button onClick={() => goHome()}>Go Home</button>
    </div>
  );
}

export default App;
