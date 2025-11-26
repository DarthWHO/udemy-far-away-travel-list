import ListItem from "./ListItem";

export default function PackingList({ items, onToggleCheck, onDeleteItem }) {
  const listItems = items.map((item) => (
    <ListItem
      key={item.id}
      id={item.id}
      quantity={item.quantity}
      item={item.description}
      packed={item.packed}
      onToggleCheck={onToggleCheck}
      onDeleteItem={onDeleteItem}
    />
  ));

  return (
    <div className="list">
      <ul>{listItems}</ul>
    </div>
  );
}
