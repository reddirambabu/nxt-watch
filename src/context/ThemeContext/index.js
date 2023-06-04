import React from 'react'

const ThemeContext = React.createContext({
  darkMode: false,
  activeTab: 'Home',
  changeTheme: () => {},
  changeActiveTab: () => {},
})

export default ThemeContext
