# kakeibo
```
https://kakeibo-iota.vercel.app/
```
- `/`：　トップページ
- `/history`：　履歴リスト
- `/history?id=hogehoge`：　履歴アイテム詳細（更新や削除）

### 工夫した点
- 今期勉強したReactの基礎を詰め込みました
  - React hooks
  - stateの更新（配列やオブジェクト）
  - リデューサとコンテクストを組み合わせる
  - ライフサイクルを意識
- /historyページ
  クエリ「?id=hogehoge」からidが一致するアイテムを取り出す
- InputPayコンポーネント
  「/」と「/history?id=hogehoge」において、少し異なる見た目を同じコンポーネントで実装
- Tabコンポーネント、Buttonコンポーネント
  Reactっぽく
  


#### 解決できなかった問題
contextがページをまたがる場合に状態の引き継ぎできないようですが、うまく解決できませんでした
なのでfirebeseデータとの連携がうまくできていません（更新すれば直ります）
Redux導入するすれば直りそうですが、まだ勉強しておらず間に合わなかったので来期対応にさせてください

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
