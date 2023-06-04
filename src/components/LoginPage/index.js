import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import {
  LoginContainer,
  LoginForm,
  InputField,
  Label,
  Input,
  Image,
  CheckBoxContainer,
  Checkbox,
  CheckboxLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    isShowPassword: false,
    isShowError: false,
    errorMsg: '',
  }

  onSubmitSuccess = token => {
    const {history} = this.props
    Cookies.set('jwtToken', token, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, isShowError: true})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(loginApiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangePasswordStatus = () => {
    this.setState(previous => ({isShowPassword: !previous.isShowPassword}))
  }

  render() {
    const jwtToken = Cookies.get('jwtToken')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkMode, bgColor} = value
          const {
            password,
            username,
            isShowPassword,
            isShowError,
            errorMsg,
          } = this.state

          const passwordType = isShowPassword ? 'text' : 'password'
          const activeImageSrc =
            darkMode === true
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginContainer bgColor={bgColor}>
              <LoginForm bgColor={bgColor} onSubmit={this.onSubmitForm}>
                <Image src={activeImageSrc} alt="logo" />
                <InputField>
                  <Label htmlFor="userName">USERNAME</Label>
                  <Input
                    type="text"
                    id="userName"
                    onChange={this.onChangeUsername}
                    placeholder="Username"
                    value={username}
                  />
                </InputField>

                <InputField>
                  <Label htmlFor="passWord">PASSWORD</Label>
                  <Input
                    type={passwordType}
                    id="passWord"
                    onChange={this.onChangePassword}
                    placeholder="Password"
                    value={password}
                  />
                </InputField>
                <CheckBoxContainer>
                  <Checkbox
                    id="checkbox"
                    type="checkbox"
                    onClick={this.onChangePasswordStatus}
                  />
                  <CheckboxLabel htmlFor="checkbox" isDarkMode={darkMode}>
                    Show Password
                  </CheckboxLabel>
                </CheckBoxContainer>
                <LoginButton type="submit">Login</LoginButton>
                {isShowError === true ? <ErrorMsg>*{errorMsg}</ErrorMsg> : null}
              </LoginForm>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginPage
