import ListItem from "../ListItem";

export default function PackingList({ items, handleToggle, handleDelete }) {
  const listItems = items.map((item) => (
    <ListItem
      id={item.id}
      quantity={item.quantity}
      item={item.description}
      packed={item.packed}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
    />
  ));

  return (
    <div className="list">
      <ul>{listItems}</ul>
    </div>
  );
}
