import { useState } from "react";
import CustomRadio from "../CustomRadio";
import SeekoutLogo from "../SeekoutLogo";
import Button from "../Button";

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
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSelectedRole(e.target.value);

  const handleBtnClick = () => {};

  return (
    <div className="flex flex-col items-center text-vanilla">
      <SeekoutLogo />
      <h2 className="font-semibold text-3xl text-center mx-6 leading-10">
        Which role are you hiring for?
      </h2>
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
