export default function Stats({countedItems, packedItems}) {
  const percentage = !packedItems ? 0 : Math.round((packedItems / countedItems) * 100);
  return (
    <footer className="stats">
      <em>
        📝 You have {countedItems} items on your list and you have packed {packedItems} ({percentage}%){" "}
      </em>
    </footer>
  );
}
