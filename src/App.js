import { useState } from "react";

// ─── MENU ───────────────────────────────────────────────
const MENU = [
  { id: 1, category: "Café", name: "Espresso", price: 2, emoji: "☕"},
  { id: 2, category: "Café", name: "Cappucin", price: 3, emoji: "☕" },
  { id: 3, category: "Café", name: "Cafe creme", price: 3.5, emoji: "☕"},
  { id: 4, category: "Café", name: "Noisette", price: 5, emoji: "☕"},
  { id: 5, category: "Café", name: "Caaramel", price: 5, emoji: "☕"},
  { id: 6, category: "Café", name: "Nescafe", price: 4, emoji: "☕"},
  { id: 7, category: "Café", name: "Americain", price: 3, emoji: "☕"},
  { id: 8, category: "Café", name: "Chocolat au lait", price: 0, emoji: "☕"},
  { id: 9, category: "Café", name: "Chocolat chaud", price: 5, emoji: "☕"},
  { id: 10, category: "Café", name: "Chocolat chaud chantilly", price: 0, emoji: "☕"},
  { id: 11, category: "Café", name: "Chocolat chaud fruits secs", price: 0, emoji: "☕"},
  { id: 12, category: "Café", name: "Cappuccino", price: 5, emoji: "☕"},
  { id: 13, category: "Café", name: "Cappuccino chantilly", price: 0, emoji: "☕"},
  { id: 14, category: "Café", name: "Chocoline", price: 3.5 , emoji: "☕"},
  { id: 15, category: "Café", name: "Liegois", price: 5, emoji: "☕"},
  { id: 16, category: "Café", name: "Cafe special ", price: 3.5, emoji: "☕"},
  { id: 17, category: "Café", name: "Cafe creme special ", price: 0, emoji: "☕"},
  { id: 18, category: "Café", name: "Cafe glacé", price: 5, emoji: "☕"},
  { id: 19, category: "Café", name: "Cafe turc", price: 5, emoji: "☕"},
  { id: 20, category: "Jus", name: "Jus de orange", price: 0, emoji: "☕"},
  { id: 21, category: "Jus", name: "Citronade", price: 3, emoji: "☕"},
  { id: 22, category: "Jus", name: "Jus de Citronade a la menthe", price: 3.5, emoji: "☕"},
  { id: 23, category: "Jus", name: "Citronade grenadine", price: 3.5, emoji: "☕"},
  { id: 24, category: "Jus", name: "Jus de kiwi & peche", price: 0, emoji: "☕"},
  { id: 25, category: "Jus", name: "Jus de fraise", price: 5, emoji: "☕"},
  { id: 26, category: "Jus", name: "Jus de figue", price: 0, emoji: "☕"},
  { id: 27, category: "Mojito", name: "Blue mojito", price: 6, emoji: "☕"},
  { id: 28, category: "Mojito", name: "Mojito fraise", price: 6, emoji: "☕"},
  { id: 29, category: "Mojito", name: "Mojito Ananas", price: 6, emoji: "☕"},
  { id: 30, category: "Mojito", name: "Mojito exotique", price: 6, emoji: "☕"},
  { id: 31, category: "Mojito", name: "Mojito pasteque", price: 6, emoji: "☕"},
  { id: 32, category: "Mojito", name: "Mojito framboise", price: 6, emoji: "☕"},
  { id: 33, category: "Mojito", name: "Mojito fruit de passion", price: 6, emoji: "☕"},
  { id: 34, category: "Mojito", name: "Mojito virgin", price: 6, emoji: "☕"},
  { id: 35, category: "Milk Shake", name: "Milk Shake fraise", price: 6, emoji: "☕"},
  { id: 36, category: "Milk Shake", name: "Milk Shake chocolat", price: 6, emoji: "☕"},
  { id: 37, category: "Milk Shake", name: "Milk Shake citron", price: 6, emoji: "☕"},
  { id: 38, category: "Milk Shake", name: "Milk Shake pistache", price: 6, emoji: "☕"},
  { id: 39, category: "Milk Shake", name: "Milk Shake caramel", price: 6, emoji: "☕"},
  { id: 40, category: "Milk Shake", name: "Milk Shake vanille", price: 6, emoji: "☕"},
  { id: 41, category: "Milk Shake", name: "Milk Shake noisette", price: 6, emoji: "☕"},
  { id: 42, category: "Milk Shake", name: "Milk Shake fruits sec", price: 8, emoji: "☕"},
  { id: 43, category: "Thé", name: "Thé simple", price: 2, emoji: "☕"},
  { id: 44, category: "Thé", name: "Thé a la menthe", price: 2.5, emoji: "☕"},
  { id: 45, category: "Thé", name: "Thé amande", price: 4, emoji: "☕"},
  { id: 46, category: "Thé", name: "Thé Pignon", price: 5, emoji: "☕"},
  { id: 47, category: "Thé", name: "Thé baklawa", price: 6, emoji: "☕"},
  { id: 48, category: "Glaces", name: "Glaces 2 boules", price: 4, emoji: "☕"},
  { id: 49, category: "Glaces", name: "Glaces 3 boules", price: 5, emoji: "☕"},
  // BOISSONS
  { id: 50, category: "Boisson", name: "Eau 1L", price: 1.5, emoji: "🥤" },
  { id: 51, category: "Boisson", name: "Canette Fanta", price: 2.5, emoji: "🥤" },
  { id: 52, category: "Boisson", name: "Canette Coca", price: 2.5, emoji: "🥤" },
  { id: 53, category: "Boisson", name: "Canette Apla", price: 2.5, emoji: "🥤" },
  { id: 54, category: "Boisson", name: "Canette Boga", price: 2.5, emoji: "🥤" },
  { id: 55, category: "Boisson", name: "Canette Sprite", price: 2.5, emoji: "🥤" },
  { id: 56, category: "Boisson", name: "Boga Menthe", price: 3, emoji: "🥤" },
  // DESSERTS
  { id: 57, category: "Dessert", name: "Fondant Chocolat", price: 0, emoji: "🍰" },
  { id: 58, category: "Dessert", name: "Cheesecake", price: 0, emoji: "🍰" },
  { id: 59, category: "Dessert", name: "Tiramisu", price: 6, emoji: "🍰" },
  // CRÊPES
  { id: 60, category: "Crêpe", name: "Crêpe Chocolat", price: 7, emoji: "🥞" },
  { id: 61, category: "Crêpe", name: "Crêpe Nutella", price: 9, emoji: "🥞" },
  { id: 62, category: "Crêpe", name: "Crêpe Chocolat Fruits Secs", price: 10, emoji: "🥞" },
  { id: 63, category: "Crêpe", name: "Crêpe Noisette", price: 11, emoji: "🥞" },
  { id: 64, category: "Crêpe", name: "Crêpe Spéciale", price: 12, emoji: "🥞" },
  { id: 65, category: "Crêpe", name: "Crêpe Banane Nutella", price: 12, emoji: "🥞" },
  // CHICHA
  { id: 66, category: "Chicha", name: "Chicha Pomme Fekher", price: 7, emoji: "💨" },
  { id: 67, category: "Chicha", name: "Chicha Love Fekher", price: 7, emoji: "💨" },
  { id: 68, category: "Chicha", name: "Chicha Raisin Fekher", price: 7, emoji: "💨" },
  { id: 69, category: "Chicha", name: "Chicha Menthe Fekher", price: 7.5, emoji: "💨" },
  { id: 70, category: "Chicha", name: "Chicha Glason", price: 9, emoji: "💨" },
  // CRÊPES SALÉES
  { id: 71, category: "Crêpe", name: "Crêpe Buffalo", price: 8.5, emoji: "🌯" },
  { id: 72, category: "Crêpe", name: "Crêpe Thon Fromage", price: 8.5, emoji: "🌯" },
];

const formatPrice = (p) => Number(p).toFixed(2) + " DT";

export default function App() {
  const categories = [...new Set(MENU.map((i) => i.category))];
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filtered = MENU.filter((i) => i.category === activeCategory);

  return (
    <div style={{ minHeight: "100vh", background: "#FDF6EC", fontFamily: "'Georgia', serif", paddingBottom: 40 }}>
      {/* En-tête */}
      <div style={{ background: "#1A0F00", padding: "24px 20px 18px", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 40, marginBottom: 4 }}>☕</div>
          <h1 style={{ color: "#F5E6C8", margin: 0, fontSize: 26, fontWeight: 700, letterSpacing: "-0.5px" }}>Café Lumière</h1>
          <p style={{ color: "#8C6B3E", margin: "4px 0 0", fontSize: 13, fontStyle: "italic" }}>Notre carte</p>
        </div>

        {/* Onglets catégories */}
        <div style={{ display: "flex", gap: 8, overflowX: "auto", marginTop: 18, maxWidth: 600, margin: "18px auto 0", paddingBottom: 4 }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: activeCategory === cat ? "#C8882A" : "transparent",
                color: activeCategory === cat ? "#FFF" : "#8C6B3E",
                border: activeCategory === cat ? "none" : "1px solid #4A3000",
                borderRadius: 20,
                padding: "7px 16px",
                fontSize: 13,
                cursor: "pointer",
                whiteSpace: "nowrap",
                fontFamily: "inherit",
                flexShrink: 0,
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Liste des articles (lecture seule) */}
      <div style={{ padding: 16, maxWidth: 600, margin: "0 auto", display: "grid", gap: 12 }}>
        {filtered.map((item) => (
          <div
            key={item.id}
            style={{
              background: "#FFF",
              borderRadius: 16,
              padding: "16px",
              display: "flex",
              alignItems: "center",
              gap: 14,
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ fontSize: 36, width: 52, textAlign: "center" }}>{item.emoji}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 16, color: "#1A0F00" }}>{item.name}</div>
            </div>
            <div style={{ color: "#C8882A", fontWeight: 700, fontSize: 16 }}>{formatPrice(item.price)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}