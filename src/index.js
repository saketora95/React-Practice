import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {TestCompoment, TestProps} from './App';

// Normal render
const render_1 = ReactDOM.createRoot(document.getElementById('render_1'));
render_1.render(
    <React.StrictMode>
        <h1>Hello world! - From .render()</h1>
    </React.StrictMode>
);

// Render by function
var testRender = () => {
    return (<p>Hello world! - By function</p>);
}

const render_2 = ReactDOM.createRoot(document.getElementById('render_2'));
render_2.render(
    testRender()
);

// Render by function with multiple element
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

// Render by function with multiple element
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

// Render by function with JavaScript
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

// Render by function with JavaScript (for-loop)
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

// Render by function with JavaScript (onClick)
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

// Compoment
const compoment_1 = ReactDOM.createRoot(document.getElementById('compoment_1'));
compoment_1.render(
    <div>
        <TestCompoment/>
        <TestCompoment/>
        <TestCompoment/>
    </div>
);

// Props
const compoment_2 = ReactDOM.createRoot(document.getElementById('compoment_2'));
compoment_2.render(
    <div>
        <TestProps name='Props 的 name' />
    </div>
);

// Original Content -
// import App from './App';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//     <h1> Hello world!</h1>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();