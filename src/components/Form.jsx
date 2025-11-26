import { useState } from "react";

export default function Form({ onAddItem }) {
  const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddItem(event, quantity, description);
    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={(event) => handleSubmit(event)}>
      <h3>What do you need for your 😍 trip? </h3>
      <input
        type="number"
        min="1"
        max="50"
        name="quantity"
        id="quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <input
        type="text"
        placeholder="Item..."
        name="description"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
