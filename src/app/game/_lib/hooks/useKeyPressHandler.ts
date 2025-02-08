import { useCallback, useEffect, useState } from "react";

export const useKeyPressHandler = (
  input: string,
  validSequences: string[],
  timer: number,
  onCorrectType: (latestInput: string, currentInputCombination: string) => void,
  onTypo: () => void,
) => {
  const [type, setType] = useState(0);
  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      setType((t) => t + 1);

      const latestInput = e.key.toUpperCase();
      const currentInputCombination = `${input}${latestInput}`;

      const startsWithCorrectRoman = validSequences.some((seq) =>
        seq.startsWith(currentInputCombination),
      );

      if (startsWithCorrectRoman) {
        onCorrectType(latestInput, currentInputCombination);
      } else {
        onTypo();
      }
    },
    [input, validSequences, onCorrectType, onTypo],
  );

  useEffect(() => {
    if (timer > 0) {
      window.addEventListener("keypress", handleKeyPress);
    } else {
      window.removeEventListener("keypress", handleKeyPress);
    }
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [type, timer, handleKeyPress]);
};
