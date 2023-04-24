import './App.css';
import React, { useEffect } from 'react';
import useBrowserSize from './useBrowserSize';
import LoginForm from './LoginForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

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

// useEffect Test
// componentDidMount    : 第一次渲染後唯一觸發的生命週期函數。
// componentWillUnmount : 元件被移除時會呼叫一次的唯一生命週期函數。
// componentDidUpdate   : 唯一也是最後在 DOM 真的被更新後執行的週期函數。

function BankAcc(props) {
    const [isGetData, setGetData] = React.useState(false);
    const [owner, setOwner] = React.useState('');
    const [isRightAgent, setRightAgent] = React.useState(false);

    // 模擬取得資料時的延遲
    // 等候 3 秒後，會設置帳戶持有者為「小美」
    function ajaxSimulator() {
        setTimeout(() => {
            setGetData(true);
            setOwner('小美');
        }, 3000);
    }

    // 檢查代理人是不是「小張」
    function checkAgent() {
        if (props.agent === '小張') {
            setRightAgent(true);
        } else {
            setRightAgent(false);
        }
    }

    useEffect(() => {
        // componentDidMount 和 componentDidUpdate
        // 第一次渲染後觸發 & DOM 被更新後執行
        document.getElementById("communicate").append("您好!");
        ajaxSimulator();

        return(()=>{
            // componentWillUnmount
            // 元件被移除時會呼叫
            document.getElementById("communicate").innerHTML = "";
        })
    }, []);

    useEffect(() => {
        // componentDidMount 和 componentDidUpdate
        checkAgent();

    }, [props.agent]);

    if (isRightAgent === false) {
        return(
            <div>不將資料提供給外部人士</div>
        );
    } else if (isGetData === false) {
        return(
            <div id="msg">資料讀取中 ...</div>
        );
    } else {
        return(
            <div id="msg">{ owner } 的帳戶餘額為 10,000 元。</div>
        );
    }
}

function UseEffectTest() {
    const [agent, setAgent] = React.useState('小張');
    const [allow, setAllow] = React.useState(true);

    function changeAgent() {
        if(agent === "小張") {
            setAgent('小王');
        }
        else{
            setAgent('小張');
        }
    }

    // 透過「中斷/辦理手續」的按鈕控制
    // 中斷後就會移除 BankAcc
    function createBank() {
        if(allow === true){
            return <BankAcc agent={ agent }/>;
        }
    }

    return(
        <div>
            { createBank() }
            <div id="communicate"></div>
            <button onClick={ changeAgent }>換一位辦理手續的客戶</button>
            <button onClick={ () => { setAllow(!allow) } }>
                { (allow === true) ? '中斷手續' : '辦理手續' }
            </button>
        </div>
    );
}

// Custom Hook Test
function CustomHookTest() {
    const device = useBrowserSize();

    if (device === 'PC') {
        return(<h1 style={{ color:"#FF0000" }}>PC</h1>);
    } else if (device === 'tablet') {
        return(<h1 style={{ color:"#00FF00" }}>Tablet</h1>);
    } else {
        return(<h1 style={{ color:"#0000FF" }}>Mobile</h1>);
    }
}

// Login Form App
function LoginFormApp() {
    return(<LoginForm />);
}

// Router
function RouterApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/:id?' element={ <FirstPage /> }/>
                <Route exact path='/second/:id?' element={ <SecondPage /> }/>
            </Routes>
        </BrowserRouter>
    );
}

export {
    TestComponent, TestProps, printMessage, TestFuncProps, TestChildren,
    TestClass, TestFuncComp, TestFetch, UseEffectTest, CustomHookTest,
    LoginFormApp, RouterApp,
};
