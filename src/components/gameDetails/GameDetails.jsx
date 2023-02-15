import { Link } from 'react-router-dom';
export default function GameDetails() {
  return (
    <>
      <Link className="text-blue-500" to="/">
        Go back to Games
      </Link>
      <div className="my-8">Game Details</div>
    </>
  );
}
