export default function ListItem({
  id,
  quantity,
  item,
  packed,
  onToggleCheck,
  onDeleteItem,
}) {
  return (
    <li>
      <input
        type="checkbox"
        checked={packed}
        onChange={() => onToggleCheck(id)}
      />
      <span
        style={
          packed
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {quantity} {item}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
}
