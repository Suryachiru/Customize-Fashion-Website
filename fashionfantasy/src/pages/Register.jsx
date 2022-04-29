import React, { useState } from "react";
import styled from "styled-components"
import {registerUser} from "../services/services.js";
import {useNavigate} from "react-router-dom";

const Container =styled.div`
width: 100vw;
height: 100vh;
background: url(https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/c471a2fce2f2686e5c4a058662ee0abc-1594367743/Sonson%20Fall%20Winter%202020%20Virtual%20Rvsn-01/do-digital-customized-fashion-illustrations.jpg);
display: flex;
align-items: center;
justify-content: center;
`;

const Wrapper =styled.div`
width:40%;
padding: 20px;
background-color :white;
`;

const From =styled.form`
display: flex;
flex-wrap: wrap;
`;

const Title =styled.h1`
font-size: 24px;
font-weight: 700;
text-align: center;
`;

const Input =styled.input`
flex: 1;
min-width :40%;
margin : 20px 10px 0px 0px;
padding : 10px;

`;

const Agreement =styled.span`
font-size: 13px;
margin: 20px 0px;

`;



const Button =styled.button`
width:40%;
border: none;
padding :15px 20px;
background-color: teal;
color :white;
cursor: pointer;


`;

function Register() {


    const navigate = useNavigate();

const [emailId, setEmailId] = useState('');
const [password, setPassword] = useState('');
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [role, setRole] = useState('');
const [confirmPwd, setConfirmPwd] = useState('');
const [userName, setUserName] = useState('');
const handleSegmentChange = e => setRole(e.target.value);
const handleRegister = async e => {
    e.preventDefault();
    if(password!==confirmPwd) {
        console.error('Passwords don\'t match');
        return;
    }
    const token = await registerUser({
        firstName,
        lastName,
        emailId,
        password,
        role,
        userName
    });
    if(!token) {
        console.log('Register failed. No token');
        return;
        }
    localStorage.setItem('token', token);
    navigate('/home');

}

  return (
    <Container>
        <Wrapper>
            <Title> REGISTER </Title>
            <From>
                <Input  onChange={e => setFirstName(e.target.value)} value={firstName} placeholder="Name" />
                <Input  onChange={e => setLastName(e.target.value)} value={lastName} placeholder="LastName" />
                <Input  onChange={e => setUserName(e.target.value)} value={userName} placeholder="UserName" />
                <Input  onChange={e => setEmailId(e.target.value)} value={emailId} placeholder="Email" />
                <Input  onChange={e => setPassword(e.target.value)} value={password} placeholder="Passward" type="password" />
                <Input  onChange={e => setConfirmPwd(e.target.value)} value={confirmPwd}
                placeholder="Confirm Password" type="password" />
                <div>

                <label Htmlfile="Role"/>
            <b>Role:-</b>
            <input  value={"user"} checked={role==="user"} onChange={handleSegmentChange} type="radio" id="forUser" name="userRole"  />
                <label for="forUser">User</label>
      
   
    </div>

    
    <div>

    <input value= {"manufacturer"} checked={role==="manufacturer"} onChange={handleSegmentChange} type="radio" id="forUser" name="userRole"  />
                <label for="forManufacturer">Manufacturer</label>

  
  
    </div>

                <Agreement>
                    By creating an account ,I consent to the processing of my personal data in accordance with the <b>privacy policy</b>
                </Agreement>
                <Button onClick={handleRegister}> REGISTER </Button>
            </From>
        </Wrapper>
    </Container>
  )
}

export default Register