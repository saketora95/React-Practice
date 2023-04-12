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

// Fetch Test
function TestFetch() {
    const [repoName, setRepoName] = React.useState(null);

    function executeFetch() {
        fetch('https://api.github.com/users/saketora95/repos', {method: "GET"})
        .then(res => res.json())
        .then(data => {
            setRepoName(data[0]['name']);
        })
        .catch(e => {
            console.log(e);
        })
    }

    return(
        <React.Fragment>
            <p> { (repoName === null) ? 'No data.' : repoName } </p>
            <button onClick={ executeFetch }> 找找看 </button>
        </React.Fragment>
    );
}


export {
    TestComponent, TestProps, printMessage, TestFuncProps, TestChildren,
    TestClass, TestFuncComp, TestFetch,
};
