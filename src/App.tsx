import SeekoutLogo from "./components/SeekoutLogo";
import SelectRole from "./components/SelectRole";
import SelectTemplate from "./components/SelectTemplate";
import { useAppContext } from "./context/AppContext";

function App() {
  const { currentScreen } = useAppContext();

  const getRenderedScreen = () => {
    switch (currentScreen) {
      case "SelectRole":
        return <SelectRole />;
      case "SelectTemplate":
        return <SelectTemplate />
      default:
        return null;
    }
  }
  return (
    <div>
      <SeekoutLogo />
      {getRenderedScreen()}
    </div>
  );
}

export default App;
