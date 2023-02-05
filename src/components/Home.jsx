import { useContext } from "react";
import { UserNameContext, UpdateUserNameContext } from '../App'

const Home = () => {
  const userName = useContext(UserNameContext)
  const toggleNames = useContext(UpdateUserNameContext)
  
  return (
    <div>
      <div>Hello {userName} from Home</div>
      <button onClick={toggleNames}>Toggle Name</button>
    </div>
  );
};

export default Home;
