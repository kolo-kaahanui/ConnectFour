import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

// Test
class NewSquare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:0
    }
  }

  render() {
    return (
      <button 
        className="newSquare" 
        onClick={function() {console.log("")}}
      >
        {this.props.value}
      </button>
    );
  }
}

class TopBar extends React.Component {
  renderNewSquare(i){
    return <NewSquare value={i} />
  }

  render(){
    return (
      <div className="first-row">
        {this.renderNewSquare(0)}
        {this.renderNewSquare(1)}
        {this.renderNewSquare(2)}
        {this.renderNewSquare(3)}
        {this.renderNewSquare(4)}
        {this.renderNewSquare(5)}
      </div>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(36).fill(null),
    };
  }
  renderSquare(i) {
    return <Square value={i}/>; // <Square value={i}/>
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>

        <TopBar />
        
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
        <div className="board-row">
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
          {this.renderSquare(16)}
          {this.renderSquare(17)}
        </div>
        <div className="board-row">
          {this.renderSquare(18)}
          {this.renderSquare(19)}
          {this.renderSquare(20)}
          {this.renderSquare(21)}
          {this.renderSquare(22)}
          {this.renderSquare(23)}
        </div>
        <div className="board-row">
          {this.renderSquare(24)}
          {this.renderSquare(25)}
          {this.renderSquare(26)}
          {this.renderSquare(27)}
          {this.renderSquare(28)}
          {this.renderSquare(29)}
        </div>
        <div className="board-row">
          {this.renderSquare(30)}
          {this.renderSquare(31)}
          {this.renderSquare(32)}
          {this.renderSquare(33)}
          {this.renderSquare(34)}
          {this.renderSquare(35)}
        </div>

      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares) {
  const lines = [
  // Horizontal
  [0,1,2,3], // top row
  [1,2,3,4],
  [2,3,4,5],
  [6,7,8,9], // second 
  [7,8,9,10],
  [8,9,10,11]
  [12,13,14,15], // third
  [13,14,15,16],
  [14,15,16,17],
  [18,19,20,21], // fourth
  [19,20,21,22],
  [20,21,22,23],
  [24,25,26,27], // fifth
  [25,26,27,28],
  [26,27,28,29],
  [30,31,32,33], // sixth
  [31,32,33,34],
  [32,33,34,35],
  //vertical
  [0,6,12,18], //left row
  [6,12,18,24],
  [12,18,24,30],
  [1,7,13,19], // second
  [7,13,19,25],
  [13,19,25,31],
  [2,8,14,20], // third
  [8,14,20,26],
  [14,20,26,32],
  [3,9,15,21], //fourth
  [9,15,21,27], 
  [15,21,27,33],
  [4,10,16,22], // fifth
  [10,16,22,28],
  [16,22,28,34],
  [5,11,17,23], // sixth
  [11,17,23,29],
  [17,23,29,35],
  // diagonal positive slope
  [30,25,20,15], // bottom
  [31,26,21,16],
  [32,27,22,17],
  [24,19,14,9], // second 
  [25,20,15,10],
  [26,21,16,11],
  [18,13,8,3], // third
  [19,14,9,4],
  [20,15,10,5],
  // diagonal negative slope
  [0,7,14,21], // top
  [1,8,15,22],
  [2,9,16,23],
  [6,13,20,27], // second
  [7,14,21,28],
  [8,15,22,29],
  [12,19,26,33], // third
  [13,20,27,34],
  [14,21,28,35],
  ]
}

/*
columnMiddleware = {0:[], 1:[], 2:[], 3:[], 4:[], 5:[]} // len of value
columnDict = {0:{0:30,1:24,2:18,3:12,4:6,5:0}, 
  {},
  {},
  {},
  {},
  {}}

*/