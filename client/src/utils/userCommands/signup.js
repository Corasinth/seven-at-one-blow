
const newPlayer = (args, newPlayerRequest) => {
    let username = args[1];
    let password = args[2];
    try {
      let response = newPlayerRequest(username, password);
    } catch (err) {
      console.log(err);
    }
}

export default newPlayer;
