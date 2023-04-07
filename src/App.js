// import logo from './logo.svg';
import './App.css';

// Compoment
function TestCompoment() {
    return (
        <button>Btn - By Compoment</button>
    );
}

// Props
function TestProps(props) {
    return (
        <button> { props.name } </button>
    );
}

export {TestCompoment, TestProps};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
