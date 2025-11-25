export default function ListItem({ id, item, quantity, packed, handleToggle, handleDelete }) {
  return (
    <li>
      <input type="checkbox" checked={packed} onChange={() => handleToggle(id)} />
      <span style={ packed ? { textDecoration: "line-through" } : { textDecoration: "none" } }>{quantity} {item}</span> 
      <button>❌</button>
    </li>
  );
} 
