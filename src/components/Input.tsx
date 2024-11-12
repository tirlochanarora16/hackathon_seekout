interface IProps {
  type: string;
  placeholder: string;
  value: string;
  id: string;
  className?: string;
  label?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IProps> = ({
  type,
  placeholder,
  value,
  id,
  className,
  label,
  onChange,
}) => {
  return (
    <div className="flex flex-col w-full gap-2">
      {label ? (
        <label htmlFor={id} className={`block mt-2 font-bold ${className}`}>
          {label}
        </label>
      ) : null}
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full p-4 rounded-md focus:outline-none border border-solid border-red`}
      />
    </div>
  );
};

export default Input;
