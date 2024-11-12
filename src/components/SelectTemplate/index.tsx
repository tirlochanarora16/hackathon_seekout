import { useState } from "react";
import Modal from "../Modal";
import Title from "../Title";

const SelectTemplate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mx-4">
      {/* if we have existing templated available */}
      <Title
        text="Create a new Deck"
        className="text-vanilla text-[28px]"
      />
      <button
        type="button"
        className="mt-10 w-[200px] h-[200px] text-[84px] flex items-center justify-center mx-auto rounded-md bg-vanilla bg-opacity-50 xl:hover:cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        +
      </button>
      {isModalOpen ? (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
          <p className="text-gray-700 mb-6">This is the modal content.</p>
        </Modal>
      ) : null}
    </div>
  );
};

export default SelectTemplate;
