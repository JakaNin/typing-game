"use client";

import { useState } from "react";
import SeparateLine from "components/commons/SeparateLine";
import Typography from "components/commons/Typography";

const MobileWarningModal = () => {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ap-transparentBlack-600">
      <div className="flex flex-col gap-4 bg-white p-6 rounded-lg w-[90%] max-w-md">
        <Typography variant="title1" className="text-xl">
          万葉タイピング
        </Typography>
        <SeparateLine />
        <Typography variant="body2" className="text-md">
          このサイトはスマートフォンでは正しく動作しない可能性があります。
        </Typography>
        <Typography variant="body2" className="text-md">
          PC端末でのご利用をおすすめします。
        </Typography>
        <button
          onClick={() => setOpen(false)}
          className="self-end px-4 py-2 bg-ap-orange-700 text-white rounded"
        >
          閉じる
        </button>
      </div>
    </div>
  );
};

export default MobileWarningModal;
