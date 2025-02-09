"use client";

import Snackbar from "./Snackbar";
import { useEffect } from "react";
import useMessageStore, { MessageType } from "stores/useMessageStore";

type Props = {
  adds?: string;
  type?: MessageType;
};

const MessagePopup = ({ adds, type }: Props) => {
  const addMessage = useMessageStore((state) => state.addMessage);
  const messages = useMessageStore((state) => state.messages);
  const clearMessage = useMessageStore((state) => state.clearMessage);

  useEffect(() => {
    if (adds && type) {
      addMessage(type, adds);
    }
  }, [adds, type, addMessage]);

  useEffect(() => {
    const timers = messages.map((_, index) =>
      setTimeout(() => {
        clearMessage(index);
      }, 4000),
    );

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [messages, clearMessage]);

  return (
    <>
      {messages.map((message, index) => (
        <Snackbar key={index} index={index} type={message.type}>
          {message.text}
        </Snackbar>
      ))}
    </>
  );
};

export default MessagePopup;
