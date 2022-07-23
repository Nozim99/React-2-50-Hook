import "./App.css";
import React, { useState } from "react";
import Main from "./components/Main";
import Alert from "./components/Alert";

export const AlertContext = React.createContext();

function App() {
  const [alert, setAlert] = useState(false);
  const toggleAlert = () => setAlert((prev) => !prev);

  return (
    <AlertContext.Provider value={alert}>
      <div className="container">
        <Alert />
        <Main toggle={toggleAlert} />
      </div>
    </AlertContext.Provider>
  );
}

export default App;
