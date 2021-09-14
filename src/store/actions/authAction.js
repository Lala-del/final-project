import axios from 'axios'
import {url} from  '../../api'


export const signUp = (user) => {
    console.log(user)
    return (dispatch) => {
        axios
         .post(`${url}/register-user/`, user)

         .then((message) => {
             console.log(message)
             
    
            dispatch({
              type: "SIGN_UP",
              message:message.data.message,
            });
          })
         .catch( error => {
             console.log(error.response)
         })
    }
}

export const signIn = (creds) => {
    console.log(creds)
    return (dispatch) => {
        axios
         .post(`${url}/login/`, creds)

         .then((token) => {
            localStorage.setItem("token", token.data.access);
    
            dispatch({
              type: "SIGN_IN",
              token: token.data,
            });
          })
         .catch( error => {
             console.log(error.response)
         })
    }
}


// export function signUp ({first_name,last_name,email,password} ){
//     return async(dispatch) => {
//         try{ const res = await
//         axios.post(`${url}/register-user/`,{first_name,last_name,email,password});
//         dispatch ({type: "SIGN_UP"});
//         localStorage.setItem('token', res.data.token)
//         }
//         catch(error){
//            console.log("error")
//         }
//     }
// }


export const loadUser = () => {
    return(dispatch, getState) => {
        const token = getState().auth.token
        if(token){
            dispatch({
                type: "USER_LOADED",
                token
            }) 
        } 
        else {
            return null
        } 
    }
}