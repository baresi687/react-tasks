import { Link, redirect, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API } from '../../constants/api.js';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';

export default function GameDetails() {
  const [game, setGame] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const url = API + `/${id}`;

  useEffect(
    function () {
      console.log('I should fire just once');
      async function fetchData() {
        try {
          if (!id) {
            return redirect('/');
          } else {
            const response = await fetch(url);

            if (response.ok) {
              const responseJSON = await response.json();
              setGame(responseJSON);
            } else {
              setError('An error occurred');
            }
          }
        } catch (error) {
          setError('An error occurred');
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    },
    [id, url]
  );

  if (loading) {
    return (
      <Box className="flex justify-center">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Stack>
        <Alert severity="error">Something went wrong.. please try again later</Alert>
      </Stack>
    );
  }

  return (
    <>
      <Link className="text-blue-500" to="/">
        Go back to Games
      </Link>
      <div className="max-w-md flex flex-col gap-4 mx-auto">
        <h1 className="text-2xl">{game.name}</h1>
        <img src={game.image} alt={game.name} />
        <p>{game.description}</p>
        <small>Genres: {game.genre.join(', ')}</small>
        <small>Released: {game.released}</small>
      </div>
    </>
  );
}
