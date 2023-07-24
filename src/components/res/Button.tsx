import styled from "styled-components"
interface ibutton{
        icon?:string,
        text?:string,
        bc?:string,
        padd?:string,
}
const Button:React.FC <ibutton>=({icon,text,bc,padd})=>{
        return(
                <div>
<Butt bg={bc} pad={padd}>
        <Icons>{icon}</Icons>
        <Text>{text}</Text>
</Butt>
                </div>
        )
}

export default Button

const Butt=styled.div<{bg:any,pad:any}>`
padding: ${({pad})=>pad};
background-color: ${({bg})=>bg};
display: flex;
justify-content: center;

`


const Icons=styled.div``
const Text=styled.div``