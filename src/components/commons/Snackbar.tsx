"use client";

import useMessageStore, { MessageType } from "stores/useMessageStore";

type SnackbarProps = {
  children: React.ReactNode | string;
  type: MessageType;
  index: number;
};

const height = 90;

const Snackbar = ({ children, type, index }: SnackbarProps) => {
  const clearMessage = useMessageStore.use.clearMessage();
  const conditions = [
    {
      type: "success",
      border: "border-b-ap-green-600",
    },
    {
      type: "error",
      border: "border-b-ap-red-600",
    },
    {
      type: "warning",
      border: "border-b-ap-orange-600",
    },
    {
      type: "info",
      border: "border-b-ap-gray-600",
    },
  ];
  return (
    <>
      <div
        style={{ top: `${index * height + height}px` }}
        className={`border border-gray-300 flex gap-2.5 fixed top-0 left-1/2 transform -translate-x-1/2 rounded-lg border-b-8 bg-white py-4 pl-3 pr-5 z-60 ${conditions.find((condition) => condition.type === type)?.border}`}
      >
        <div className="text-xl flex-grow pr-8">{children}</div>
        <button
          onClick={() => clearMessage(index)}
          className="absolute top-1 right-2 font-bold text-ap-gray-500 hover:text-ap-gray-600"
        >
          ×
        </button>
      </div>
    </>
  );
};

export default Snackbar;
