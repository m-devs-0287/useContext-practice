import { createContext, useContext, useState } from "react";

// creating context
export const UserNameContext = createContext();
export const UpdateUserNameContext = createContext();

// expose hooks
export function useUserName(){
  return useContext(UserNameContext)
}
export function useUpdateUserNameContext(){
  return useContext(UpdateUserNameContext)
}

//create a main provider function
export const UserProvider = ({ children }) => {
  
  //manage states
  const [user, setUser] = useState("Manuel");

  const toggleUsername = () => {
    if (user === "Manuel") {
      setUser("Francheska");
    } else {
      setUser("Manuel");
    }
  };

  //expose provider
  return (
    <UserNameContext.Provider value={user}>
      <UpdateUserNameContext.Provider value={toggleUsername}>
        {children}
      </UpdateUserNameContext.Provider>
    </UserNameContext.Provider>
  );
};
