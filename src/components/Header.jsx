import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-danger text-white py-3">
      <nav className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" className="text-white text-decoration-none">
            <h1 className="h4 m-0">AlnokioGaming</h1>
          </Link>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/games" className="nav-link text-white">
                Juegos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/publishers" className="nav-link text-white">
                Publishers
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header

