# ゴール
1. openAPIから型を生成する
2. その型を利用してaxiosの通信部分の関数を生成する

進め方としてはaspida, openapi2aspidaを参考にしながら進めていく

## TODO
- [ ] 完成イメージを表示できるようにする
- [ ] camel_caseをsnakeCaseに変換する
- [ ] axiosの通信部分を実装する
- [ ] 型を生成する
- [x] openAPIをparseする
- [x] 設定ファイルから引数を受け取れるようにする
- [x] コマンドに引数を渡せるようにする
- [x] node + typescriptの環境を作る
  参考: https://qiita.com/suzuki_sh/items/f3349efbfe1bdfc0c634 
- [x] openAPIを用意する
  PWのopenAPIを使用する

## 注意事項
- codegen.config.jsファイルをroot直下に置くこと
- openapiのバージョンは3.0のみ対応
- [Redocly/openapi-cli](https://github.com/Redocly/openapi-cli)などを利用してopenAPIをbundleして一つのファイルにまとめる必要がある

## 設定ファイル
codegen.config.jsファイルをroot以下に置くのは必須
````javascript
module.exports = [
  {
    input: "examples/Admin.v1.yaml",
    outputdir: "examples/generated"
  },
]
````

## コマンド
`openapi-codegen -i ファイル名 -o outputするファイル名`

## ディレクトリ構成
````
.
├── admin
│   └── fetchRecruitments.ts
````

## 完成イメージ

````typescript
export type FetchRecruitmentsUrlParams = {
  id: string
}

export type FetchRecruitmentsResponse = {
  recruitment: {
    id: string
    title: string
  }
}

export type FetchRecruitmentsRequestBody = {
  id: string
  title: string
}

export type FetchRecruitmentsQuery = {
  keyword: string
  title: string
}

type FetchRecruitments = {
  variables: {
    urlParams: FetchRecruitmentsUrlParams
    payload: FetchRecruitmentsPayload
    queryParams: FetchRecruitmentsQuery
  }
}

export const fetchRecruitments = async ({ variables }: FetchRecruitments): AxiosResponse => {}
````
## メモ
modelの型ファイルはいらないんじゃないかな？