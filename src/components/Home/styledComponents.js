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
  padding: 15px;
  @media screen and (min-width: 768px) {
    width: 83%;
    order: 2;
  }
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 15px;
  box-shadow: 0px 4px 16px 0px;
  margin-top: 25px;
  margin-bottom: 25px;
`

export const NxtWatchLogo = styled.img`
  width: 150px;
  height: 40px;
`
export const BannerDescription = styled.p`
  color: #1e293b;
  font-size: 18px;
  font-weight: 600px;
`
export const BannerButton = styled(FailureButton)`
  color: #1e293b;
  background-color: transparent;
  border: 1px solid #1e293b;
  text-align: center;
  font-size: 16px;
`
export const BannerContext = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const CloseIconButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`
export const SearchContainer = styled.div`
  width: 100%;
  height: 42px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 4px;
  @media screen and (min-width: 768px) {
    width: 65%;
    height: 45px;
  }
`

export const SearchInput = styled.input`
  height: 100%;
  width: 85%;
  background-color: transparent;
  padding-left: 16px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-weight: bold;
  font-size: 17px;
  border-right: 1px solid;
  border-left: none;
  border-top: none;
  border-bottom: none;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#0f0f0f')};
  outline: none;
`

export const SearchIconContainer = styled.div`
  text-align: center;
  height: 100%;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  color: black;
`
export const UnorderList = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 25px;
  margin-bottom: 25px;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`
export const SideNavbarContainer = styled.nav`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    order: 1;
    width: 15%;
    margin-top: 35px;
    background-color: ${props => props.bgColor};
    margin-right: 30px;
  }
`
export const SideNavbarList = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`

export const HomeRoute = styled.div`
  display: flex;
  margin-bottom: 15px;
  cursor: pointer;
  align-items: center;
  background-color: ${props => props.activeTabBg};
  padding: 10px;
  border-radius: 2px;
`
export const HomeLabel = styled.label`
  font-size: 20px;
  font-weight: bold;
  margin-left: 15px;
  color: ${props => props.textColor};
`
