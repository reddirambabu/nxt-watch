import {Component} from 'react'

import ReactPlayer from 'react-player'
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
} from './styledComponents'

class ActiveVideoItem extends Component {
  render() {
    const {videoDetails} = this.props
    const {
      title,
      thumbnailUrl,
      viewCount,
      publishedAt,
      name,
      profileImageUrl,
      videoUrl,
    } = videoDetails
    console.log(videoDetails, thumbnailUrl)
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <VideoListItem isDarkMode={darkMode}>
              <ReactPlayer url={videoUrl} controls width="100%" height="90%" />
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
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default ActiveVideoItem
