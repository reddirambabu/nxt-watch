import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavContainer = styled.nav`
    padding:10px 
    padding-left:25px ; 
    padding-right:25px ;
    display:flex ; 
    justify-content:space-between ;
    align-items:center ;
    height:68px ;
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
    width: 200px;
  }
`
export const MenuIcon = styled(ThemeIcon)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutIcon = styled(ThemeIcon)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ProfileImageButton = styled(ThemeIcon)`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const ProfileImage = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`

export const LogoutButton = styled.button`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    border: 1px solid ${props => (props.isDarkMode ? '#ffffff' : 'blue')};
    background-color: transparent;
    color: ${props => (props.isDarkMode ? '#ffffff' : 'blue')};
    font-weight: bold;
    font-size: 16px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 16px;
    padding-right: 16px;
    cursor: pointer;
  }
`
export const CloseButton = styled(ThemeIcon)`
  font-weight: bold;
  align-self: flex-end;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const LinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  color: blue;
  font-size: 18px;
  background-color: #f4f4f4;
`

export const LinkItem = styled.div`
  padding-bottom: 10px;
  color: blue;
  font-size: 18px;
  cursor: pointer;
  width: 100%;
`
export const PopItem = styled.div`
  display: flex;
  flex-direction: column;
`
