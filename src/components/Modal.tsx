import React from "react";

interface IProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<IProps> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 w-full mx-5 flex flex-col relative">
        <div
          className="text-4xl rotate-45 absolute top-0 right-2"
          onClick={onClose}
        >
          +
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
