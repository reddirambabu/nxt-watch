import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'
import './App.css'

import LoginPage from './components/LoginPage'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import ActiveVideoDetails from './components/ActiveVideoDetails'

class App extends Component {
  state = {darkMode: false, activeTab: 'Home'}

  changeActiveTab = tab => {
    this.setState({activeTab: tab})
  }

  changeTheme = () => {
    this.setState(previous => ({darkMode: !previous.darkMode}))
  }

  render() {
    const {darkMode, activeTab} = this.state
    const bgColor = darkMode ? '#0f0f0f' : '#ffffff'
    return (
      <ThemeContext.Provider
        value={{
          darkMode,
          changeTheme: this.changeTheme,
          bgColor,
          activeTab,
          changeActiveTab: this.changeActiveTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={ActiveVideoDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}
export default App
