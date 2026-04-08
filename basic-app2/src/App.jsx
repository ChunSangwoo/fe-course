import style from "./assets/Avatar.module.css";
import Avatar from "../src/components/Avatar";
import people1 from "./assets/people1.webp";
import people2 from "./assets/people2.webp";
import people3 from "./assets/people3.webp";
import AvatarImage from "./components/AvatarImage";

function App() {
  return (
    <>
      <AvatarImage img={people1} style={style.avatar_list} />
      <Avatar img={people2} name="James" style={style.avatar} />
    </>
  );
}

export default App;
