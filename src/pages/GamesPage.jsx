"use client"

import { useState, useEffect } from "react"
import { fetchGames, searchGames } from "../services/api"
import GameCard from "../components/GameCard"
import Pagination from "../components/Pagination"

const GamesPage = () => {
  const [games, setGames] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    const loadGames = async () => {
      const result = await fetchGames(currentPage)
      setGames(result.results)
      setTotalPages(Math.ceil(result.count / 20))
    }
    loadGames()
  }, [currentPage])

  const handleSearch = async (e) => {
    e.preventDefault()
    if (searchTerm) {
      const result = await searchGames(searchTerm, 1)
      setGames(result.results)
      setTotalPages(Math.ceil(result.count / 20))
      setCurrentPage(1)
    }
  }

  return (
    <div className="container py-5">
      <h1 className="display-4 mb-4">Explore Games</h1>
      <form onSubmit={handleSearch} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for games..."
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {games.map((game) => (
          <div key={game.id} className="col">
            <GameCard game={game} />
          </div>
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  )
}

export default GamesPage

