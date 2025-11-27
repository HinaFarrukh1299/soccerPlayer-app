//import React from 'react'
//import { useState } from 'react';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
/*import axios from 'axios';
import './App.css'
import PlayerForm from './player/playerForm';
import PlayerList from './player/playerList';
import PlayerSingle from './player/playerSingle';
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      players:[],
      currentPlayer: {}
    }
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
  }
  componentDidMount() {
    const url = 'http://localhost:4000/players';
    axios.get(url).then((Response) => {

      this.setState({players: Response.data

      })
    })
    .catch((error) => console.log(error))
  }

   updateCurrentPlayer(item){

    this.setState ({currentPlayer:item})

   }

  
  render() {
   
          return ( 
            <div className='container-fluid'>
              <div className='row'>
                <nav>
                <div className='nav-wrapper blue darken-1'>
                  <a href='/' className='brand-logo'> Soccer Managment</a>
                </div>
                </nav>
                </div>
              
              <div className='row'>
                <div className='col s3'><PlayerList players = {this.state.players}
                updateCurrentPlayer={this.updateCurrentPlayer}/></div>
                <div className='col s9'><PlayerSingle player = {this.state.currentPlayer}/></div>
              </div> 
              
              <div className='row'>
                <div className='col s12'><PlayerForm /></div>
              </div>
            </div>
          );
        }
      }
    
      
        
      
      export default App; */
/*import React from 'react';
import axios from 'axios';
import './App.css';
import PlayerForm from './player/playerForm';
import PlayerList from './player/playerList';
import PlayerSingle from './player/playerSingle';

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
    const url = 'http://localhost:4000/players';
    axios.get(url)
      .then((response) => {
        this.setState({ players: response.data });
      })
      .catch((error) => {
        console.error('Error fetching players:', error); // Improved error logging
      });
  }

  updateCurrentPlayer(item) {
    this.setState({ currentPlayer: item });
  }

  render() {
    return ( 
      <div className='container-fluid'>
        <div className='row'>
          <nav>
            <div className='nav-wrapper blue darken-1'>
              <a href='/' className='brand-logo'>Soccer Management</a>
            </div>
          </nav>
        </div>
        
        <div className='row'>
          <div className='col s3'>
            <PlayerList 
              players={this.state.players} 
              updateCurrentPlayer={this.updateCurrentPlayer} 
            />
          </div>
          <div className='col s9'>
            <PlayerSingle player={this.state.currentPlayer} />
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

export default App; */


import React from 'react';
import axios from 'axios';
import './App.css';
import PlayerForm from './player/playerForm';
import PlayerList from './player/playerList';
import PlayerSingle from './player/playerSingle';

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

export default App;


