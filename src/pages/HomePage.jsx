import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { fetchPopularGames } from "../services/api"
import GameCarousel from "../components/GameCarousel"

const HomePage = () => {
  const [popularGames, setPopularGames] = useState([])

  useEffect(() => {
    const loadPopularGames = async () => {
      const games = await fetchPopularGames(5)
      setPopularGames(games)
    }
    loadPopularGames()
  }, [])

  return (
    <div className="container py-5">
      <h1 className="display-4 mb-4">Encuentra el juego que buscas</h1>
      <GameCarousel games={popularGames} />
      <section className="mt-5">
        <h2 className="h3 mb-3">Explora los videojuegos</h2>
        <p className="lead mb-4">
          Aquí encontrarás todo lo que necesitas saber tus videojuegos favoritos.
        </p>
        <Link to="/juegos" className="btn btn-primary btn-lg"> {/* cambiado games */}
          Start Exploring
        </Link>
      </section>
    </div>
  )
}

export default HomePage

