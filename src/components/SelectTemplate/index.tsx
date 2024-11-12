import { useState } from "react";
import Modal from "../Modal";
import Title from "../Title";
import Input from "../Input";
import Button from "../Button";

const INPUT_FIELDS = [
  {
    id: "languages",
    label: "Languages",
    type: "text",
    placeholder: "Languages",
    required: true,
  },
  {
    id: "frameworks",
    label: "Frameworks",
    type: "text",
    placeholder: "Frameworks",
    required: true,
  },
  {
    id: "libraries",
    label: "Libraries",
    type: "text",
    placeholder: "Libraries",
    required: true,
  },
  {
    id: "tools",
    label: "Tools",
    type: "text",
    placeholder: "Tools",
    required: true,
  },
];

const SelectTemplate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>(
    INPUT_FIELDS.reduce((acc, input) => ({ ...acc, [input.id]: "" }), {})
  );

  const inputOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

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
        <Modal onClose={() => setIsModalOpen(false)}>
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
            <Button text="Create" type="submit" />
          </form>
        </Modal>
      ) : null}
    </div>
  );
};

export default SelectTemplate;
