import React, { Component } from 'react';
import Terminal from 'terminal-in-react';

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
            'take': () => {},
            'use': () => {},
            'signup': () => {},
            'login': () => {},
            'save': () => {},
            'new-game': () => {},
           
            

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
      </div>
    );
  }
}

export default TermPackage