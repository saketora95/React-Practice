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
    constructor() {
        super();
        this.state = {name: 'Old Name', text: 'Text'};
        this.changeName = this.changeName.bind(this);
    }

    changeName() {
        this.setState(function(state, props) {
            return {
                name: 'New Name' + this.state.text
            };
        });

        // this.setState({name: 'New Name'});
        console.log('func. changeName - End.');
    }

    render() {
        return(
            <button onClick={ this.changeName }> { this.state.name } { this.state.text } </button>
        );
    }
}

// Func component
function TestFuncComp() {
    const [name, setName] = React.useState('Sake');

    return(
        <button onClick={ () => setName('New Sake') }> { name } </button>
    );
}

export {
    TestComponent, TestProps, printMessage, TestFuncProps, TestChildren,
    TestClass, TestFuncComp
};
