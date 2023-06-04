import ThemeContext from '../../context/ThemeContext'

import {
  VideoListItem,
  VideoDetailsContainer,
  VideoProfile,
  VideoDescriptionContainer,
  VideoDescription,
  VideoName,
  VideoReviewsContainer,
  VideoReviews,
  VideoPublishedDate,
  VideoThumbnail,
  NavLink,
} from './styledComponents'

const HomeVideoDetails = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = videoDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <NavLink to={`/videos/${id}`}>
            <VideoListItem isDarkMode={darkMode}>
              <VideoThumbnail src={thumbnailUrl} alt={name} />
              <VideoDetailsContainer>
                <VideoProfile src={profileImageUrl} alt="profile" />
                <VideoDescriptionContainer>
                  <VideoDescription>{title}</VideoDescription>
                  <VideoName>{name}</VideoName>
                  <VideoReviewsContainer>
                    <VideoReviews>{viewCount} views .</VideoReviews>
                    <VideoPublishedDate>{publishedAt}</VideoPublishedDate>
                  </VideoReviewsContainer>
                </VideoDescriptionContainer>
              </VideoDetailsContainer>
            </VideoListItem>
          </NavLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default HomeVideoDetails
