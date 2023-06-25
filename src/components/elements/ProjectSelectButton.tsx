import classNames from "classnames";

interface MyComponentProps {
  setSelected: React.Dispatch<React.SetStateAction<string | undefined>>;
  selected?: string;
  buttonTitle: string;
  amount: number;
}

const ProjectSelectButton: React.FC<MyComponentProps> = ({
  selected,
  setSelected,
  buttonTitle,
  amount,
}) => {
  const handleClick = () => {
    setSelected((prevState: string | undefined) => {
      return prevState || "test";
    });
  };
  return (
    <div
      className={classNames(
        selected === buttonTitle
          ? "bg-black text-white"
          : "bg-gray-200 text-black",
        "m-1 rounded-full  px-4 py-1 "
      )}
    >
      <button type="button" onClick={handleClick} value={buttonTitle}>
        {buttonTitle} ({amount})
      </button>
    </div>
  );
};

export default ProjectSelectButton;
