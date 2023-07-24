import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
	 <Link to='/form' style={{textDecoration: "none"}}>
 <Nav>
          <Logo>divine</Logo>
	
	</Nav>
 </Link>

          <NavHolder>
            <Link to='/view' style={{textDecoration: "none"}}>
            <Nav>View Task</Nav>
            </Link>
          </NavHolder>

  <NavHolder>
    <Link to='/form' style={{textDecoration: "none"}}>
    <Nav></Nav>
    </Link>
  </NavHolder>

          <ButtonHolder>
            <Link to='/' style={{textDecoration: "none"}}>
            <Button>Add Tasks</Button></Link>
          </ButtonHolder>
        </Main>
      </Container>
    </div>
  )
}

export default Header

// const Logo = styled.div``

const Button = styled.button`
padding: 10px 15px;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
color: blue;
outline: none;
border: none;
border-radius: 5px;
cursor: pointer;
font-weight: 700;
`

const ButtonHolder = styled.div`
display: flex;
`

const Nav = styled.div`
color: white;
text-decoration: none;
`

const NavHolder = styled.div`
display: flex;
`

const Main = styled.div`
display: flex;
color: white;
font-weight: 500;
  width: 90%;
  height: 100%;
  /* background-color: hsl(240, 100%, 50%); */
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.div`
cursor: pointer;
:hover{
  color: gray;
}
`

const Container = styled.div`
height: 10vh;
  display: flex;
  width: 100%;
  font-size: 20px;
  height: 65px;
  background-color: #000;
  justify-content: center;
  align-items: center;
`