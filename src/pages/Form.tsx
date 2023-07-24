import styled from "styled-components"
// import {Link} "react-router-dom"
// import Button from ""
import { Link } from 'react-router-dom'

const Form =()=>{
	
	
        return(
                <div>
<Box
>
	
        <From>
                <Image />
                <Sign>Sign Up!</Sign>
                <Hloder>
		<Button />
                        {/* <Button>Use Google</Button>
                        <Button>Use Facebook</Button> */}
                </Hloder>
	      
	      <DotLine>
	      <Line />	
<Text>OR</Text>	
<Line />	
	      </DotLine>
                        <Cover>
                        <Div>Email:</Div>
                                <Input placeholder="test@atheros.al"/>       
<Pass>Password:</Pass>
<Input placeholder="Your New Password"/>       
           <Div>Repeat Password:</Div>
<Input placeholder="Repeat Your New PassWord"/>  
                                </Cover>     
                <Up>
                        By registering you agree to our <Tm>Terms</Tm>and<Tm>Privacy</Tm> 
                </Up>
	       <Link to='/view' style={{textDecoration: "none",width:"40%"}}>
   {/* <Nav> */}
                <Sb>
              Sign-In    
	
                </Sb>
   {/* </Nav> */}
   </Link>
        </From>
</Box>
                </div>
        )
}

	
export default Form
// const Nav = styled.div`
/* color: white; */
/* text-decoration: none; */
// `
const DotLine = styled.div`
display: flex;
width: 100%;
/* background-color: red; */
align-items:center;
justify-content: center;
`
const Text = styled.div`
margin: 0 5px;
font-size: 10px;
`

const Line= styled.div`
width: 30%;
height: 1px;
background-color: silver;
`

const Sb=styled.div`
width: 90%;
height: 4vh;
font-size: 14px;
/* background-color: green; */
color: blue;
display: flex;
justify-content: center;
align-items: center;
:hover{
	cursor: pointer;
}
`
const Up=styled.div`
width: 80%;
height: 7vh;
font-size: 10px;
font-weight: 900;
/* background-color: blue; */
display: flex;
justify-content: center;
align-items: center;
`
const Tm=styled.div`
margin: 0px 8px;

`
const Cover=styled.div`
display: flex;
flex-direction: column;
        width: 80%;
min-height: 20px;
justify-content: center;
align-content: center;
/* background-color: blue; */

`
const Pass=styled.div`
width: 25%;
height: 5vh;
font-size: 13px;
color: blue;
display: flex;
align-items: center;
`
const Div=styled.div`
width: 50%;
height: 5vh;
font-size: 13px;
color:#000;
display: flex;
align-items: center;
`
const Input=styled.input`
        width: 93%;
height: 20px;
padding: 10px;
outline: none;
border-radius: 5px;
border: 2px solid lightgray;
`
const Box=styled.div`
width: 100%;
height: calc(100vh - 69px);
display: flex;
justify-content: center;
background-color: blue;
align-items: center;
`
const From=styled.div`
width: 30%;
height: 530px;
display: flex;
border-radius: 5px;
border: 1px solid #fff;
justify-content: center;
align-items: center;
flex-direction: column;
background-color:#fff;
`
const Image= styled.div`
width: 15%;
height: 5vh;
background-color: green;
display: flex;
justify-content: center;
align-items: center;
`
const Sign= styled.div`
width: 22%;
height: 7vh;
/* background-color: blue; */
display: flex;
justify-content: center;
align-items: center;
font-size: 22px;
font-weight: 600;

`
const Button= styled.div``
const Hloder= styled.div`
width: 80%;
height: 4vh;
/* background-color: green; */
display: flex;
justify-content: space-between;
align-items: center;
`
const OR=styled.div`
        width: 80%;
height: 7vh;
/* background-color: green; */
color: silver;
display: flex;
justify-content:center;
align-items: center;

`