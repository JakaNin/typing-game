import Typography from "components/commons/Typography";
import useMessageStore from "stores/useMessageStore";

type Result = {
  score: number;
  keyPressPerSecond: number;
  accuracy: number;
  totalTypeCount: number;
  typoCount: number;
};

import Link from "next/link";
import { useState } from "react";

const RankingLink = () => {
  return (
    <div className="flex items-center">
      <Link href="/ranking">
        <Typography className="underline text-xl">ランキング</Typography>
      </Link>
      <Typography className="text-xl">を確認する</Typography>
    </div>
  );
};

export const useSubmit = (result: Result) => {
  const [playerName, setPlayerName] = useState("");
  const addMessage = useMessageStore.use.addMessage();
  const [submitted, setSubmitted] = useState(false);

  const body = JSON.stringify({
    name: playerName,
    score: result.score,
    accuracy: result.accuracy,
    key_press_per_second: result.keyPressPerSecond,
    correct_type_count: result.totalTypeCount - result.typoCount,
    typo_count: result.typoCount,
  });

  const handleSubmit = async () => {
    // ランキング登録処理

    if (!playerName) {
      addMessage("error", "名前を入力してください");
      return;
    }

    const response = await fetch("/api/scores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });

    if (response.ok) {
      addMessage("success", "スコア登録が成功しました！");
      addMessage("info", <RankingLink />);
      setSubmitted(true);
    } else {
      const errorData = await response.json();
      addMessage("error", `エラー: ${errorData.message}`);
    }
  };

  return {
    playerName,
    setPlayerName,
    handleSubmit,
    submitted,
  };
};
