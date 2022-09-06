import React, { Component } from 'react';
import Terminal from 'terminal-in-react';
import itemInteraction from './utils/userCommands/useCmd'
import takeItemInteraction from './utils/userCommands/takeCmd';
import login from './utils/userCommands/loginCmd';
const PlayerContext = React.createContext();

const player = { test: 'string' }

class TermPackage extends Component {
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
      <PlayerContext.Provider value = { player }>
        <Terminal 
        // automatically prints any text that is logged to the console
          watchConsoleLogging
          startState='maximised'
          prompt='white'
          color='green'
          backgroundColor='black'
          barColor='black'
          style={{ fontWeight: "bold", fontSize: "1em" }}
          commands={{
            // lists the commands
            'help': () => {console.log(`
            new-game - starts a new game
            login - restores your save
            save - saves your progress
            signup -
            `)},

            // user commands
            'take': (args, print, runCommand) => {print(takeItemInteraction(args))},
            'use': (args, print, runCommand) => {print(itemInteraction(args))},
            'signup': (args, print, runCommand) => {print((args))},
            'login': (args, print, runCommand) => {print(login(args))},
            'save': (args, print, runCommand) => {},
            'new-game': (args, print, runCommand) => {},
           
            

            // this prints text the text to the terminal
            'type-text': (args, print, runCommand) => {
                const text = args.slice(1).join(' ');
                print('THIS TEXT GETS DISPLAYED');
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
      </PlayerContext.Provider>
      </div>
    );
  }
}

export default TermPackage