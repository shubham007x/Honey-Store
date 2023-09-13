import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Components/Navbar";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <AllRoutes />
    </div>
  );
}

export default App;
