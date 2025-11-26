import { useState } from "react";
import "./App.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const packItems = [
  {
    id: crypto.randomUUID(),
    description: "Passports",
    quantity: 2,
    packed: false,
  },
  {
    id: crypto.randomUUID(),
    description: "Socks",
    quantity: 12,
    packed: false,
  },
  {
    id: crypto.randomUUID(),
    description: "Charger",
    quantity: 1,
    packed: true,
  },
];

function App() {
  const [items, setItems] = useState(packItems);
  console.log(items);

  const handleAddItem = (event, quantity, description) => {
    event.preventDefault();
    setItems((items) => [
      ...items,
      {
        id: crypto.randomUUID(),
        description,
        quantity,
        packed: false,
      },
    ]);
  };

  const handleToggle = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleDeleteItems = () => {
    setItems([]);
  }

  const countedItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onToggleCheck={handleToggle}
        onDeleteItem={handleDelete}
        onDeleteItems={handleDeleteItems} 
      />
      <Stats countedItems={countedItems} packedItems={packedItems} />
    </div>
  );
}

export default App;
