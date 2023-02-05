import { useUserName, useUpdateUserNameContext } from "./hooks/UserContext";

const About = () => {
  const userName = useUserName()
  const toggleNames = useUpdateUserNameContext()

  return (
    <div>
      <div>Hello {userName} from About</div>
      <button onClick={toggleNames}>Toggle Name</button>

    </div>
  );
};

export default About;
