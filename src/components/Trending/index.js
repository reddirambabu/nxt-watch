import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

// import {Link} from 'react-router-dom'
import {HiFire} from 'react-icons/hi'

import ThemeContext from '../../context/ThemeContext'
import HomeVideoDetails from '../HomeVideoDetails'
import Header from '../Header'
import SideNavbar from '../SideNavbar'

import {
  LoadingView,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureButton,
  HomeContainer,
  UnorderList,
  AllHomeContainer,
  HomeMainContainer,
  TrendingContainer,
  TrendingHeading,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    allVideos: [],
  }

  componentDidMount() {
    this.getAllHomeVideos()
  }

  getAllHomeVideos = async () => {
    const token = Cookies.get('jwtToken')
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const homeVideosApiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await fetch(homeVideosApiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      const formattedArray = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))

      this.setState({
        allVideos: formattedArray,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {allVideos} = this.state
    console.log(allVideos)
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkMode} = value
          const trendingIcon = darkMode ? (
            <HiFire size={30} color="#3b82f6" />
          ) : (
            <HiFire size={30} color="red" />
          )

          const bgColor1 = darkMode ? '#181818' : '#f8fafc'
          return (
            <AllHomeContainer>
              <SideNavbar />
              <HomeContainer bgColor={bgColor1}>
                <TrendingContainer>
                  {trendingIcon}
                  <TrendingHeading isDarkMode={darkMode}>
                    Trending
                  </TrendingHeading>
                </TrendingContainer>
                <UnorderList>
                  {allVideos.map(eachVideo => (
                    <HomeVideoDetails
                      key={eachVideo.id}
                      videoDetails={eachVideo}
                    />
                  ))}
                </UnorderList>
              </HomeContainer>
            </AllHomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderLoadingView = () => (
    <LoadingView data-testid="loader">
      <Loader type="ThreeDots" color="#102035" height={80} width={80} />
    </LoadingView>
  )

  retryGetAllVideos = () => {
    this.getAllHomeVideos()
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
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkMode} = value
          const theme = darkMode ? '#0f0f0f' : '#ffffff'
          return (
            <HomeMainContainer bgColor={theme}>
              <Header />
              {this.renderHomeStatusBasedOnApiStatus()}
            </HomeMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
