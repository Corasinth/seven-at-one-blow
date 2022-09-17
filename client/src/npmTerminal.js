import React, { Component } from 'react';
import Terminal from 'terminal-in-react';
import ENDPOINT from './utils/queryEndpoint';
import { request } from 'graphql-request';
import { STORY_INFO } from './utils/queries'
import { NEW_PLAYER, LOGIN } from './utils/mutations';
import commands from './utils/commands-and-functions/index'

// import Auth from '../auth';

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
              let response = itemInteraction(args, this.state, this.setState)
              print(response[0]);
              this.setState({ player: response[1] })
              commands.generateChapter(this.state, false)
            },
            'use': (args, print, runCommand) => {
              let response = itemInteraction(args, this.state)
              print(response[0]);
              this.setState({ player: response[1] })
              commands.generateChapter(this.state, false)
            },
            'signup': (args, print, runCommand) => {
              let username = args[1];
              let password = args[2];
              if (!username || !password) {
                print('Please enter both a username and password');
                return;
              }
              request(ENDPOINT, NEW_PLAYER, { username, password }).then((response) => {
                this.setState(response.newPlayer.player)
                const welcomeStr = `Welcome ${response.newPlayer.player.username}!`;
                print(welcomeStr);
              }).catch((err) => {
                console.log(err)
                print(err["response"]["errors"][0]["message"])
              })
            },
            'login': (args, print, runCommand) => {
              let username = args[1];
              let password = args[2];
              if (!username || !password) {
                print('Please enter both a username and password');
                return;
              }
              request(ENDPOINT, LOGIN, { username, password }).then((response) => {
                console.log(response)
                this.setState({ player: response.login.player });
                const welcomeStr = `Welcome ${response.login.player.username}!`;
                print(welcomeStr);
                setTimeout(()=>{
                  commands.generateChapter(this.state, print, true)
                }, 2000)
              }).catch((err) => {
                console.log(err)
                print(err["response"]["errors"][0]["message"])
              })
            },
            'save': (args, print, runCommand) => { print(save(this.state)) },
            'load': (args, print, runCommand) => {
              this.setState({ player: commands.load(this.state.player) })
              commands.generateChapter(this.state, print, true)
            },
            'new-game': (args, print, runCommand) => {
              this.setState({ player: { storySave: [0, 0] } })
              runCommand('clear')
              commands.generateChapter(this.state, print, false);
            },
            // this prints text the text to the terminal
            'help': (args, print, runCommand) => {
              const text = args.slice(1).join(' ');
              print(`
  signup - create your account with this command followed by your desired username and password
  login - login and restore your save with this command followed by your username and password
  new-game - starts a new game, but doesn't overwrite your save
  load - restores your place in the narrative
  save - saves your progress if you're signed in
  use [item] [on object]- use an item, sometimes on an other item
  take [item] - add item to your inventory
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
  
To get started use the command "new-game". To restore your save use the command "login" along with your username and password. If you get stuck, use the command "help" to see a list of available commands'
        />
        {/* </PlayerContext.Provider> */}
      </div>
    );
  }
}

export default TermPackage