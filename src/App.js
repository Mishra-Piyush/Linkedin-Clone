import React from "react";
import { useSelector } from "react-redux";
import Home from "./components/Home/Home";
import LoginPage from "./components/LoginPage/LoginPage";
import { userselect } from "./features/counter/userSlice";
function App() {
  const user = useSelector(userselect);
  return <div className="App">{!user ? <LoginPage /> : <Home />}</div>;
}

export default App;
