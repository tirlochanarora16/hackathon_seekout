interface IProps {
  text: string;
  className?: string;
}

const Title: React.FC<IProps> = ({ text, className }) => {
  return (
    <h2 className={`font-semibold text-3xl text-center mx-6 leading-10 ${className}`}>
      {text}
    </h2>
  );
};

export default Title;
