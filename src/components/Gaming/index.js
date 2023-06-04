import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

// import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import GameVideoDetails from '../GameVideoDetails'
import Header from '../Header'

import {
  LoadingView,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureButton,
  HomeContainer,
  UnorderListGaming,
  AllHomeContainer,
  HomeMainContainer,
  SideNavbarContainer,
  SideNavbarList,
  HomeRoute,
  HomeLabel,
  NavLink,
  SideNavbarContactUsContainer,
  SideNavbarContactUsHeading,
  IconsContainer,
  IconImage,
  ContactUsDescription,
  TrendingContainer,
  TrendingHeading,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
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
    const homeVideosApiUrl = 'https://apis.ccbp.in/videos/gaming'
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
      }))

      this.setState({
        allVideos: formattedArray,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSideNavbar = () => (
    <ThemeContext.Consumer>
      {value => {
        const {darkMode, activeTab, changeActiveTab} = value

        const bgColor = darkMode ? '#231f20' : '#f9f9f9'
        const textColor = darkMode ? '#f9f9f9' : '#231f20'
        const activeTabBg = darkMode ? '#475569' : '#cbd5e1'

        const homeBg = activeTab === 'Home' ? activeTabBg : 'none'
        const trendingBg = activeTab === 'Trending' ? activeTabBg : 'none'
        const gamingBg = activeTab === 'Gaming' ? activeTabBg : 'none'
        const savedBg = activeTab === 'Saved' ? activeTabBg : 'none'

        const homeIcon = darkMode ? (
          <AiFillHome size={16} color="#ffffff" />
        ) : (
          <AiFillHome size={16} color="#181818" />
        )

        const trendingIcon = darkMode ? (
          <HiFire size={16} color="#ffffff" />
        ) : (
          <HiFire size={16} color="#181818" />
        )

        const gamingIcon = darkMode ? (
          <SiYoutubegaming size={16} color="#ffffff" />
        ) : (
          <SiYoutubegaming size={16} color="#181818" />
        )

        const savedIcon = darkMode ? (
          <CgPlayListAdd size={16} color="#ffffff" />
        ) : (
          <CgPlayListAdd size={16} color="#181818" />
        )

        const onChangeTab = () => {
          changeActiveTab('Home')
        }

        const onChangeTabTrending = () => {
          changeActiveTab('Trending')
        }

        const onChangeTabGaming = () => {
          changeActiveTab('Gaming')
        }

        const onChangeTabSaved = () => {
          changeActiveTab('Saved')
        }

        return (
          <SideNavbarContainer bgColor={bgColor}>
            <SideNavbarList>
              <NavLink to="/">
                <HomeRoute
                  activeTabBg={homeBg}
                  key="home"
                  onClick={onChangeTab}
                >
                  {homeIcon}
                  <HomeLabel textColor={textColor}>Home</HomeLabel>
                </HomeRoute>
              </NavLink>

              <NavLink to="/trending">
                <HomeRoute
                  activeTabBg={trendingBg}
                  key="trending"
                  onClick={onChangeTabTrending}
                >
                  {trendingIcon}
                  <HomeLabel textColor={textColor}>Trending</HomeLabel>
                </HomeRoute>
              </NavLink>

              <NavLink to="/gaming">
                <HomeRoute
                  activeTabBg={gamingBg}
                  key="gaming"
                  onClick={onChangeTabGaming}
                >
                  {gamingIcon}
                  <HomeLabel textColor={textColor}>Gaming</HomeLabel>
                </HomeRoute>
              </NavLink>

              <NavLink to="/saved-videos">
                <HomeRoute
                  activeTabBg={savedBg}
                  key="saved"
                  onClick={onChangeTabSaved}
                >
                  {savedIcon}
                  <HomeLabel textColor={textColor}>Saved videos</HomeLabel>
                </HomeRoute>
              </NavLink>
            </SideNavbarList>

            <SideNavbarContactUsContainer textColor={textColor}>
              <SideNavbarContactUsHeading>
                CONTACT US
              </SideNavbarContactUsHeading>
              <IconsContainer>
                <IconImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <IconImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <IconImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </IconsContainer>
              <ContactUsDescription>
                Enjoy! Now to see your channels and recommendations!
              </ContactUsDescription>
            </SideNavbarContactUsContainer>
          </SideNavbarContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderSuccessView = () => {
    const {allVideos} = this.state
    console.log(allVideos)
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkMode} = value

          const gamingIcon = darkMode ? (
            <SiYoutubegaming size={30} color="#3b82f6" />
          ) : (
            <SiYoutubegaming size={30} color="red" />
          )

          const bgColor1 = darkMode ? '#181818' : '#f8fafc'
          return (
            <AllHomeContainer>
              {this.renderSideNavbar()}
              <HomeContainer bgColor={bgColor1}>
                <TrendingContainer>
                  {gamingIcon}
                  <TrendingHeading isDarkMode={darkMode}>
                    Gaming
                  </TrendingHeading>
                </TrendingContainer>
                <UnorderListGaming>
                  {allVideos.map(eachVideo => (
                    <GameVideoDetails
                      key={eachVideo.id}
                      videoDetails={eachVideo}
                    />
                  ))}
                </UnorderListGaming>
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

export default Gaming
