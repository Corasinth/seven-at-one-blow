import React, { Component } from 'react';
import Terminal from 'terminal-in-react';
import ENDPOINT from './utils/queryEndpoint';
import { request } from 'graphql-request';
import { STORY_INFO } from './utils/queries'
import { NEW_PLAYER, LOGIN, LOAD_SAVE } from './utils/mutations';
import commands from './utils/commands-and-functions/index'
import Auth from './utils/auth';

class TermPackage extends Component {
  state = {
    player: {},
    items: [],
    story: {}
  }

  //Grabs story info on page load for continuous refrence to allow limited offline usage and limit server requests
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
          commandPassThrough={cmd => `Command '${cmd}' not found. Press help to see list of available commands.`}
          style={{ fontWeight: "bold", fontSize: "1em" }}
          commands={{
            // user commands
            'take': (args, print) => {
              let response = commands.itemInteraction(args, this.state)
              print(response[0]);
              if (response[1]) {
                this.setState({ player: response[1] })
                commands.generateChapter(this.state, print, false)
              }
            },
            'use': (args, print) => {
              let response = commands.itemInteraction(args, this.state)
              print(response[0]);
              if (response[1]) {
                this.setState({ player: response[1] })
                commands.generateChapter(this.state, print, false)
              }
            },
            'signup': (args, print) => {
              let username = args[1];
              let password = args[2];
              //Prevents errors from pre login commands
              if (!username || !password) {
                print('Please enter both a username and password');
                return;
              }
              request(ENDPOINT, NEW_PLAYER, { username, password }).then((response) => {
                this.setState({ player: response.newPlayer.player })
                console.log(this.state)
                const welcomeStr = `Welcome ${response.newPlayer.player.username}!`;
                //JWT currently causing problems, so currently not implemented
                // if (Auth.getToken()) {
                //   Auth.logout()
                // }
                // Auth.login(response.login.token)
                print(welcomeStr);
              }).catch((err) => {
                console.log(err)
                print(err["response"]["errors"][0]["message"])
              })
            },
            'login': (args, print) => {
              let username = args[1];
              let password = args[2];
              if (!username || !password) {
                print('Please enter both a username and password');
                return;
              }
              request(ENDPOINT, LOGIN, { username, password }).then((response) => {
                this.setState({
                  player:
                  {
                    inventory: response.login.player.inventory,
                    username: response.login.player.username,
                  }
                })
                const welcomeStr = `Welcome ${response.login.player.username}!`;
                // if (Auth.getToken()) {
                //   Auth.logout()
                // }
                // Auth.login(response.login.token)
                print(welcomeStr);
              }).catch((err) => {
                console.log(err)
                print(err["response"]["errors"][0]["message"])
              })
            },
            'save': (args, print) => {
              if (!this.state.player.username) {
                return ['Please log in or sign up before trying to play the game!']
              }
              print(commands.save(this.state, print))
            },
            'load': (args, print) => {
              if (!this.state.player.username) {
                return ['Please log in or sign up before trying to play the game!']
              }
              request(ENDPOINT, LOAD_SAVE, { username: this.state.player.username }).then((response) => {
                this.setState({ player: response.loadSave })
                commands.generateChapter(this.state, print, true);
              }).catch((err) => {
                console.log(err);
                print(err["response"]["errors"][0]["message"])
              })
            },
            'newgame': (args, print) => {
              if (!this.state.player.username) {
                return ['Please log in or sign up before trying to play the game!']
              }
              let state = this.state;
              state.player.storySave = [0, 0];
              this.setState(state)
              commands.generateChapter(this.state, print, true);
            },
            color: {
              method: (args, print, runCommand) => {
                print(`The color is ${args._[0] || args.color}`);
              },
              options: [
                {
                  name: 'color',
                  description: 'The color the output should be',
                  defaultValue: 'color',
                },
              ],
            },
            // In theory this is supposed to create a typing effect, however, there are some bugs here. Should they be worked out, all text should be displayed in this fashion, probably with a seperate utility function
            //             'help': (args, print, runCommand) => {
            //               print(`
            //   clear - clear the terminal of all text (to see where you are in the story again, try the load command)
            //   show - display the opening text
            //   signup - create your account with this command followed by your desired username and password
            //   login - login and restore your save with this command followed by your username and password
            //   new-game - starts a new game, but doesn't overwrite your save
            //   load - restores your place in the narrative
            //   save - saves your progress if you're signed in
            //   use [item] [on object]- use an item, sometimes on an other item
            //   take [item] - add item to your inventory
            // `);
            //               // for (let i = 0; i < text.length; i += 1) {
            //               //   setTimeout(() => {
            //               //     runCommand(`edit-line ${text.slice(0, i)}`);
            //               //   }, 100);
            //               // }
            //             }
          }
          }
          descriptions={{
            clear: 'clear the terminal of all text (to see where you are in the story again, try the load command)',
            show: 'display the opening text',
            signup: 'create your account with this command followed by your desired username and password',
            login: 'login and restore your save with this command followed by your username and password',
            newgame: "starts a new game, but doesn't overwrite your save",
            load: 'restores your place in the narrative',
            save: "saves your progress if you're signed in",
            use: 'use an [item], sometimes on an other [item]',
            take: 'add an item to your inventory',
          }}

          // message that appears when you start the terminal, can also be called on with the "show" command
          msg="
╔═══╗────────────╔═══╗╔╗───────────╔╗─╔╗
║╔═╗║────────────║╔═╗╠╝╚╗──────────║║─║║
║╚══╦══╦╗╔╦══╦═╗─║║─║╠╗╔╝╔══╦═╗╔══╗║╚═╣║╔══╦╗╔╗╔╗
╚══╗║║═╣╚╝║║═╣╔╗╗║╚═╝║║║─║╔╗║╔╗╣║═╣║╔╗║║║╔╗║╚╝╚╝║
║╚═╝║║═╬╗╔╣║═╣║║║║╔═╗║║╚╗║╚╝║║║║║═╣║╚╝║╚╣╚╝╠╗╔╗╔╝
╚═══╩══╝╚╝╚══╩╝╚╝╚╝─╚╝╚═╝╚══╩╝╚╩══╝╚══╩═╩══╝╚╝╚╝                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                         
 
Welcome to SEVEN AT ONE BLOW, an interactive text adventure game! Use commands to play as a quick-witted tailor and navigate a series of puzzles. 
  
To get started use the command 'newgame'. To restore your save use the command 'login' along with your username and password (just like 'login <username> <password>'), or the command 'signup' in a similar way if you don't have an account. 

If you get stuck, use the command 'help' to see a list of available commands"
        />
        {/* </PlayerContext.Provider> */}
      </div>
    );
  }
}

export default TermPackage