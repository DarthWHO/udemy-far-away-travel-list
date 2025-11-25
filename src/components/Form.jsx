export default function Form({ packItems, handleAddItem }) {
  const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const quantity = 1;
  const description = "";

  return (
    <form className="add-form">
      <h3>What do you need for your 😍 trip? </h3>
      <select name="quantity" id="quantity">
        {quantities.map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        name="description"
        id="description"
      />
      <button onClick={() => handleAddItem(quantity, description)}>Add</button>
    </form>
  );
}
