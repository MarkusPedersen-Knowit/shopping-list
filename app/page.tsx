"use client";
import { useState, useEffect } from "react";
import { useShoppingList } from "./useShoppingList";

export default function Home() {
  const { items, loading, addItem, toggleItem, deleteItem } = useShoppingList();
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    if (!loading) {
      // Slett alle varer der "checked" er true
      items.forEach((item) => {
        if (item.checked) {
          deleteItem(item.id);
        }
      });
    }
  }, [loading]);

  if (loading) {
    return <div>Laster handleliste...</div>;
  }

  return (
    <main style={{ padding: "1rem" }}>
      <h1>Handleliste</h1>
      <div>
        <input
          type="text"
          placeholder="Legg til vare"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button
          onClick={() => {
            if (newItem.trim() !== "") {
              addItem(newItem);
              setNewItem("");
            }
          }}
        >
          Legg til
        </button>
      </div>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <label style={{ textDecoration: item.checked ? "line-through" : "" }}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => toggleItem(item.id, item.checked)}
              />
              {item.name}
            </label>
          </li>
        ))}
      </ul>
    </main>
  );
}
