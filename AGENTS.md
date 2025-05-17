# AGENTS Guidelines

このリポジトリで作業するエージェント向けの指示をまとめています。

## 基本方針

- 回答は日本語で行ってください。
- 変更を加えたら以下のコマンドを実行してからコミットしてください。
  - `yarn format` : Prettier・ESLint・TypeScript チェックをまとめて実行します。
  - `yarn test:unit:vitest` : 単体テストを実行します。
- コミットメッセージは英語で簡潔に記述してください。
- Pull Request の説明文は日本語で要点をまとめてください。

## その他

- 開発用サーバーは `yarn dev` で起動できます。
- Storybook などの補助ツールの詳細は `README.md` を参照してください。
