import { useContext } from "react";
import { UserNameContext, UpdateUserNameContext } from "../App";


const About = () => {
  const userName = useContext(UserNameContext)
  const toggleNames = useContext(UpdateUserNameContext)
  return (
    <div>
      <div>Hello {userName} from About</div>
      <button onClick={toggleNames}>Toggle Name</button>
    </div>
  );
};

export default About;
