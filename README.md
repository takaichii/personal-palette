# personal-palette

## 概要
【個人開発】自己形成コンテンツ記録サービス

## ディレクトリ構成

本リポジトリのディレクトリ構造は以下の通りに構成する。

クリーンアーキテクチャに則ったレイヤー名、依存関係を取り入れる。

```yaml
project
├── adapter
├── app
├── cmd
├── domain               # ** ドメイン層 **
|    └── foo              # 任意のルートエンティティ
|       ├── entities     # エンティティ
|       ├── ids          # ID
|       ├── repositories # インターフェースリポジトリ
|       └── values       # 値オブジェクト
├── infra                # ** インフラストラクチャ層 **
   ├── database         # データベース
   ├── logger           # ロガー 
   ├── middlewares      # ミドルウェア
   ├── routers          # ルータ
   └── foo              # 任意のルートエンティティ
       ├── dtos         # gormモデルからドメインモデルへの変換
       ├── repositories # 実装リポジトリ
       └── seeders      # DBテストデータ

├── interfaces          # ** インターフェース層 **
   └── foo             # 任意のルートエンティティ
       └── controllers # コントローラ
     
└── usecase             # ** ユースケース層 **
    └── foo             # 任意のルートエンティティ
        ├── interactors # インターラクター
        ├── boundaries  # インプットバウンダリ 
        ├── requests    # リクエストモデル
        └── responses   # レスポンスモデル
```

## 環境構築

