import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const VideoListItem = styled.div`
  width: 100%;
  margin-bottom: 15px;
  background-color: ${props => (props.isDarkMode ? 'transparent' : '#f8fafc')};
  color: ${props => (props.isDarkMode ? '#cbd5e1' : '#00306e')};
  @media screen and (min-width: 768px) {
    height: 100%;
    width: 95%;
    margin-bottom: 2px;
    margin: auto;
  }
`
export const VideoThumbnail = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    border-radius: 12px;
  }
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  margin: 0px;
`
export const VideoProfile = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 15px;
`
export const VideoDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
`
export const VideoDescription = styled.p`
  font-size: 16px;
  font-weight: 450;
  margin: 0px;
`
export const VideoName = styled.p`
  font-size: 14px;
  font-weight: 450;
  margin-top: 8px;
  margin-bottom: 5px;
`
export const VideoReviewsContainer = styled.div`
  display: flex;
  padding: 0px;
  margin: 0px;
`

export const VideoReviews = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin-right: 10px;
  margin-top: 0px;
`

export const VideoPublishedDate = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin-top: 0px;
`
