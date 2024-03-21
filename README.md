# kakeibo
```
https://kakeibo-iota.vercel.app/
```
- `/`：トップページ
- `/history`：履歴リスト
- `/history?id=hogehoge`：履歴アイテム詳細（更新や削除）

## Getting Started
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## ページ構成（省略あり）
.
├── pages
│   ├── components
│   │   ├──  Button
│   │   ├──  Header
│   │   ├──  History
│   │   ├──  InputPay（入力）
│   │   ├──  Message（デモでは表示されません）
│   │   ├──  PricesContext
│   │   ├──  Summary（トップページに表示するまとめ）
│   │   ├──  Tab
│   │   └──  UserContext
│   ├── history.tsx
│   └── index.tsx
├── public
└── src
    ├── css
    ├── firebase
    └── type

## 工夫した点
- 今期勉強したReactの基礎を詰め込みました
  - React hooks
  - stateの更新（配列やオブジェクト）
  - リデューサとコンテクストを組み合わせる
  - ライフサイクルを意識
- `/history`：クエリ「?id=hogehoge」からidが一致するアイテムを取り出す
- `InputPayコンポーネント`：`/`と`/history?id=hogehoge`において、入力欄を少し異なる見た目で実装
- `Tabコンポーネント`, `Buttonコンポーネント`：Reactっぽく実装

## 解決できなかった問題
ページをまたがる場合、更新したstateの引き継ぎができないようで解決できませんでした
（Redux導入すれば直りそうですが、まだ勉強しておらず間に合わなかったので来期やらせてください）
なので、firebeseデータとの連携がうまくできていません（更新すれば直ります）
