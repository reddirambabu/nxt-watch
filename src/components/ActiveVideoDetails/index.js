import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import ActiveVideoItem from '../ActiveVideoItem'
import ThemeContext from '../../context/ThemeContext'
import SideNavbar from '../SideNavbar'

import {
  LoadingView,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureButton,
  HomeMainContainer,
  BodyContainer,
  BodyStatus,
  Video,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class ActiveVideoDetails extends Component {
  state = {apiStatus: apiStatusConstants.initial, videoDetails: {}}

  componentDidMount() {
    this.getVideo()
  }

  getVideo = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const token = Cookies.get('jwtToken')
    const apiVideoUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(apiVideoUrl, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const eachVideo = data.video_details

      const formattedArray = {
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        videoUrl: eachVideo.video_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        description: eachVideo.description,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
        subscriberCount: eachVideo.channel.subscriber_count,
      }

      console.log(formattedArray)

      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetails: formattedArray,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {videoDetails} = this.state
    return (
      <Video>
        <ActiveVideoItem videoDetails={videoDetails} />
      </Video>
    )
  }

  renderLoadingView = () => (
    <LoadingView data-testid="loader">
      <Loader type="ThreeDots" color="#102035" height={80} width={80} />
    </LoadingView>
  )

  retryGetAllVideos = () => {
    this.getVideo()
  }

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {darkMode} = value
        const imageUrl =
          darkMode === true
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureContainer>
            <FailureImage src={imageUrl} alt="failure" />
            <FailureHeading>Oops! Something Went Wrong</FailureHeading>
            <FailureDescription>
              We are having some trouble to complete your request. Please try
              again.
            </FailureDescription>
            <FailureButton onClick={this.retryGetAllVideos}>
              Retry
            </FailureButton>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderHomeStatusBasedOnApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {videoDetails} = this.state
    console.log(videoDetails)
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkMode} = value
          const theme = darkMode ? '#0f0f0f' : '#ffffff'
          return (
            <HomeMainContainer bgColor={theme}>
              <Header />
              <BodyContainer>
                <SideNavbar />
                <BodyStatus>
                  {this.renderHomeStatusBasedOnApiStatus()}
                </BodyStatus>
              </BodyContainer>
            </HomeMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default ActiveVideoDetails
