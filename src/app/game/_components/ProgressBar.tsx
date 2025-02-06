type Props = {
  progress: number;
};

const ProgressBar = ({ progress }: Props) => {
  const normalBg = "bg-ap-transparentBlack-700 h-2.5 w-[80%]";
  const filledBg = `bg-ap-orange-700 h-2.5 w-[${progress}%]`;

  return (
    <div className={normalBg}>
      <div className={filledBg} />
    </div>
  );
};

export default ProgressBar;
