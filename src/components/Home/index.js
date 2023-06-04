import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {MdMic} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'
import {BiSearchAlt2} from 'react-icons/bi'

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
  BannerContainer,
  NxtWatchLogo,
  BannerDescription,
  BannerButton,
  BannerContext,
  CloseIconButton,
  SearchContainer,
  SearchInput,
  SearchIconContainer,
  UnorderList,
  AllHomeContainer,
  HomeMainContainer,
  SearchMainContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    allVideos: [],
    isShowBanner: true,
  }

  componentDidMount() {
    this.getAllHomeVideos()
  }

  getAllHomeVideos = async () => {
    const {searchInput} = this.state
    const token = Cookies.get('jwtToken')
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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

  onClickCloseBanner = () => {
    this.setState({isShowBanner: false})
  }

  renderBannerSection = () => (
    <ThemeContext.Consumer>
      {value => {
        const {darkMode} = value
        console.log(darkMode)

        return (
          <BannerContainer>
            <BannerContext>
              <NxtWatchLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="nxt logo"
              />
              <BannerDescription>
                Buy Nxt Watch Premium prepaid plans with UPI
              </BannerDescription>
              <BannerButton>GET IT NOW</BannerButton>
            </BannerContext>
            <CloseIconButton onClick={this.onClickCloseBanner}>
              <GrFormClose fontSize="28px" />
            </CloseIconButton>
          </BannerContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  searchContent = () => {
    this.getAllHomeVideos()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderSearchContainer = () => {
    const {searchInput} = this.state
    console.log(searchInput)
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkMode} = value

          const mic = darkMode ? (
            <MdMic size={25} color="#ffffff" />
          ) : (
            <MdMic size={25} />
          )

          return (
            <SearchMainContainer>
              <SearchContainer>
                <SearchInput
                  type="search"
                  onChange={this.onChangeSearchInput}
                  value={searchInput}
                  isDarkMode={darkMode}
                  placeholder="Search"
                />
                <SearchIconContainer>
                  <BiSearchAlt2 fontSize="25px" onClick={this.searchContent} />
                </SearchIconContainer>
              </SearchContainer>
              {mic}
            </SearchMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderSuccessView = () => {
    const {allVideos, isShowBanner} = this.state
    console.log(allVideos)
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkMode} = value

          const bgColor1 = darkMode ? '#181818' : '#f8fafc'
          return (
            <AllHomeContainer>
              <SideNavbar />
              <HomeContainer bgColor={bgColor1}>
                {isShowBanner ? this.renderBannerSection() : null}
                {this.renderSearchContainer()}
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

export default Home
