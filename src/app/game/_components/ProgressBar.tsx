type Props = {
  progress: number;
};

const ProgressBar = ({ progress }: Props) => {
  const normalBg = "bg-ap-transparentBlack-700 h-2.5 w-[80%] rounded-full overflow-hidden";
  const filledBg = `bg-gradient-to-r from-ap-orange-700 to-ap-orange-500 h-2.5 rounded-full`;

  return (
    <div className={normalBg}>
      <div className={filledBg} style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ProgressBar;
