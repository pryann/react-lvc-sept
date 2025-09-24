import '../assets/css/MainNavigation.css'
import PropTypes from 'prop-types'

MainNavigation.propTypes = {
  title: PropTypes.string.isRequired,
}

function MainNavigation(props) {
  const { title } = props

  return (
    <nav className="main-navigation">
      <ul className="main-navigation__list">
        <li className="main-navigation__item">
          <a href="/" className="main-navigation__link">
            {title}
          </a>
        </li>
        <li className="main-navigation__item">
          <a href="https://training360.com" className="main-navigation__link">
            Training360
          </a>
        </li>
        <li className="main-navigation__item">
          <a href="https://reactjs.org" className="main-navigation__link">
            React
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default MainNavigation
