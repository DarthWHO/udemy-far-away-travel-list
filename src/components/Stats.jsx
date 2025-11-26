export default function Stats({ countedItems, packedItems }) {
  if (countedItems === 0) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 📝</em>
      </footer>
    );
  }

  const percentage = !packedItems
    ? 0
    : Math.round((packedItems / countedItems) * 100);

  const message =
    packedItems === countedItems && countedItems > 0
      ? "You got everything! Ready to go ✈️"
      : `📝 You have ${countedItems} items on your list and you have packed ${packedItems} (${percentage}%)`;

  return (
    <footer className="stats">
      <em>{message}</em>
    </footer>
  );
}
