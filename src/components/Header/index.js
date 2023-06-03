import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BiLogIn} from 'react-icons/bi'

import {
  NavContainer,
  NavbarLogo,
  ThemeIcon,
  IconsContainer,
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
        const {darkMode, changeTheme} = value

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

        return (
          <NavContainer bgColor={theme}>
            <Link to="/">
              <NavbarLogo src={activeImageSrc} alt="logo" />
            </Link>
            <IconsContainer>
              <ThemeIcon onClick={onChangeTheme}>
                {darkModeThemeImageIcon}
              </ThemeIcon>
              <ThemeIcon>{darkModeHamburgerMenu}</ThemeIcon>
              <ThemeIcon onClick={onClickLogOut}>{darkModeLogOut}</ThemeIcon>
            </IconsContainer>
          </NavContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
