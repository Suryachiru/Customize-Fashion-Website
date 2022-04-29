import axios from "axios";

const USER_SIGNUP_URL='http://localhost:8081/user/signup';
const USER_LOGIN_URL='http://localhost:8081/user/login';

 export async function registerUser({ emailId, firstName, lastName, role, password, userName}) {
    try {   
        const response = await axios.post(USER_SIGNUP_URL, {
            emailId,
            firstName,
            lastName,
            role,
            password,
            userName
        });
        if(response.status!=201) {
           console.error('Register failed');
           return null;
        }
        return response.data.token;
           
    }
    catch(error) {
        console.error(error);
    }
}   


 export async function loginUser({ emailId, password}) {
    try {   
        const response = await axios.post(USER_LOGIN_URL, {
            emailId,
            password
        });
        if(response.status!=200) {
           console.error('Login failed');
           return null;
        }
        return response.data.token;
           
    }
    catch(error) {
        console.error(error);
    }
}
export function isAuth() {
    const authToken = localStorage.getItem('token');
    if(!authToken) return false;
    return true;
}