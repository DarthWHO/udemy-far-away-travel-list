import ListItem from "../ListItem";

export default function PackingList({ packItems, handleToggle }) {
  const listItems = packItems.map((item) => (
    <ListItem
      key={item.id}
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
