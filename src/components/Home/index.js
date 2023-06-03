import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

// import {Link} from 'react-router-dom'
import {GrFormClose} from 'react-icons/gr'
import {BiSearchAlt2} from 'react-icons/bi'
import ThemeContext from '../../context/ThemeContext'
import HomeVideoDetails from '../HomeVideoDetails'
import Header from '../Header'

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
  SideNavbarContainer,
  SideNavbarList,
  HomeRoute,
  HomeLabel,
  NavLink,
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
    console.log(token)
    console.log(data)

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

      console.log(formattedArray)
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

          return (
            <SearchContainer>
              <SearchInput
                type="search"
                onChange={this.onChangeSearchInput}
                value={searchInput}
                isDarkMode={darkMode}
              />
              <SearchIconContainer>
                <BiSearchAlt2 fontSize="25px" onClick={this.searchContent} />
              </SearchIconContainer>
            </SearchContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderSideNavbar = () => (
    <ThemeContext.Consumer>
      {value => {
        const {darkMode, activeTab, changeActiveTab} = value
        console.log(darkMode, activeTab)
        const bgColor = darkMode ? '#231f20' : '#f1f5f9'
        const textColor = darkMode ? '#f9f9f9' : '#231f20'
        const activeTabBg = darkMode ? '#475569' : '#cbd5e1'

        const homeBg = activeTab === 'Home' ? activeTabBg : 'none'
        const trendingBg = activeTab === 'Trending' ? activeTabBg : 'none'
        const gamingBg = activeTab === 'Gaming' ? activeTabBg : 'none'
        const savedBg = activeTab === 'Saved' ? activeTabBg : 'none'

        const homeIcon = darkMode ? (
          <AiFillHome size={20} color="#ffffff" />
        ) : (
          <AiFillHome size={20} color="#181818" />
        )

        const trendingIcon = darkMode ? (
          <HiFire size={20} color="#ffffff" />
        ) : (
          <HiFire size={20} color="#181818" />
        )

        const gamingIcon = darkMode ? (
          <SiYoutubegaming size={20} color="#ffffff" />
        ) : (
          <SiYoutubegaming size={20} color="#181818" />
        )

        const savedIcon = darkMode ? (
          <CgPlayListAdd size={20} color="#ffffff" />
        ) : (
          <CgPlayListAdd size={20} color="#181818" />
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

              <NavLink to="/">
                <HomeRoute
                  activeTabBg={trendingBg}
                  key="trending"
                  onClick={onChangeTabTrending}
                >
                  {trendingIcon}
                  <HomeLabel textColor={textColor}>Trending</HomeLabel>
                </HomeRoute>
              </NavLink>

              <NavLink to="/">
                <HomeRoute
                  activeTabBg={gamingBg}
                  key="gaming"
                  onClick={onChangeTabGaming}
                >
                  {gamingIcon}
                  <HomeLabel textColor={textColor}>Gaming</HomeLabel>
                </HomeRoute>
              </NavLink>

              <NavLink to="/">
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
          </SideNavbarContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderSuccessView = () => {
    const {allVideos, isShowBanner} = this.state
    console.log(allVideos)
    return (
      <ThemeContext.Consumer>
        {value => {
          const {bgColor} = value
          return (
            <AllHomeContainer>
              {this.renderSideNavbar()}

              <HomeContainer bgColor={bgColor}>
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
