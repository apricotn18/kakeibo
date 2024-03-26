# kakeibo
```
https://kakeibo-iota.vercel.app/
```
- `/`：トップページ
- `/history`：履歴リスト
- `/history?id=hogehoge`：履歴アイテム詳細（更新や削除ができる）

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
![スクリーンショット 2024-03-21 17 34 24](https://github.com/apricotn18/kakeibo/assets/56545404/ef25993a-1dd1-41ad-8286-8bef2db1e8c3)

## 工夫した点
- 今期勉強したReactの基礎を詰め込みました
  - React hooks
  - stateの更新（配列やオブジェクト）
  - リデューサとコンテクストを組み合わせる
  - ライフサイクルを意識
- `/history`：クエリ「?id=hogehoge」からidが一致するアイテムを取り出す
- `InputPayコンポーネント`：トップページ（`/`）と履歴アイテム詳細（`/history?id=hogehoge`）において、入力欄を少し異なる見た目で実装
- `Tabコンポーネント`, `Buttonコンポーネント`：Reactっぽく実装

## 解決できなかった問題
contextを更新して別ページに遷移すると、contextの引き継ぎがうまくできずエラーが出ます<br>
（firebaseとの連携がうまく行っていない）（Reactの仕様のようで、再読み込みすれば一旦直ります）<br>
Reduxを導入すれば解決しそうですが、まだ勉強しておらず締切に間に合わなかったので、今後の課題とさせてください<br>
→vercelのデータベースを使えば解決できるかも
