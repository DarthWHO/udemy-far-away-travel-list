export default function ListItem({ id, quantity, item, packed, handleToggle }) {
  const handleChange = (e) => {
    console.log("Toggling item with id:", id);
    e.preventDefault();
    handleToggle(id);
  };

  return (
    <li key={id}>
      <input type="checkbox" checked={packed} onChange={handleChange} />
      <span
        style={
          packed
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {quantity} {item}
      </span>
      <button>❌</button>
    </li>
  );
}
