import "./Header.css";
import img01 from "../assets/images/img01.png";

export default function Header() {
  return (
    <header className="header">
      <img src={img01} alt="person" width="200px" />
      <h1>Header</h1>
    </header>
  );
}
