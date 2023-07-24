import styled from "styled-components"
// import {Link} "react-router-dom"
// import Button from ""
import {FiMail, FiKey} from "react-icons/fi"
import { Link,useNavigate } from 'react-router-dom'
import {registerUser} from "../../utils/authAPi"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
// import { useSelector } from 'react-redux';
import {useDispatch, useSelector} from "react-redux"
import { signInUser } from "../../utils/authAPi"
import {createUser} from "../../Global/AuthGlobal"



const  SigIn =()=>{
	const navigate =useNavigate()
const user = useSelector((state: any)=>state.user)
	const dispatch = useDispatch()
	
	const model = yup.object({
		myemail:yup.string().required(),
		mypassword:yup.string().required(),
	})
	const {
		register, reset, handleSubmit, formState:{ errors }
	}=useForm({
		resolver: yupResolver(model)
	})
	const onHandleSubmit = handleSubmit((data) => {
	        const { myemail,mypassword } = data
	        signInUser(
	            {
	                email:myemail,
	                password:mypassword,
	            }
		         ).then((res) => {
			dispatch(createUser(res))
			console.log(user)
           navigate("/main")
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
                <Signup>Sign In!</Signup>
                <Hloder>
                </Hloder>
	      
	      <DotLine>
	      <Line />	
<Text>OR</Text>	
<Line />	
	      </DotLine>
                        <Cover>
                        <Div>Email:</Div>
			  <InputHloder>
                                <Input placeholder="test@atheros.al" {...register("myemail")}/>    
			  
<IconsMail/>
			  </InputHloder> 
			  {errors.myemail &&<Error>Ps enter your Email</Error>}  
<Pass>Password:</Pass>
<InputHloder>
<Input type="password"  placeholder="Your New Password" {...register("mypassword")}/>   
    <IconsKey/>
</InputHloder>
 {errors.mypassword &&<Error>Ps enter 
your Password</Error>}  
                                </Cover>  
			     <Button 
 type="submit"
  >Sign In</Button>   
                <Up>
                        By registering you agree to our <Tm>Terms</Tm>and<Tm>Privacy</Tm> 
                </Up>
	       <Link to='/view' style={{textDecoration: "none",width:"40%"}}>
   {/* <Nav> */}
                <Sb to="/register">
              Sign-In    
	
                </Sb>
   {/* </Nav> */}
   </Link>
        </From>
</Box>
                </div>
        )
}

	
export default  SigIn 
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
const Signup= styled.div`
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