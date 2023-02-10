import { useState, useEffect } from 'react';
import { API } from '../constants/api.js';

export default function GameList() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(API);

        if (response.ok) {
          const responseJSON = await response.json();
          setGames(responseJSON);
        } else {
          setError('An error occurred');
        }
      } catch (error) {
        setError('An error occurred');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading... </div>;
  }

  if (error) {
    return <div>An error occurred</div>;
  }

  return (
    <>
      {games.map((game) => {
        return (
          <div key={game.id}>
            <h2>{game.name}</h2>
            <img src={game.image} alt={game.name} />
            <p>Genres: {game.genre.join(', ')}</p>
            <p>Release date: {game.released}</p>
          </div>
        );
      })}
    </>
  );
}
