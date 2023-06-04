import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BiLogIn} from 'react-icons/bi'
import {GrFormClose} from 'react-icons/gr'

import {
  NavContainer,
  NavbarLogo,
  ThemeIcon,
  IconsContainer,
  MenuIcon,
  LogoutIcon,
  ProfileImage,
  LogoutButton,
  ProfileImageButton,
  CloseButton,
  NavLink,
  LinkItems,
  LinkItem,
  PopItem,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const Header = props => {
  const onClickLogOut = () => {
    const {history} = props
    Cookies.remove('jwtToken')
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkMode, changeTheme, changeActiveTab} = value

        const onChangeTheme = () => {
          changeTheme()
        }

        const darkModeThemeImageIcon = darkMode ? (
          <BsBrightnessHigh size={25} color="#ffffff" />
        ) : (
          <BsMoon size={25} />
        )

        const darkModeHamburgerMenu = darkMode ? (
          <GiHamburgerMenu size={25} color="#ffffff" />
        ) : (
          <GiHamburgerMenu size={25} />
        )

        const darkModeLogOut = darkMode ? (
          <BiLogIn size={25} color="#ffffff" />
        ) : (
          <BiLogIn size={25} />
        )

        const activeImageSrc = darkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const theme = darkMode ? '#0f0f0f' : '#ffffff'

        const onChangeTab = () => {
          changeActiveTab('Home')
        }

        return (
          <NavContainer bgColor={theme}>
            <Link to="/">
              <NavbarLogo
                src={activeImageSrc}
                alt="logo"
                onClick={onChangeTab}
              />
            </Link>
            <IconsContainer>
              <ThemeIcon onClick={onChangeTheme}>
                {darkModeThemeImageIcon}
              </ThemeIcon>

              <Popup
                model
                trigger={<MenuIcon>{darkModeHamburgerMenu}</MenuIcon>}
                className="popup-content"
              >
                {close => (
                  <PopItem>
                    <CloseButton onClick={() => close()}>
                      <GrFormClose size={25} />
                    </CloseButton>
                    <LinkItems>
                      <NavLink to="/">
                        <LinkItem>Home</LinkItem>
                      </NavLink>
                      <NavLink to="/trending">
                        <LinkItem>Trending</LinkItem>
                      </NavLink>
                      <NavLink to="/gaming">
                        <LinkItem>Gaming</LinkItem>
                      </NavLink>
                      <NavLink to="/saved-videos">
                        <LinkItem>Saved videos</LinkItem>
                      </NavLink>
                    </LinkItems>
                  </PopItem>
                )}
              </Popup>

              <LogoutIcon onClick={onClickLogOut}>{darkModeLogOut}</LogoutIcon>
              <ProfileImageButton>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </ProfileImageButton>

              <LogoutButton isDarkMode={darkMode} onClick={onClickLogOut}>
                Logout
              </LogoutButton>
            </IconsContainer>
          </NavContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
