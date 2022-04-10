import styled from "styled-components"

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
  return (
    <Container>
        <Wrapper>
            <Title> REGISTER </Title>
            <From>
                <Input placeholder="Name" />
                <Input placeholder="Lastname" />
                <Input placeholder="Username" />
                <Input placeholder="Email" />
                <Input placeholder="Passward" />
                <Input placeholder="Confirm passward" />
                <div>

                <label Htmlfile="Role"/>
            <b>Role:-</b>
            <input type="radio" id="forUser" name="user" onclick="myFunction()" />
                <label for="forUser">User</label>
      
   
    </div>

    <div>

    <input type="radio" id="forUser" name="user" onclick="myFunction()" />
                <label for="forArtist">Artist </label>
      
      
    </div>

    <div>

    <input type="radio" id="forUser" name="user" onclick="myFunction()" />
                <label for="forManufacture">Manufacture</label>
      
  
    </div>

                <Agreement>
                    By creating an account ,I consent to the processing of my personal data in accordance with the <b>privacy policy</b>
                </Agreement>
                <Button> NEXT </Button>
            </From>
        </Wrapper>
    </Container>
  )
}

export default Register