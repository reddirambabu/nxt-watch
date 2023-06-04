import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const SideNavbarContainer = styled.nav`
  display: none;
  @media screen and (min-width: 768px) {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    order: 1;
    width: 15%;
    margin-top: 1px;
    padding-top: 15px;
    background-color: ${props => props.bgColor};
    margin-right: 10px;
  }
`
export const SideNavbarList = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 0px;
  width: 100%;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`

export const HomeRoute = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 8px;
  cursor: pointer;
  align-items: center;
  background-color: ${props => props.activeTabBg};
  padding: 10px;
  border-radius: 2px;
`
export const HomeLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-left: 15px;
  color: ${props => props.textColor};
`
export const SideNavbarContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.textColor};
  padding-left: 10px;
`

export const SideNavbarContactUsHeading = styled.h1`
  font-size: 18px;
  color: ${props => props.textColor};
`
export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const IconImage = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 12px;
`

export const ContactUsDescription = styled.p`
  font-size: 16px;
  font-weight: bold;
`
