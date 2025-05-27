# Manyo Typing

「Manyo Typing」は和歌山ゆかりの万葉集を題材とした日本語タイピングゲームです。Next.js をフロントエンドに、Supabase をバックエンドに利用しています。

## 開発の始め方

依存パッケージをインストールしたら、次のコマンドで開発サーバーを起動します。

```bash
yarn dev
```

主なコマンド一覧:

- `yarn build` – 本番ビルド
- `yarn start` – 本番サーバー起動
- `yarn lint` – ESLint 実行
- `yarn format` – Prettier と Lint の自動修正
- `yarn test:unit:vitest` – 単体テスト実行
- `yarn storybook` – Storybook 開発サーバー起動

## ディレクトリ構成と主要ファイル

- `/src/app/api/` – ランキングやスコア登録用 API
- `/src/app/game/_lib/hooks/` – ゲームロジックを担うカスタムフック
- `/src/components/`, `/src/app/*/_components/` – UI コンポーネント
- `/src/stores/` – Zustand によるグローバル状態管理
- `/src/lib/constants/songs.ts` – 万葉集の歌データ
- `/src/lib/supabase.ts` – Supabase クライアント設定

## データフロー

1. 歌データを定数として保持
2. ゲームコンポーネントがフック経由でランダムに歌を取得
3. 入力文字列をタイピング処理
4. スコアを計算して Supabase に登録
5. Supabase からランキングを取得して表示

## 今後学習すると良いポイント

- `src/app/game/_lib/hooks/` にある `useTyping` や `useTimer` などのフックを読むとゲームの挙動が理解できます。
- API 呼び出しや Supabase 連携は `src/lib/fetcher/` が参考になります。
- スタイルは Tailwind CSS を使用しているため `tailwind.config.ts` を参照してください。
- テストや Storybook を追加する際は `package.json` 内のスクリプトを確認すると良いでしょう。
