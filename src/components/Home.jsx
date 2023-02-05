import { useUserName, useUpdateUserNameContext } from "./hooks/UserContext";

const Home = () => {
  const userName = useUserName()
  const toggleNames = useUpdateUserNameContext()
  
  return (
    <div>
      <div>Hello {userName} from Home</div>
      <button onClick={toggleNames}>Toggle Name</button>
    </div>
  );
};

export default Home;
