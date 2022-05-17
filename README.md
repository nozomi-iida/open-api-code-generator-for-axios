# ゴール
1. openAPIから型を生成する
2. その型を利用してaxiosの通信部分の関数を生成する

進め方としてはaspida, openapi2aspidaを参考にしながら進めていく

## TODO
- [x] 完成イメージを表示できるようにする
- [x] camel_caseをsnakeCaseに変換する
- [x] axiosの通信部分を実装する
- [x] 型を生成する
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

// variablesは無くても良いかも
export type FetchRecruitments = {
  variables: {
    urlParams: FetchRecruitmentsUrlParams
    requestBody: FetchRecruitmentsRequestBody
    queryParams: FetchRecruitmentsQuery
  }
}
````

````typescript
import { AxiosStatic } from "axios";
import { FetchRecruitments, FetchRecruitmentsResponse } from "./fetchRecruitments";
import { PostRecruitments, PostRecruitmentsResponse } from "./postRecruitments";

type ApiProps = {
  fetch: AxiosStatic
};

export const api = ({ fetch }: ApiProps) => {
  return {
    async fetchRecruitments({variables}: FetchRecruitments): Promise<FetchRecruitmentsResponse[]> {
      const res = await fetch.get(`accounts/${variables["urlParams"][0]}/attendances`);
      return res.data;
    },
    async postRecruitment({variables}: PostRecruitments): Promise<PostRecruitmentsResponse> {
      const res = await fetch.post(`accounts/${variables["urlParams"][0]}/attendances`, variables.requestBody);
      return res.data;
    },
  }
}
````

## メモ
modelの型ファイルはいらないんじゃないかな？

schemaからrequestBody, responseBodyなどをProp[]に変換するところまではo2aと同じにして、そこから文字列にする過程をカスタマイズしていこうかな

## aspidaのコードリーディングメモ
### 目的
- 通信周りをどうやって実装しているのか
`buildTemplate`の`createTemplate`メソッドが通信部分の作成場面
思ったよりかはハードコーディングしてたけど、+は使ってない

- どうやってcustomAxiosを適用するのか 
apiにaxiosの引数を渡せるようにしてる これは自分のやりたい実装とは合ってないので返る必要がありそう
configファイルに渡せるようにするとか？

## 修正
- [ ] `api.account.get()`でAPIをコールするようにしたい
- [ ] configファイルをoption指定できるようにしたい
- [ ] `multiform-data`を送信するときのハンドリングが考えられてない