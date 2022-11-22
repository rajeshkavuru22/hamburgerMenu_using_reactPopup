import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="container">
    <Header />
    <div className="Home">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
        className="image"
      />
    </div>
  </div>
)

export default Home
