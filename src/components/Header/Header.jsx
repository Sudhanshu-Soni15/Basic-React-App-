import reactImg from "../../assets/img.png";
//we are inside the component folder now so  ".." is used to get outside the component folder means inside the src then assests folder for the image
import "./Header.css";

let readDecriptions = ["Fundamental", "Core", "Crucial"];

function genRandomindex(max) {
  return Math.floor(Math.random() * (max + 1));
}
// gives a random index for the read decriptions array

export default function Header() {
  const decription = readDecriptions[genRandomindex(2)];

  return (
    <header>
      {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}

      <img src={reactImg} alt="Stylized atom" />
      {/* another way to import react img  */}

      <h1>React Essentials</h1>
      <p>
        {decription} React concepts you will need for almost any app you are
        going to build!
        {/* for dynamic values- values that can change on runtime these are used - "{}" */}
      </p>
    </header>
  );
}
