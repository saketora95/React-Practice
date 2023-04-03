# 概要
這是個人學習與練習 [React](https://zh-hant.reactjs.org/) 所使用的 Repo；由於仍在初學階段，可能包含諸多錯誤或疏漏。

# 初步安裝 & 專案建立
1. 安裝 [Node.js](https://nodejs.org/en)
2. 於終端機透過指令 `npm install -g create-react-app` 安裝 create-react-app
   - 執行時遭遇 `npm WARN deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.` 的話，表示 tar 的版本過期，可以透過 `npm i tar` 更新。
3. 於終端機透過指令 `create-react-app [專案名稱]` 建立專案
   - 專案名稱無法接受大寫的英文字母。

# 啟動專案
1. 進入專案資料夾
2. 於終端機透過指令 `npm start` 進入專案資料夾
3. 當終端機出現 `You can now view [專案名稱] in the browser.` 以及一些相關資訊時，專案便啟動完畢
   - 此時若關閉終端機，專案也會隨之關閉。

# 專案打包與部署
1. 進入專案資料夾
2. 於終端機透過指令 `npm run build` 進行打包
3. 執行結束後，專案資料夾下的 `build` 資料夾內，即包含了部屬所需要的文件

# 測試部屬
1. 於終端機透過指令 `npm install -g serve` 安裝 serve
   - 已經安裝 `serve` 的人自然可以略過此一步驟。
2. 進入專案資料夾
3. 於終端機透過指令 `serve -s build` 測試部屬

# 與他人協作
1. 避免將 `node_modules` 交付給他人
   - `node_modules` 資料夾中，儲存了下載來的套件，因此將整個資料夾交付給他人的話，相當冗贅。
2. 透過 `package-lock.json` 讓對方自行下載必要套件
   - 同一目錄下的 `package-lock.json` 檔案，當中記錄了所下載的套件，將這個檔案交付給他人，並請對方自行下載，會便利許多。
   - 於終端機透過指令 `npm i` 即可安裝所需套件。

# ES6 筆記
1. 以 `宣告型態 函式名稱 = (參數) => {}` 宣告函數的方式
```
var testFunction = (A, B) => {
    return A + B;
}
```
2. 以 `...arg` 宣告函數參數的話，呼叫函數時所使用的參數會變為 `Array`
   - 直接使用 `arg` 的話，會是 `Array` 的型態。
   - 使用 `...arg` 的話，會將參數展開。
```
var testFunction = (...arg) => {
    console.log(arg)
    console.log(...arg)
}
```
3. 非同步特性與 Promise
   - JavaScript 執行兩個或多個函數時，不會等待其他函數執行完畢，也就是說即便先執行 A 再執行 B，也可能會出現 B 函數比較早結束的狀況。
   - 使用 Promise 可以確保函數執行完後才會轉入特定的函數。
```
var testFunction = new Promise((resolve, reject) => {
    先行處理的項目 ...
    resolve(arg);
})

testFunction
.then((arg) => {
    testFunction 完成之後執行的項目 ...
})
.catch((err) => {
    testFunction 出現錯誤時執行的項目 ...
}))
```

# 參照資料
1. [【React.js入門 - 01】 前言 & 環境設置(上) - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10214945) 以及後續相同主題之文章
2. [reactjs - npm WARN deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap - Stack Overflow](https://stackoverflow.com/questions/68857411/npm-warn-deprecated-tar2-2-2-this-version-of-tar-is-no-longer-supported-and-w)

# 目前進度
https://ithelp.ithome.com.tw/articles/10215841

# 更新記錄
1. 2023-03-31 : 初步建立。
2. 2023-04-03 : 修正首頁顯示錯誤的問題。