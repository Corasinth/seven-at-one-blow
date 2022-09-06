 var testAccount = [
    {
        username: "Tim",
        password: "Sasse"
    },

    {
        username: "Abdur-Rauf",
        password: "Ahmed"
    },

    {
        username: "Austin",
        password: "Park"
    }
 ]
 function Login (){
    var username = "";
    var password = "";

    for (var i = 0; i < testAccount.length; i++){
        if (username.input === testAccount[i].username && password.input === testAccount[i].password){
            return "Thanks" + username + "for logging in!"
        } else {
            return "Please enter the correct login information to proceed!"
        }
    }
 }