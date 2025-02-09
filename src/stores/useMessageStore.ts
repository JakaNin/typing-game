import React from "react";
import { handleError } from "utils/errorHandler";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { createSelectors } from "./";

export type MessageType = "success" | "error" | "warning" | "info";
type MessageStore = {
  messages: { type: MessageType; text: string | React.ReactNode }[];
  addMessage: (
    type: MessageType,
    text: Error | string | React.ReactNode,
  ) => void;
  clearMessage: (index: number) => void;
};

const useMessageStoreBase = create<MessageStore>()(
  devtools(
    (set) => ({
      messages: [],
      addMessage: (type, text) => {
        let messageText: string | React.ReactNode;
        if (type === "error" && text instanceof Error) {
          messageText = handleError(text);
        } else {
          messageText = text as string | React.ReactNode;
        }
        set((state) => ({
          messages: [...state.messages, { type, text: messageText }],
        }));
      },
      clearMessage: (index) => {
        set((state) => ({
          messages: state.messages.filter((_, i) => i !== index),
        }));
      },
    }),
    { enabled: process.env.NODE_ENV === "development" },
  ),
);

const useMessageStore = createSelectors(useMessageStoreBase);

export default useMessageStore;
