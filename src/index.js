import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { Main } from './main';

class App extends React.Component {

  render() {
    return(
      <div className="app">
        <Main></Main>
      </div>
    )
  }
}

// ========================================
// ====  USE STRICTMODE?     ======================
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
