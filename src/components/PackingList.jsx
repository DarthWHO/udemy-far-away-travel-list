import ListItem from "../ListItem";

export default function PackingList({ items, handleToggle }) {
  const listItems = items.map((item) => (
    <ListItem
      id={item.id}
      quantity={item.quantity}
      item={item.description}
      packed={item.packed}
      handleToggle={handleToggle}
    />
  ));

  return (
    <div className="list">
      <ul>{listItems}</ul>
    </div>
  );
}
