import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function GameItem({ id, name, image, genre, released }) {
  return (
    <div>
      <Link to={`/game-details/${id}`}>
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
      </Link>
    </div>
  );
}

GameItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  genre: PropTypes.array.isRequired,
};

GameItem.defaultProps = {
  released: 'Unknown',
};
