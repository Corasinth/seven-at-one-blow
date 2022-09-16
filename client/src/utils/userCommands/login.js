import { LOGIN } from '../mutations.js'
// import { useMutation } from '@apollo/client'
import Auth from '../auth.js'

const login = (args, loginRequest) => {
  console.log('IN LOGIN')
  const username = args[1];
  const password = args[2];
  loginRequest(username, password)
  try {
  //   const { data } = await loginPlayer( {variables: {username, password} } );
  //   Auth.login(data.login.token);   
    // return `Welcome Player!`
  } catch (error) {
  //     console.log(error);
  }
  // const [loginPlayer, { error, data }] = useMutation(LOGIN);
  // console.log("string");
}


export default login;
