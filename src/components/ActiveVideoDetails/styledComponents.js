import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  width: 100%;
  background-color: ${props => props.bgColor};
`

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const BodyStatus = styled.div`
  order: 2;
  flex-grow: 1;
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
export const Video = styled.div`
  height: 80vh;
`
