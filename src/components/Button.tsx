import React from "react";

interface Iprops {
  text: string;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Iprops> = ({ text, type, disabled, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-indigo w-full p-4 rounded-md ${
        disabled ? "bg-gray text-black cursor-not-allowed" : "bg-indigo"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
