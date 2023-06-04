import ThemeContext from '../../context/ThemeContext'

import {
  GameItem,
  GameThumbnail,
  GameTitle,
  GameViewCount,
} from './styledComponents'

const GameVideoDetails = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails
  console.log(id)

  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkMode} = value

        return (
          <GameItem isDarkMode={darkMode}>
            <GameThumbnail src={thumbnailUrl} alt={title} />
            <GameTitle>{title}</GameTitle>
            <GameViewCount>{viewCount}</GameViewCount>
            <GameViewCount>Worldwide</GameViewCount>
          </GameItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GameVideoDetails
