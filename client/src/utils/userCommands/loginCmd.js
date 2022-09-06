import { gql } from '@apollo/client';

//  var testAccount = [
//     {
//         username: "Tim",
//         password: "Sasse"
//     },

//     {
//         username: "Abdur-Rauf",
//         password: "Ahmed"
//     },

//     {
//         username: "Austin",
//         password: "Park"
//     }
//  ]
//  function Login (){
//     var username = "";
//     var password = "";

//     for (var i = 0; i < testAccount.length; i++){
//         if (username.input === testAccount[i].username && password.input === testAccount[i].password){
//             return "Thanks" + username + "for logging in!"
//         } else {
//             return "Please enter the correct login information to proceed!"
//         }
//     }
//  }

// User Login info
const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];
  
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
  
  const loginAccount = (event) => {
    //Prevent page reload
    event.preventDefault();
  
    var { uname, pass } = document.forms[0];
  
    // Find user login info
    const userData = database.find((user) => user.username === uname.value);
  
    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

export default loginAccount;
// export default Login;