export default function TabButton({ children, onSelect, isSelected }) {
  // children is a built in prop so name should be children only
  // function handleCliclk() {
  //   console.log("hello World");
  // }

  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}{" "}
      </button>
    </li>
  );
}
