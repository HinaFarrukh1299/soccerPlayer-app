
/*import React from 'react';
import axios from 'axios';
import './App.css';
import PlayerForm from './player/playerForm.jsx';
import PlayerList from './player/playerList.jsx';
import PlayerSingle from './player/playerSingle.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      currentPlayer: null, // Initialize as null
    };
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
  }

  componentDidMount() {
    const url = 'http://localhost:4000/getPlayer';
    axios.get(url)
      .then((response) => {
        this.setState({ players: response.data });
      })
      .catch((error) => {
        console.error('Error fetching players:', error);
        // Optionally set an error state here
      });
  }
  

  

  updateCurrentPlayer(item) {
    this.setState({ currentPlayer: item });
  }

  render() {
    const { players, currentPlayer } = this.state;
    

    return ( 
      <div className='container-fluid'>
        <div className='row'>
        
          <nav>
            <div className='nav-wrapper blue darken-1'>
              <a href='/' className='col s12 center brand-logo'>Soccer Management</a>

            </div>
          </nav>
        </div>
        
        <div className='row'>
        <img src="/soccer.jpg" alt="soccer image" className='col s8'/>
          <div className='row'>
            <PlayerList 
              players={players} 
              updateCurrentPlayer={this.updateCurrentPlayer} 
            />
          </div>
          <div className='col s4'>
            {currentPlayer ? (
              <PlayerSingle player={currentPlayer} />
            ) : (
              <p>Select a player to view details.</p>
            )}
          </div>
          
        </div> 
        
        <div className='row'>
          <div className='col s12'>
            <PlayerForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App; original linkedin course code*/

/* chat gpt updated code to auto refresh the player 
list and show the added players automatically
without manually refreshing the page*/ 
import React from 'react';
import axios from 'axios';
import './App.css';
import PlayerForm from './player/playerForm.jsx';
import PlayerList from './player/playerList.jsx';
import PlayerSingle from './player/playerSingle.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      currentPlayer: null,
    };
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);

    this.refreshInterval = null; // <---- store the interval
  }

  componentDidMount() {
    this.loadPlayers();

    // 🔄 Auto-refresh every 5 seconds
    this.refreshInterval = setInterval(() => {
      this.loadPlayers();
    }, 5000);
  }

  componentWillUnmount() {
    // 🧹 Clean up when component unmounts
    clearInterval(this.refreshInterval);
  }

  loadPlayers = () => {
    const url = 'http://localhost:4000/getPlayer';

    axios.get(url)
      .then((response) => {
        this.setState({ players: response.data });
      })
      .catch((error) => {
        console.error('Error fetching players:', error);
      });
  };

  updateCurrentPlayer(item) {
    this.setState({ currentPlayer: item });
  }

  render() {
    const { players, currentPlayer } = this.state;

    return ( 
      <div className='container-fluid'>
        <div className='row'>
          <nav>
            <div className='nav-wrapper blue darken-1'>
              <a href='/' className='col s12 center brand-logo'>Soccer Management</a>
            </div>
          </nav>
        </div>
        
        <div className='row'>
          <img src="/soccer.jpg" alt="soccer image" className='col s8'/>

          <div className='row'>
            <PlayerList 
              players={players} 
              updateCurrentPlayer={this.updateCurrentPlayer} 
            />
          </div>

          <div className='col s4'>
            {currentPlayer ? (
              <PlayerSingle player={currentPlayer} />
            ) : (
              <p>Select a player to view details.</p>
            )}
          </div>
        </div> 
        
        <div className='row'>
          <div className='col s12'>
            <PlayerForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
