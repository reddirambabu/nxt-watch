import styled from 'styled-components'

export const NavContainer = styled.nav`
    padding:10px 
    padding-left:25px ; 
    padding-right:25px ;
    display:flex ; 
    justify-content:space-between ;
    align-items:center ;
    height:48px ;
    background-color:${props => props.bgColor} ;
`

export const NavbarLogo = styled.img`
  width: 110px;
  height: 35px;
  padding-left: 15px;
  @media screen and (min-width: 768px) {
    width: 160px;
    height: 40px;
  }
`
export const ThemeIcon = styled.button`
  border: none;
  background-color: transparent;
  width: 25px;
  height: 25px;
  cursor: pointer;
`
export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  @media screen and (min-width: 768px) {
    width: 120px;
  }
`
