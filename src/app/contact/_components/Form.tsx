"use client";

import Button from "components/commons/Button";
import Typography from "components/commons/Typography";
import { useActionState } from "react";

import { contact } from "../_lib/actions/post";

const Form = () => {
  const styles = {
    form: "flex flex-col gap-4 w-full",
  };
  const initialState = {
    errors: {
      mail: "",
      content: "",
    },
  };
  const [result, dispatch, isPending] = useActionState(contact, initialState);
  return (
    <form className={styles.form} action={dispatch}>
      <div className="flex flex-col gap-2 w-full">
        <Typography variant="subtitle1">メールアドレス(必須)</Typography>
        {result.errors && (
          <Typography className="text-ap-red-700 break-words">
            {result.errors.mail}
          </Typography>
        )}
        <input
          type="text"
          name="mail"
          className="rounded-xl py-2 px-4 w-full"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <Typography variant="subtitle1">お問い合わせ内容(必須)</Typography>
        {result.errors && (
          <Typography className="text-ap-red-700 break-words">
            {result.errors.content}
          </Typography>
        )}
        <textarea
          name="content"
          rows={10}
          className="rounded-xl py-2 px-4 w-full"
        />
      </div>
      <Button
        className="self-end mt-2"
        variant="primary"
        type="submit"
        disabled={isPending}
      >
        {isPending ? "送信中..." : "送信する"}
      </Button>
    </form>
  );
};

export default Form;
