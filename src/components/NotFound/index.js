import './index.css'
import Header from '../Header'

const NotFound = () => (
  <div className="container">
    <Header />
    <div className="notfound-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="notfound"
      />
      <h1 className="head">Lost Your Way?</h1>
      <p className="description">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </div>
)

export default NotFound
