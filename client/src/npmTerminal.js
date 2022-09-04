import React, { Component } from 'react';
import Terminal from 'terminal-in-react';

class TermPackage extends Component {
  showMsg = () => 'Hello World'

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
          
          color='green'
          backgroundColor='black'
          barColor='black'
          style={{ fontWeight: "bold", fontSize: "1em" }}
          commands={{
            'console-log': () => {console.log('Success!')},
            showmsg: this.showMsg,
            popup: () => alert('Terminal in React'),

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

          descriptions={{
            'console-log': 'Sends a message to the console',
            showmsg: 'testing',
            alert: 'alert', popup: 'alert'
          }}

          // message that appears when you start the terminal, can also be called on with the "show" command
          msg='You can write anything here.'
        />
      </div>
    );
  }
}

export default TermPackage