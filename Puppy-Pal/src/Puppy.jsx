import "./App.css";
function Puppy({ name, onClick, selected }) {
  return (
    <div className={`puppy-name ${selected ? "selected" : ""}`}>
      <ul>
        <li onClick={onClick}>{name}</li>
      </ul>
    </div>
  );
}

export default Puppy;
