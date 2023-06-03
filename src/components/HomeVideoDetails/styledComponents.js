import styled from 'styled-components'

export const VideoListItem = styled.li`
  width: 100%;
  margin-bottom: 25px;
  border-radius: 4px;
  padding: 10px;

  background-color: ${props => (props.isDarkMode ? '#ffffff' : '#94a3b8')};
  @media screen and (min-width: 768px) {
    height: 360px;
    width: 350px;
  }
`
export const VideoThumbnail = styled.img`
  width: 100%;
  margin-right: 15px;
  border-radius: 4px;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
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
  font-weight: 600;
  color: black;
  margin: 0px;
`
export const VideoName = styled.p`
  font-size: 16px;
  color: black;
  font-weight: 600;
  margin-top: 10px;
`
export const VideoReviewsContainer = styled.div`
  display: flex;
  padding: 0px;
  margin: 0px;
`

export const VideoReviews = styled.p`
  font-size: 16px;
  color: black;
  font-weight: 600;
  margin-right: 10px;
  margin-top: 0px;
`

export const VideoPublishedDate = styled.p`
  font-size: 16px;
  color: black;
  font-weight: 600;
  margin-top: 0px;
`
