import { useState, useEffect } from 'react';
import { API } from '../../constants/api.js';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import GameItem from './GameItem.jsx';

export default function GameList() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    console.log('I should fire just once');
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
      <h1 className="text-5xl text-center">Games</h1>
      <h2 className="text-lg text-center mt-6">Note: This API endpoint is sensitive to 429 errors</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-5 p-6">
        {games.map(({ id, name, image, genre, released }) => {
          return <GameItem key={id} id={id} name={name} image={image} genre={genre} released={released} />;
        })}
      </div>
    </>
  );
}
