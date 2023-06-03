import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

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
          <Link to={`/videos/${id}`} className="link-item">
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
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default HomeVideoDetails
