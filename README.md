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

# render() 筆記
使用 `render()` 函數，可以在 .js 檔中，整理 html 的內容後再渲染進實際頁面中，大致流程如下：
1. 將欲渲染內容放入 ReactDOM 之中
2. ReactDOM 整理欲渲染內容
3. 在指定的 div 上完成渲染

### 實行 render()
透過以下的段落可以執行 `render()` 函數，執行後就會在 id 為 `root` 的 div 置入內容：
```
const render_1 = ReactDOM.createRoot(document.getElementById('render_1'));

render_1.render(
    <React.StrictMode>
        <h1>Hello world! - From .render()</h1>
    </React.StrictMode>
);
```
### 舊版本編寫方式
在 `參照資料 [1]` 中，提及下方這種編寫方式，但已經無法在 React 18 以及後續版本使用。
```
ReactDOM.render(
    <h1> Hello world!</h1>,
    document.getElementById('root')
);
```

# JSX 筆記
1. JSX 具有可以將 html 語法作為參數傳遞的特性
    - 因此延續 `render() 筆記` 的內容，在使用 `render()` 時可以引入函數：
```
var testRender = () => {
    return (<p>Hello world! - By function</p>);
}

const render_2 = ReactDOM.createRoot(document.getElementById('render_2'));
render_2.render(
    testRender()
);
```
2. 將 html 語法作為參數時，只能傳遞一個元素
    - 因此，若要同時傳遞多個元素時，必須再使用一個容器將其包裝起來。
    - 下述例子包含了一個 `h1` 和一個 `p` 元素，如果不使用 `div` 將這兩個元素包裝起來，就會無法運作。
```
var testMultiRender = () => {
    return (
        <div>
            <p>Hello world! - By function (multiple element)</p>
            <p>This is 2nd element</p>
        </div>
    );
}

const render_3 = ReactDOM.createRoot(document.getElementById('render_3'));
render_3.render(
    testMultiRender()
);
```
3. 延續上述內容，在 React 16.2.0 版本中加入了 `Fragment`，可以避免掉上述額外增加了 `div` 的狀況
```
var testFragmentRender = () => {
    return (
        <React.Fragment>
            <p>Hello world! - By Fragment function (multiple element)</p>
            <p>This is 2nd element</p>
        </React.Fragment>
    );
}

const render_4 = ReactDOM.createRoot(document.getElementById('render_4'));
render_4.render(
    testFragmentRender()
);
```
4. 可以在 html 語法中，使用 `{ ... }` 來撰寫 JavaScript 表示式
    - 以 `{ testValue }` 引入變數。
    - 以 `{ (isTrue() === true) ? 'isTrue() said it is True' : 'isTrue() said it is False' }` 使用三元運算子。
    - 以 `<p style={ testStyle }> ... </p>` 引入樣式變數。
        - 樣式變數必須以 `駝峰式` 來撰寫，例如在 CSS 中的字體大小為 `font-size`，在 JSX 中則要更改為 `fontSize`；另外，無論賦予的變數是什麼，都必須給予 `字串` 的型態。
    - 以 `<p style={ {fontSize: '30px', color: 'green'} }>` 直接給予 style 的內容。
        - 首個 `{ ... }` 表示內部屬於 JavaScript 的語法，內部的 `{ ... }` 表示其物件型態。
5. 要賦予 `class` 的時候，必須要以 `className` 取代
```
var testValue = 777;
var isTrue = () => {
    return true
}
var testStyle = {fontSize: '25px', color: 'blue'};

var testJSRender = () => {
    return (
        <React.Fragment>
            <p>Hello world! - By function (JavaScript)</p>
            <p>Your lucky number is ... { testValue } !</p>
            <p>{ (isTrue() === true) ? 'isTrue() said it is True' : 'isTrue() said it is False' }</p>
            <p style={ testStyle }>Change style</p>
            <p style={ { fontSize: '30px', color: 'green' } }>Or change style like this</p>
            <p className='test-class-name'>Here have a class</p>
        </React.Fragment>
    );
}

const render_5 = ReactDOM.createRoot(document.getElementById('render_5'));
render_5.render(
    testJSRender()
);
```
除上述的例子外，程式中經常使用到的 `for` 同樣也可以使用：
```
var testForLoopElement = () => {
    var output_list = [];
    for (let i = 0 ; i < 5 ; i++) {
        output_list.push( <button>第 { i + 1 } 個</button> )
    }
    return output_list;
}

var testJSForRender = () => {
    return (
        <React.Fragment>
            <p>Hello world! - By function (JavaScript for-loop)</p>
            { testForLoopElement() }
        </React.Fragment>
    );
}

const render_6 = ReactDOM.createRoot(document.getElementById('render_6'));
render_6.render(
    testJSForRender()
);
```
6. 屬性省略指定的值時，會取得預設的 `true` 的布林值
    - 即 `<button value> ... </button>` 的 `value`，會因為省略了指定的值，而取得 `true` 的布林值。
    - 換句話說，`<button value={true} > ... </button>` 與前例是相同的。
7. 若要指定事件時，帶有部分差異（例如 `onclick` 必須更改為 `onClick`）
    - 與一般 JavaScript 的 `onclick` 不同，JSX 的 `onClick` 不帶括號：`onClick={ testClickCount }`。
    - 不帶括號也代表無法指定參數，函數僅會固定接收到一個 `event` 參數，但仍能透過這個參數取得一些資料。
    - 透過下述段落，可以創建一個按鈕並在點擊時觸發 `testClickCount` 函數，它會使按鈕上記錄的數字增長。
```
var testClickCount = (event) => {
    let click_time = parseInt(event.target.textContent) + 1
    event.target.textContent = click_time.toString()
}

var testOnClickRender = () => {
    return (
        <React.Fragment>
            <p>Hello world! - By function (JavaScript onClick)</p>
            <button id='click-counter' onClick={ testClickCount }>0</button>
        </React.Fragment>
    );
}

const render_7 = ReactDOM.createRoot(document.getElementById('render_7'));
render_7.render(
    testOnClickRender()
);
```

# React Component
Component 有元件的意思，當網頁中有多個項目是使用相同的元件，就可以提取出來使用 Component 來構成，這樣每次呼叫時只要呼叫同一個 Component 就能完成所需（注意：Component 名稱的首個字母必須為大寫）。
```
function TestComponent() {
    return (
        <button>Btn - By Component</button>
    );
}

const component_1 = ReactDOM.createRoot(document.getElementById('component_1'));
component_1.render(
    <div>
        <TestComponent/>
        <TestComponent/>
        <TestComponent/>
    </div>
);
```
上述這個段落就能使 component_1 這個元素底下冒出三個相同的按鈕。另外，因為能夠提取出來另外編寫，所以在檔案構成上也可以整理得更清晰。

### export
要分開到不同檔案的話，需要準備 `export`，例如我在 `App.js` 檔案中編寫以下內容：
```
// 基本的 React 仍要 import
import React from 'react';

// Component 的內容
function TestComponent() { ... }

// 編寫完成之後將其 export
export default TestComponent;
```

### import
完成 `export` 之後，便在 `index.js` 中進行 `import`：
```
// 將需要的 Component import
import TestComponent from './App';

// 與先前相同的 render 步驟
const component_1 = ReactDOM.createRoot(document.getElementById('component_1'));
component_1.render( ... );
```
### 複數項目 import 或 export
如果單個 `.js` 檔案中，有多個項目需要 `export`，需要將 `default` 移除，並以 `{ ... }` 將其打包起來（import 沒有 `default` 的問題，但同樣要打包）：
```
export {TestComponent, AnotherComponent};
import {TestComponent, AnotherComponent};
```

# React Props
在 html 中，元素可能會帶有 attribute，例如 `id` 與 `value` 等；在 React 中，將 Component 內的所有可以用來控制的參數整合為一個物件 `props`，並且在呼叫 Component 的時候，可以將 props 作為參數傳遞進去：
```
function TestProps(props) {
    return (
        <button> { props.name } </button>
    );
}

const component_2 = ReactDOM.createRoot(document.getElementById('component_2'));
component_2.render(
    <div>
        <TestProps name='Props 的 name' />
    </div>
);
```
上述這段會使得 `TestProps` 所回傳的 `button` 中的文字，等同 `render` 時給予的 `name`，也就是 `Props 的 name`，要留意的是：
1. props 內的資料當然也有型態
    - 如果想要傳遞整數或布林值等型態，需要再以 `{ ... }` 將其包覆起來。
    - 例如：`<TestProps value={123} />` 的 `value` 就會是整數型態。
2. props 帶有唯獨的特性
    - 因此無法使用 `this.props.someThing = someData;` 這種方式直接變更。

接著，props 也可以用來綁定函數：
```
// 觸發時更改 show-area 的文字
const printMessage = () => {
    document.getElementById('show-area').innerHTML = 'Nice click !';
}

// 透過 props 控制 onClick 與內部的文字
function TestFuncProps(props) {
    return (
        <button onClick={ props.handleClick }> { props.text } </button>
    );
}

// 與先前相同的 render 步驟，但追加了一個 div 供 printMessage 控制
const component_3 = ReactDOM.createRoot(document.getElementById('component_3'));
component_3.render(
    <div>
        <TestFuncProps text='Try to press here' handleClick={printMessage} />
        <div id="show-area"></div>
    </div>
);
```

# React Children
前面在使用 Component 的時候，都是以 `<SomeComponent />` 在呼叫，但也有這種像 html 標籤的用法：
```
<SomeComponent> ... </SomeComponent>
```
經由這種方式呼叫 Component 的時候，內部的資料就會被視為 `Children`，而 Children 屬於 `props` 的一員，所以能夠以下述方式處理：
```
// Children 屬於 props 的一員，因此以 props.children 呼叫
function TestChildren(props) {
    return (
        <button> { props.children } </button>
    );
}

// 與先前相同的 render 步驟
const component_4 = ReactDOM.createRoot(document.getElementById('component_4'));
component_4.render(
    <div>
        // 包覆在 Component 標籤內的資料會成為 Children
        <TestChildren> Text in index.js </TestChildren>
    </div>
);
```

# Class Component
在 React 16.8 之前，`Class Component` 是唯一可以追蹤狀態與生命週期的 Component；但在後來，`Function Component` 加入了 Hooks 而幾乎與 Class Component 具有相同的功效，而使得 Function Component 成為主流（比較完整的說明請見「`參照資料 [6] ~ [7]`」）。

透過以下段落，同樣能在 id 為 `class_1` 元素底下建置 `TestClass` 中包含的項目。
```
class TestClass extends React.Component {
    render() {
        return(
            <div>
                Hello world! - By Class
            </div>
        );
    }
}

const class_1 = ReactDOM.createRoot(document.getElementById('class_1'));
class_1.render(
    <TestClass />
);
```
### Constructor
若要在一個 `class` 中宣告變數，需要將其放置在 `constructor()` 之中、`super()` 之後，並在變數名稱之前加上 `this` 關鍵字：
```
class TestClass extends React.Component {
    constructor() {
        super();
        this.testValue = 100;
    }

    render() { ... }
}
```
### props
與 `Function Component` 相同，`Class Component` 也能引入 `props`，但在使用上需要再加上 `this` 關鍵字：
```
class TestClass extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <button onClick={ this.props.handleClick }> { this.props.name } </button>
        );
    }
}

var testName = 'Old Name';
const changeName = () => {
    testName = 'New Name';
    console.log('func. changeName - End.');
}

const class_1 = ReactDOM.createRoot(document.getElementById('class_1'));
class_1.render(
    <TestClass name={ testName } handleClick={ changeName } />
);
```
上述的段落雖然成功使用了 props，也能透過 `console.log` 確認到 `testName` 已經被變更，但由於 `Component` 僅有在 `props` 與 `state` 的值變更時才會更新，所以即使 `changeName` 正常執行，`TestClass` 的顯示內容也沒有變化。


# 參照資料
1. [【React.js入門 - 01】 前言 & 環境設置(上) - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10214942) 以及後續相同主題之文章
2. [reactjs - npm WARN deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap - Stack Overflow](https://stackoverflow.com/questions/68857411/npm-warn-deprecated-tar2-2-2-this-version-of-tar-is-no-longer-supported-and-w)
3. [javascript - Deprecation notice: ReactDOM.render is no longer supported in React 18 - Stack Overflow](https://stackoverflow.com/questions/71668256/deprecation-notice-reactdom-render-is-no-longer-supported-in-react-18)
4. [Fragments – React](https://zh-hant.reactjs.org/docs/fragments.html)
5. [React 的 export default和export明明是兩兄弟，但卻不一樣。 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10232421)
6. [React Class Components](https://www.w3schools.com/react/react_class.asp)
7. [[week 22] 再探 React：Function component vs Class component - HackMD](https://hackmd.io/@Heidi-Liu/note-fe302-class-component)

# 更新記錄
1. 2023-03-31 : 初步建立。
    - [【React.js入門 - 01】 前言 & 環境設置(上)](https://ithelp.ithome.com.tw/articles/10214942)
    - [【React.js入門 - 02】 環境設置(下) - 使用create-react-app](https://ithelp.ithome.com.tw/articles/10214945)
    - [【React.js入門 - 03】 開始之前應該要知道的DOM和ES6](https://ithelp.ithome.com.tw/articles/10215265)
2. 2023-04-03 : 修正首頁顯示錯誤的問題。
3. 2023-04-06 : 向後練習。
    - [【React.js入門 - 04】 HelloWorld! - 從ReactDOM開始](https://ithelp.ithome.com.tw/articles/10215459)
    - [【React.js入門 - 05】 JSX (上)](https://ithelp.ithome.com.tw/articles/10215841)
    - [【React.js入門 - 06】 JSX (下)](https://ithelp.ithome.com.tw/articles/10216468)
4. 2023-04-07 : 向後練習。
    - [【React.js入門 - 07】 function component](https://ithelp.ithome.com.tw/articles/10217021)
    - [【React.js入門 - 08】 用props綁定資料](https://ithelp.ithome.com.tw/articles/10217533)
    - [【React.js入門 - 09】 用props綁定函式](https://ithelp.ithome.com.tw/articles/10218096)
    - [【React.js入門 - 10】 夾在中間的props: children](https://ithelp.ithome.com.tw/articles/10218605)
5. 2023-04-11 : 向後練習。
    - [【React.js入門 - 11】 開始進入class component](https://ithelp.ithome.com.tw/articles/10219057)