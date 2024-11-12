import SelectRole from "./components/SelectRole";
import { useAppContext } from "./context/AppContext";

function App() {
  const { currentScreen } = useAppContext();

  const getRenderedScreen = () => {
    switch (currentScreen) {
      case "SelectRole":
        return <SelectRole />;
      default:
        return null;
    }
  }
  return (
    <div className="">
      {getRenderedScreen()}
    </div>
  );
}

export default App;
