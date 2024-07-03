// import logo from './logo.svg';
// import './App.css';

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

// export default App;
import React from 'react';
import { rasikaData } from './rasika/data';
import { govindData } from './rasika/govind/data';
import { shamData } from './rasika/govind/sham/data';

function App() {
  return (
    <div>
      <h1>Nested Folders Data</h1>
      <div>
        <h2>{rasikaData.name}</h2>
        <p>{rasikaData.description}</p>
      </div>
      <div>
        <h2>{govindData.name}</h2>
        <p>{govindData.description}</p>
      </div>
      <div>
        <h2>{shamData.name}</h2>
        <p>{shamData.description}</p>
      </div>
    </div>
  );
}

export default App;

