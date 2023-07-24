import {Outlet} from "react-router-dom"
import styled from "styled-components"
import  Sider from "../static/Sider"

const MainLayout =()=>{
	return(
	<Box>
		<Sider/>
		<Outlet/>
	</Box>
	)
}
export default MainLayout

const Box = styled.div`
display:flex;
`