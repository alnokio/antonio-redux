import { Link } from "react-router-dom"

const GameCarousel = ({ games }) => {
  if (games.length === 0) {
    return <div className="text-center">Cargando...</div>
  }

  return (
    <div id="gameCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {games.map((game, index) => (
          <div key={game.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img
              src={game.background_image || "/placeholder.svg"}
              className="d-block w-100"
              alt={game.name}
              style={{ height: "400px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>{game.name}</h3>
              <Link to={`/game/${game.id}`} className="btn btn-primary mt-2">
                DETALLES
              </Link>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#gameCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#gameCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Más</span>
      </button>
    </div>
  )
}

export default GameCarousel

