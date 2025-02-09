"use server";

import { supabase } from "lib/supabase";
import { redirect } from "next/navigation";

type ContactErrors = {
  mail?: string;
  content?: string;
};

const validateContactForm = (mail: string, content: string): ContactErrors => {
  const errors: ContactErrors = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!mail) {
    errors.mail = "メールアドレスは必須です。";
  } else if (!emailRegex.test(mail)) {
    errors.mail = "正しいメールアドレス形式を入力してください。";
  }

  if (!content) {
    errors.content = "お問い合わせ内容は必須です。";
  }

  return errors;
};

export const contact = async (
  _: { errors?: ContactErrors },
  formData: FormData,
) => {
  const mail = formData.get("mail") as string;
  const content = formData.get("content") as string;

  const errors = validateContactForm(mail, content);

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const insertItem = {
    mail,
    content,
  };

  const { data: _data, error } = await supabase
    .from("contacts")
    .insert([insertItem]);

  if (error) {
    console.error("Error inserting contact: ", error);
    return { errors: { content: "お問い合わせの送信に失敗しました。" } };
  }

  redirect("/contact/thanks");
};
