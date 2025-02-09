function captureException(err: Error) {
  if (!err) return;
  console.error(err);
}

export function handleError(err: Error | string) {
  if (!(err instanceof Error)) return "";

  let text: string = err?.message || "";
  switch (err?.name) {
    case "ServerValidationError":
      text ||= "必須項目の入力漏れ、もしくは、入力間違いがあります。";
      return text;
    case "BadRequestError":
      if (!text)
        text = "通信データが正しくないため、受け付けられませんでした。";
      captureException(err);
      return text;
    case "ForbiddenError":
      text = "権限がないため表示/操作できません。";
      return text;
    case "NotFoundError":
      if (!text) text = "指定のデータは存在しません。";
      return text;
    case "UnauthorizedError":
      return "処理できませんでした。";
    case "RedirectError":
      return "";
    case "OptimisticLockError":
      text =
        "ブラウザの情報が古いため、更新ボタンを押してもう一度操作してください";
      return text;
    case "ClientValidationError":
      text ||= "必須項目の入力漏れ、もしくは、入力間違いがあります。";
      return text;
    case "DoubleSubmitError":
      return "";
    case "CancelProcessError":
      return "";
    case "NetworkError":
      text = "通信状況を確認した後、再実行してください。";
      return text;
    case "TimeoutError":
      text =
        "通信がタイムアウトしました。通信状況を確認した後、再実行してください。";
      captureException(err);
      return text;
    case "InternalServerError":
      if (!text) text = "サーバーにてシステムエラーが発生しました。";
      captureException(err);
      return text;
    case "ServiceUnavailableError":
      text = "一次的にシステムにアクセスできません。";
      captureException(err);
      return text;
    default:
      if (!text) text = "エラーが発生しました。";
      captureException(err);
      return text;
  }
}
