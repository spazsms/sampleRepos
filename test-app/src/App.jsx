import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@emotion/react";
import Home from "./Home";
import { useEffect, useState } from "react";
import api from "./API/routes";

function App() {
  const [user, setUser] = useState([]);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/dessert");
        setUser(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    })();
  }, [trigger]);

  return (
    <>
      <Home user={user} onTrigger={setTrigger} trigger={trigger} />
    </>
  );
}

export default App;
