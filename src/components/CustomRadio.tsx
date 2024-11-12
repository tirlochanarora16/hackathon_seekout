interface Iprops {
  name: string;
  value: string;
  checked: boolean;
  id: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomRadio: React.FC<Iprops> = ({
  name,
  value,
  checked,
  id,
  label,
  onChange,
}) => {
  return (
    <div className={`flex items-center outline w-full rounded-md xl:max-w-[30%]  xl:hover:outline-black ${checked ? 'bg-white text-black' : ''}`}>
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
        className="hidden"
      />
      <label htmlFor={id} className="w-full xl:cursor-pointer py-4 px-4">{label}</label>
    </div>
  );
};

export default CustomRadio;
