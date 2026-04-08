import AvatarImage from "./AvatarImage.jsx";

export default function Avatar({ name, img }) {
  return (
    <div className="style.avatar">
      <AvatarImage img={img} />
      <p>{name}</p>
    </div>
  );
}
