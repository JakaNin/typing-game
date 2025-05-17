"use server";

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

  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("Slack webhook URL is not defined.");
    return { errors: { content: "お問い合わせの送信に失敗しました。" } };
  }

  const payload = {
    text: `\u3010Manyo Typing お問い合わせ\u3011\nメールアドレス: ${mail}\n内容:\n${content}`,
  };

  const slackResponse = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!slackResponse.ok) {
    console.error("Error posting to Slack:", await slackResponse.text());
    return { errors: { content: "お問い合わせの送信に失敗しました。" } };
  }

  redirect("/contact/thanks");
};
