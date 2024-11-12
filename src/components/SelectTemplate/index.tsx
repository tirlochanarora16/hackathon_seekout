import { useEffect, useState } from "react";
import Modal from "../Modal";
import Title from "../Title";
import Input from "../Input";
import Button from "../Button";

const INPUT_FIELDS = [
  {
    id: "companyName",
    label: "Company Name",
    type: "text",
    placeholder: "Company Name",
    required: true,
  },
  {
    id: "roleId",
    label: "Role Id",
    type: "number",
    placeholder: "Role Id",
    required: true,
  },
  {
    id: "companyDetails",
    label: "Company Details",
    type: "text",
    placeholder: "Company Details",
    required: false,
  },
  {
    id: "fundingStatus",
    label: "Funding Status",
    type: "text",
    placeholder: "Funding Status",
    required: false,
  },
  {
    id: "teamDetails",
    label: "Team Details",
    type: "text",
    placeholder: "Team Details",
    required: false,
  },
];

const requiredFields = INPUT_FIELDS.filter((input) => input.required);

const initalState = INPUT_FIELDS.reduce(
  (acc, input) => ({ ...acc, [input.id]: "" }),
  {}
);

const SelectTemplate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [btnDisable, setBtnDisable] = useState(true);
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>(
    initalState
  );

  const inputOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      (e.target.id === "roleId" && isNaN(Number(e.target.value)))
    ) {
      return;
    }

    setInputValues((prev) => ({
      ...prev,
      [e.target.id]: e.target.value.trim(),
    }));
  };

  useEffect(() => {
    const values = Object.entries(inputValues).map(item => item[1].trim() !== "" ? item[0] : null);

    console.log(values);

    const allRequiredFields = requiredFields.every((field) =>
      values.includes(field.id)
    );

    if (allRequiredFields) {
        setBtnDisable(false);
    } else {
        setBtnDisable(true);
    }

  }, [inputValues]);

  return (
    <div className="mx-4">
      {/* if we have existing templated available */}
      <Title text="Create a new Deck" className="text-vanilla text-[28px]" />
      <button
        type="button"
        className="mt-10 w-[200px] h-[200px] text-[84px] flex items-center justify-center mx-auto rounded-md bg-vanilla bg-opacity-50 xl:hover:cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        +
      </button>
      {isModalOpen ? (
        <Modal
          onClose={() => {
            setIsModalOpen(false);
            setInputValues(initalState);
          }}
        >
          <form className="flex flex-col gap-5">
            {INPUT_FIELDS.map((input) => {
              return (
                <Input
                  key={input.id}
                  onChange={inputOnChangeHandler}
                  value={inputValues[input.id]}
                  {...input}
                />
              );
            })}
            <Button text="Create" type="submit" disabled={btnDisable} />
          </form>
        </Modal>
      ) : null}
    </div>
  );
};

export default SelectTemplate;
