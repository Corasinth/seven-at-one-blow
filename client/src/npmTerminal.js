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
            'open-google': 'opens google.com',
            showmsg: 'shows a message',
            alert: 'alert', popup: 'alert'
          }}

          // message that appears when you start the terminal
          msg='You can write anything here. Example - Hello! My name is Foo and I like Bar.'
        />
      </div>
    );
  }
}

export default TermPackage