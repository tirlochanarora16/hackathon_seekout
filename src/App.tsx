import { useEffect, useState } from "react";
import SeekoutLogo from "./components/SeekoutLogo";
import SelectRole from "./components/SelectRole";
import SelectTemplate from "./components/SelectTemplate";
import { useAppContext } from "./context/AppContext";

function App() {
  const [userType, setUserType] = useState<
    "recruiter" | "candidate" | null
  >(null);

  const { currentScreen } = useAppContext();

  const getRecruiterScreens = () => {
    switch (currentScreen) {
      case "SelectRole":
        return <SelectRole />;
      case "SelectTemplate":
        return <SelectTemplate />;
      default:
        return null;
    }
  };

  const getCandidateScreens = () => {
    return null
  };

  useEffect(() => {
    const userType = document.location.search.split("=")[1].toLowerCase();
    setUserType(userType as "recruiter" | "candidate");
  }, []);

  const screens = userType === "recruiter" ? getRecruiterScreens : getCandidateScreens;

  return (
    <div>
      <SeekoutLogo />
      {userType && screens()}
    </div>
  );
}

export default App;
