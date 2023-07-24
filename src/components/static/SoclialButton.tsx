// import {  Styled } from "Styled-components"
import styled from "styled-components"
import { string } from "yup"
interface ibutton{
	color?: string,
	text?:string,
	icon?:string,
}
const SoclialButton :React.FC<ibutton>=({text, color, icon})=>{
	return(
		<div>
			<Main>
				<Icon c={color}>{icon}</Icon>
				<Text>{text}</Text>
			</Main>
		</div>
	)
}

export default SoclialButton

const Text = styled.div``
const Icon = styled.div<{c?: any}>`
font-size: 30px;
font-weight: 700;
margin-right: 5px;
color: ${({c})=>c};
`
const Main = styled.div`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid silver;
width: 150px;
height: 30px;
border-radius: 15px;
margin: 10px 0;
`

