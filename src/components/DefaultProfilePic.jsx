import examplePic from "../assets/example.png";
export default function DefaultProfilePic({ altText }) {
  return <img src={examplePic} alt={altText} />;
}
