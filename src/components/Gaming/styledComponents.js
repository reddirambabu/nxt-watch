import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  width: 100%;
  background-color: ${props => props.bgColor};
`

export const AllHomeContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const LoadingView = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  background-color: ${props => (props.isDarkMode ? '#475569' : '#f1f1f1')};
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  padding: 15px;
  width: 80%;
  margin: auto;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
export const FailureImage = styled.img`
  width: 80%;
  margin: auto;
  @media screen and (min-width: 768px) {
    width: 220px;
  }
`

export const FailureHeading = styled.h1`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto';
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
`

export const FailureDescription = styled.h1`
  font-size: 17px;
  font-weight: bold;
  font-family: 'Roboto';
  color: ${props => (props.isDarkMode ? '#94a3b8' : '#1e293b')};
`

export const FailureButton = styled.button`
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  padding-top: 10px;
  padding-left: 20px;
  padding-bottom: 10px;
  padding-right: 20px;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  padding: 0px;
  @media screen and (min-width: 768px) {
    width: 83%;
    order: 2;
  }
`

export const UnorderListGaming = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 25px;
  margin-bottom: 25px;
`
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
  margin-bottom: 15px;
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
export const TrendingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`

export const TrendingHeading = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-left: 18px;
  color: ${props => (props.isDarkMode ? '#e2e8f0' : 'blue')};
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
