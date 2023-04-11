import './App.css';
import React from 'react';

// Component
function TestComponent() {
    return (
        <button>Btn - By Component</button>
    );
}

// Props
function TestProps(props) {
    return (
        <button> { props.name } </button>
    );
}

// Props with function
const printMessage = () => {
    document.getElementById('show-area').innerHTML = 'Nice click !';
}

function TestFuncProps(props) {
    return (
        <button onClick={ props.handleClick }> { props.text } </button>
    );
}

// Children
function TestChildren(props) {
    return (
        <button> { props.children } </button>
    );
}

// Class Component
class TestClass extends React.Component {
    // constructor() {
    //     super();
    //     this.testValue = 100;
    // }

    render() {
        return(
            <button onClick={ this.props.handleClick }> { this.props.name } </button>
        );
    }
}

export {
    TestComponent, TestProps, printMessage, TestFuncProps, TestChildren,
    TestClass,
};
