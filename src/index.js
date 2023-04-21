import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
    TestComponent, TestProps, printMessage, TestFuncProps, TestChildren,
    TestClass, TestFuncComp, TestFetch, UseEffectTest,
} from './App';

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

// Component
const component_1 = ReactDOM.createRoot(document.getElementById('component_1'));
component_1.render(
    <div>
        <TestComponent/>
        <TestComponent/>
        <TestComponent/>
    </div>
);

// Props
const component_2 = ReactDOM.createRoot(document.getElementById('component_2'));
component_2.render(
    <div>
        <TestProps name='Props 的 name' />
    </div>
);

// Props with function
const component_3 = ReactDOM.createRoot(document.getElementById('component_3'));
component_3.render(
    <div>
        <TestFuncProps text='Try to press here' handleClick={printMessage} />
        <div id="show-area"></div>
    </div>
);

// Children
const component_4 = ReactDOM.createRoot(document.getElementById('component_4'));
component_4.render(
    <div>
        <TestChildren> Text in index.js </TestChildren>
    </div>
);

// Class Component
const class_1 = ReactDOM.createRoot(document.getElementById('class_1'));
class_1.render(
    <TestClass />
);

// Function Component
const func_1 = ReactDOM.createRoot(document.getElementById('func_1'));
func_1.render(
    <TestFuncComp />
);

// Fetch
const fetch_test = ReactDOM.createRoot(document.getElementById('fetch_test'));
fetch_test.render(
    <TestFetch />
);

// Fetch
const use_effect_test = ReactDOM.createRoot(document.getElementById('use_effect_test'));
use_effect_test.render(
    <UseEffectTest />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();