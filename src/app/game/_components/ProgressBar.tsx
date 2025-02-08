type Props = {
  progress: number;
};

const ProgressBar = ({ progress }: Props) => {
  const normalBg = "bg-ap-transparentBlack-700 h-2.5 w-[80%]";
  const filledBg = `bg-ap-orange-700 h-2.5`;

  return (
    <div className={normalBg}>
      <div className={filledBg} style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ProgressBar;
