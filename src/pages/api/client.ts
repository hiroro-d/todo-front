import axios from "axios";

// axios.create()を使って、axiosのインスタンスを作成
// axiosを使うとき、client.をつけると、baseURLの部分をurlにつけてくれる
export const client = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});
