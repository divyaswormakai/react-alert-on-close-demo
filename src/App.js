import { useEffect } from "react";
import AlertOnClose from "react-alert-on-close";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    AlertOnClose();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Alert On Close Demo.</h1>
        <p>Try closing or reloading this page.</p>
      </header>
    </div>
  );
}

export default App;
