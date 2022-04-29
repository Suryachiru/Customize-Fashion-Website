import React, { useState } from "react";
import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import {loginUser} from "../services/services.js";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(
    https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0YPQ9e-2bPnRJyPX2b4Pl_OJfFekACktwig&usqp=CAU
  );
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 50;
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
`;

const From = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px ;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer; 
`;

const Login = () => {
  
const navigate = useNavigate();
  const [emailId, setEmailId] = useState('');
const [password, setPassword] = useState('');

const handleLogin =  async e => {
  e.preventDefault();
  const token = await loginUser({emailId, password});
 
  
  if(!token) {
    console.log('Login failed. No token');
    return;
    }
 
  localStorage.setItem('token', token);
  navigate('/home');

}



  return (
    
    <Container>
      <Wrapper>
        <Title> SIGN IN </Title>
        <From>
          <Input  onChange={e => setEmailId(e.target.value)} value={emailId} placeholder="Email" />
          <Input onChange={e => setPassword(e.target.value)} value={password}placeholder="Password" type="password" />

          <Button onClick={handleLogin}> LOGIN </Button>
          
           
          <Link to="Register">
           <div>CREATE AN ACCOUNT </div> 
            </Link>
        </From>
      </Wrapper>
    </Container>
  );
};
export default Login;
