import About from "./components/About";
import Home from "./components/Home";
import "./App.css";
import { createContext, useState } from "react";

export const UserNameContext = createContext();
export const UpdateUserNameContext = createContext();

function App() {
  const [user, setUser] = useState("Manuel");

  const toggleUsername = () => {
    if(user === 'Manuel'){
      setUser('Francheska')
    }else {
      setUser('Manuel')
    }
  }

  return (
    <div className="App">
      <h1>UseContext Practice</h1>

      <UserNameContext.Provider value={user}>
        <UpdateUserNameContext.Provider value={toggleUsername}>
          <Home />
          <About />
        </UpdateUserNameContext.Provider>
      </UserNameContext.Provider>
    </div>
  );
}

export default App;
