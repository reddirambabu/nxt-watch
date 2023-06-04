import styled from 'styled-components'

export const GameItem = styled.li`
  padding: 0px;
  width: 30%;
  margin-bottom: 20px;
  color: ${props => (props.isDarkMode ? '#ffffff' : 'black')};
  @media screen and (min-width: 768px) {
    width: 22%;
    height: 300px;
  }
`

export const GameThumbnail = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    height: 200px;
  }
`

export const GameTitle = styled.p`
  font-size: 13px;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const GameViewCount = styled.p`
  font-size: 12px;
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
