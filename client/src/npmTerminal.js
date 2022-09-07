import React, { Component, createContext, useContext } from 'react';
import Terminal from 'terminal-in-react';
import itemInteraction from './utils/userCommands/itemInteractionCmd';
import newPlayer from './utils/userCommands/newPlayerCmd';
import login from './utils/userCommands/loginCmd';


import { STORY_INFO } from './utils/queries';
import { request } from 'graphql-request'
import ENDPOINT from './utils/queryEndpoint';
import { LOAD_SAVE, LOGIN, NEW_PLAYER, SAVE_PLAYER } from './utils/mutations';
import Auth from './utils/auth'

class TermPackage extends Component {
  state = {
    player: {},
    items: [],
    story: {}
  }
  componentDidMount() {
    request(ENDPOINT, STORY_INFO).then((data) => {
      this.setState({ items: data.getStoryInfo.items, story: data.getStoryInfo.story });
    })
  }
  newPlayerRequest = (args) => {
      request(ENDPOINT, NEW_PLAYER, { username:args[1], password:args[2] }).then((response) => {
        // Auth.login(response.newPlayer.player.token);
        this.setState({ player: response.newPlayer.player });
        console.log(this.state)
        return `Welcome ${this.state.player.username}!`
      }).catch((err)=>{
        console.log(err)
        return false
      })
  }
  loginRequest = (username, password) => {
    request(ENDPOINT, LOGIN, {username, password}).then((response) => {
      console.log(response)
      this.setState({ player: response.login.player });
      console.log(this.state)
    }).catch((err)=>{
        console.log(err)
        return false
      })
  }
  saveRequest = () => {
    let player = this.state.player;
    request(ENDPOINT, SAVE_PLAYER, {username: player.username, storySave: player.storySave, inventory: player.inventory }).then((response) => {
      console.log(response)
    }).catch((err)=>{
        console.log(err)
        return false
      })
  }
  loadSaveRequest = () => {
    request(ENDPOINT, LOAD_SAVE, {username: this.state.player.username}).then((response) => {
      console.log(response)
      return (this.state)
    }).catch((err)=>{
        console.log(err)
        return false
      })
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <Terminal
          // automatically prints any text that is logged to the console
          // watchConsoleLogging
          startState='maximised'
          prompt='white'
          color='green'
          backgroundColor='black'
          barColor='black'
          player='TEST STRING'
          style={{ fontWeight: "bold", fontSize: "1em" }}
          commands={{
            // user commands
            'take': (args, print, runCommand) => { 
              let returnArr = itemInteraction(args, this.state)
              if (returnArr[1]){
                this.state.player = returnArr[1];
              }
              print (returnArr[0]);
            },
            'use': (args, print, runCommand) => { 
              let returnArr = itemInteraction(args, this.state)
              if (returnArr[1]){
                this.state.player = returnArr[1];
              }
              print (returnArr[0]);
            },
            'signup': (args, print, runCommand) => { 
              print(this.newPlayerRequest(args))
            },
            'login': (args, print, runCommand) => { print(login(args, this.loginRequest)) },
            'save': (args, print, runCommand) => { print(this.saveRequest()) },
            'load': (args, print, runCommand) => { 
              let state = this.loadSaveRequest()
              //Call a function here to print out the correct text based on the current state.player.storySave etc. 
              },
            'new-game': (args, print, runCommand) => { },

            // this prints text the text to the terminal
            'help': (args, print, runCommand) => {
              const text = args.slice(1).join(' ');
              print(`
new-game - starts a new game
login - restores your save
save - saves your progress
signup - create your account
`);
              for (let i = 0; i < text.length; i += 1) {
                setTimeout(() => {
                  runCommand(`edit-line ${text.slice(0, i + 1)}`);
                }, 100 * i);
              }
            }

          }}


          // message that appears when you start the terminal, can also be called on with the "show" command
          msg=' 
╔═══╗────────────╔═══╗╔╗───────────╔╗─╔╗
║╔═╗║────────────║╔═╗╠╝╚╗──────────║║─║║
║╚══╦══╦╗╔╦══╦═╗─║║─║╠╗╔╝╔══╦═╗╔══╗║╚═╣║╔══╦╗╔╗╔╗
╚══╗║║═╣╚╝║║═╣╔╗╗║╚═╝║║║─║╔╗║╔╗╣║═╣║╔╗║║║╔╗║╚╝╚╝║
║╚═╝║║═╬╗╔╣║═╣║║║║╔═╗║║╚╗║╚╝║║║║║═╣║╚╝║╚╣╚╝╠╗╔╗╔╝
╚═══╩══╝╚╝╚══╩╝╚╝╚╝─╚╝╚═╝╚══╩╝╚╩══╝╚══╩═╩══╝╚╝╚╝                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                         
 
Welcome to SEVEN AT ONE BLOW, an interactive text adventure game! Use commands to play as a quick-witted tailor and navigate a series of puzzles. 
  
To get started use the command "new game", or "login" to restore your save. If you get stuck, use the command "help" to see a list of available commands'
        />
        {/* </PlayerContext.Provider> */}
      </div>
    );
  }
}

export default TermPackage