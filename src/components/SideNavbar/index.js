import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import ThemeContext from '../../context/ThemeContext'

import {
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
} from './styledComponents'

const SideNavbar = () => (
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
              <HomeRoute activeTabBg={homeBg} key="home" onClick={onChangeTab}>
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
            <SideNavbarContactUsHeading>CONTACT US</SideNavbarContactUsHeading>
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

export default SideNavbar
