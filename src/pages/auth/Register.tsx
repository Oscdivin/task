import styled from "styled-components"
// import {Link} "react-router-dom"
// import Button from ""
import {FiMail, FiKey} from "react-icons/fi"
import { Link,useNavigate } from 'react-router-dom'
import {registerUser} from "../../utils/authAPi"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import SoclialButton from "../../components/static/SoclialButton"


const  Sigin =()=>{
	const navigate =useNavigate()
	const model = yup.object({
		// userName:yup.string().required(),
		email:yup.string().required(),
		password:yup.string().required(),
		// confirm:yup.string().required(),
		confirm:yup.string().oneOf([yup?.ref("password")]),
	})
	const {
		register, reset, handleSubmit, formState:{ errors }
	}=useForm({
		resolver: yupResolver(model)
	})
	const onHandleSubmit = handleSubmit((data) => {
	        const { email,
	//          userName,
	         password } = data
	        registerUser(
	            {
	                email,
	          //       userName,
	                password,
	                avatar: email.charAt(0).toUpperCase()
	            }
		         ).then(() => {
           navigate("/sign-in")
       })
       reset()
   })
        return(
                <div>
<Box
>
	
        <From
       onSubmit = {onHandleSubmit} >
                <Image />
                <Sign>Sign Up!</Sign>
                <Hloder>
		<SoclialButton text="Use Google"
		color="#fb8585"
		icon="G"/>
		
				<SoclialButton text="Use Facebook"
		color="#579cfd"
		icon="F"/>
		{/* <Button /> */}
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
			  <InputHloder>
                                <Input placeholder="test@atheros.al" {...register("email")}/>    
			  
<IconsMail/>
			  </InputHloder> 
			  {errors.email &&<Error>Ps enter your Email</Error>}  
<Pass>Password:</Pass>
<InputHloder>
<Input type="password"  placeholder="Your New Password" {...register("password")}/>   
    <IconsKey/>
</InputHloder>
 {errors.password &&<Error>Ps enter 
your Password</Error>}  
           <Div>Repeat Password:</Div>
<InputHloder>
<Input type="password" placeholder="Repeat Your New PassWord" {... register("confirm")}/>  
    <IconsKey/>
</InputHloder>
{errors.confirm &&<Error>Password doesn't match</Error>}  
                                </Cover>  
			     <Button 
 type="submit"
  >Sign up</Button>   
                <Up>
                        By registering you agree to our <Tm>Terms</Tm>and<Tm>Privacy</Tm> 
                </Up>
	       
                <Sb to="/sign-in">
              Sign-In    
	
                </Sb>
   
        </From>
</Box>
                </div>
        )
}

	
export default  Sigin
const Error=styled.div`
color:#ff0000;
display:flex;
justify-content: flex-end;
`
// const Nav = styled.div`
/* color: white; */
/* text-decoration: none; */
// `
const IconsKey = styled(FiKey)`
margin-right: 5px;
font-size: 25px;
color: rgba(0,0,0,0.4);
`

const IconsMail = styled(FiMail)`
margin-right: 5px;
font-size: 25px;
color: rgba(0,0,0,0.4);
`
const InputHloder = styled.div`
        width: 100%;
/* height: 30px; */
display: flex;
/* background-color: red; */
border: 2px solid lightgray;
border-radius: 5px;
justify-content: center;
align-items: center;
`


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

const Sb=styled(Link)`
width: 90%;
height: 4vh;
font-size: 14px;
/* background-color: green; */
color: blue;
text-decoration: none;

display: flex;
justify-content: center;
align-items: center;
:hover{
	cursor: pointer;
}
`
const Up=styled.div`
width: 80%;
height: 3vh;
font-size: 10px;
font-weight: 900;
/* background-color:red; */
display: flex;
justify-content: center;
align-items: center;
`
const Tm=styled.div`
margin:0px 8px;

`
const Cover=styled.div`
display: flex;
flex-direction: column;
        width: 80%;
height: 40vh;
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
/* border-radius: 5px; */
/* border: 2px solid lightgray; */
border: none;
`
const Box=styled.div`
width: 100%;
height: calc(100vh - 0px);
display: flex;
justify-content: center;
background-color: blue;
align-items: center;
`
const From=styled.form`
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
const Button = styled.button`
outline: none;
border: 0;
background-color: blue;
padding: 9px 135px;
display:flex;
align-items: center;
justify-content: center;
border-radius: 3px;
color: white;
font-size: 15px;
font-weight: 600;
	cursor: pointer;
`

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