"use client";

import Button from "components/commons/Button";
import Typography from "components/commons/Typography";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const GameStartButton = () => {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        router.push("/game");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  return (
    <div className="flex flex-col gap-2 items-center">
      <Link href="/game" passHref>
        <Button className="px-20 py-5 text-3xl" variant="primary">
          ゲーム開始
        </Button>
      </Link>
      <Typography variant="caption">
        ※スペースかEnterキーを押すと開始します
      </Typography>
    </div>
  );
};

export default GameStartButton;
