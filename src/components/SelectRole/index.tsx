import { useAppContext } from "../../context/AppContext";
import Button from "../Button";
import CustomRadio from "../CustomRadio";
import Title from "../Title";

const ROLES_LIST = [
  {
    id: "se",
    name: "Software Engineer",
  },
  {
    id: "qa",
    name: "Quality Assurance",
  },
  {
    id: "cs",
    name: "Customer Support",
  },
];

const SelectRole = () => {
  const { selectedRole, setSelectedRole, setCurrentScreen } = useAppContext();

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSelectedRole(e.target.value);

  const handleBtnClick = () => setCurrentScreen("SelectTemplate");

  return (
    <div className="flex flex-col items-center text-vanilla">
      <Title text="Which role are you hiring for?" />
      <div className="mt-10 w-full px-4">
        <form className="w-full flex flex-col items-center gap-5">
          {ROLES_LIST.map((role) => {
            return (
              <CustomRadio
                id={role.id}
                checked={selectedRole === role.id}
                name="role"
                value={role.id}
                onChange={handleRoleChange}
                label={role.name}
                key={role.id}
              />
            );
          })}
        </form>
      </div>
      <div className="mt-10 w-full px-4">
        <Button
          type="button"
          text="Next"
          disabled={selectedRole === null}
          onClick={handleBtnClick}
        />
      </div>
    </div>
  );
};

export default SelectRole;
