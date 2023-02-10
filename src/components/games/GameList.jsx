import { useState, useEffect } from 'react';
import { API } from '../../constants/api.js';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

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
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">Something went wrong.. please try again later</Alert>
      </Stack>
    );
  }

  return (
    <>
      {games.map(({ id, name, image, genre, released }) => {
        return (
          <div key={id}>
            <Card>
              <CardMedia className="h-[14rem]" component="img" image={image} alt={name} />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {name}
                </Typography>
                <Typography>
                  Genres: <strong>{genre.join(', ')}</strong>
                </Typography>
                <Typography>
                  Released: <strong>{released}</strong>
                </Typography>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </>
  );
}
