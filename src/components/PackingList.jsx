import ListItem from "./ListItem";
import { useState } from "react";

export default function PackingList({ items, onToggleCheck, onDeleteItem, onDeleteItems }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") { sortedItems = items; }

  if (sortBy === "description") {
    sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  const listItems = sortedItems.map((item) => (
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
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={() => onDeleteItems()}>Clear list</button>
      </div>
    </div>
  );
}
