# Personal Palette

![icon](images/personal_palette_icon_2.png)

## 概要

> **あなたを形づくる、感性と成長の軌跡を描くパレット。**

**Personal Palette（パーソナルパレット）** は、  
自分の人生に影響を与えたコンテンツや、日々の学び・成長を一つの場所に記録し、  
"自分という作品"を可視化するための自己形成プラットフォームです。

---

## 🌈 コンセプト

人は、これまで出会ってきた「作品」や「経験」、  
そして「学び」によって形づくられています。

Personal Paletteは、  
本・映画・音楽・体験・学習など、あなたの内面に色を与えてきたすべてを記録し、  
その軌跡を**ひとつのパレット**として見える形にします。

---

## ✨ 主な機能（MVP）

- 📝 **記録機能**：本・映画・学習・体験などを自由に登録
- 🏷️ **タグ・カテゴリ管理**：「感性」「成長」などの観点で分類
- 📖 **閲覧機能**：記録をタイムラインやパレットで一覧表示
- 📊 **自己可視化**：自分を構成する要素をグラフィカルに俯瞰

---

## 🛠️ 技術スタック

| レイヤー | 技術 |
|---|---|
| バックエンド | Go 1.24 / Gin / GORM |
| フロントエンド | Vite / React / TypeScript |
| データベース | PostgreSQL 16 |
| インフラ | Docker / Docker Compose |

---

## 📁 ディレクトリ構成

クリーンアーキテクチャに則ったレイヤー構成を採用しています。

```
.
├── backend/
│   ├── adapter/           # アダプター層：外部とのI/O変換
│   │   └── web/
│   │       ├── controller/  # HTTPリクエストの受付
│   │       ├── model/        # リクエスト・レスポンスの構造体
│   │       └── presenter/    # ユースケース出力をHTTPレスポンスへ変換
│   ├── app/               # アプリケーション起動・DI配線
│   ├── cmd/               # エントリーポイント
│   ├── config/            # 環境変数・設定の読み込み
│   ├── domain/            # ドメイン層（ビジネスルール）
│   │   ├── entity/          # エンティティ
│   │   └── repository/      # リポジトリインターフェース
│   ├── infra/             # インフラ層（DB・ミドルウェア）
│   │   ├── database/        # DB接続・マイグレーション
│   │   ├── repository/      # リポジトリ実装
│   │   │   └── dto/          # DBモデル ↔ ドメインモデル変換
│   │   └── web/             # ルーター・ミドルウェア
│   └── usecase/           # ユースケース層
│       ├── interactor/      # ユースケースロジック実装
│       ├── request/         # インプットモデル
│       └── response/        # アウトプットモデル
└── frontend/              # フロントエンド（Vite + React + TypeScript）
```

---

## 🚀 環境構築

### 前提条件

- Go 1.24 以上
- Node.js 18 以上
- Docker / Docker Compose

### 1. リポジトリのクローン

```bash
git clone https://github.com/Takazu8108180/personal-palette.git
cd personal-palette
```

### 2. 環境変数の設定

プロジェクトルートに `.env` ファイルを作成し、以下を設定してください。

```env
DATABASE=personal_palette
USERNAME=your_db_user
USERPASS=your_db_password
```

### 3. データベースの起動

```bash
docker compose up -d
```

### 4. バックエンドの起動

```bash
make run
```

その他のコマンド：

| コマンド | 内容 |
|---|---|
| `make build` | バイナリをビルド (`bin/app`) |
| `make test` | テストを実行 |
| `make tidy` | `go mod tidy` を実行 |
| `make clean` | ビルド成果物を削除 |

### 5. フロントエンドの起動

```bash
cd frontend
npm install
npm run dev
```

- `npm run test`：Vitest によるスモークテストを実行
