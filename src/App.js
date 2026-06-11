import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";

// ─── FIREBASE CONFIG ────────────────────────────────────
// Remplacez par votre propre configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBFxh-17qPx9__LEFdTP4c-LPJC9GAt7N8",
  authDomain: "cafe-723c2.firebaseapp.com",
  databaseURL: "https://cafe-723c2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cafe-723c2",
  storageBucket: "cafe-723c2.firebasestorage.app",
  messagingSenderId: "575348221600",
  appId: "1:575348221600:web:47ccd057abf6acb7d8cbc5"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

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

const TABLES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const formatPrice = (p) => Number(p).toFixed(2) + " €";
const now = () => new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });

export default function App() {
  const [view, setView] = useState("home");
  const [selectedTable, setSelectedTable] = useState(null);
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Café");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [notification, setNotification] = useState(null);

  const categories = [...new Set(MENU.map((i) => i.category))];

  const showNotif = (msg, type = "success") => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const addToCart = (item) => {
    setCart((prev) => {
      const ex = prev.find((c) => c.id === item.id);
      if (ex) return prev.map((c) => c.id === item.id ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { ...item, qty: 1 }];
    });
    showNotif(`${item.name} ajouté !`);
  };

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev.map((c) => c.id === id ? { ...c, qty: c.qty + delta } : c).filter((c) => c.qty > 0)
    );
  };

  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const placeOrder = () => {
    if (!cart.length || !selectedTable) return;
    const order = {
      id: Date.now(),
      table: selectedTable,
      items: cart.map((i) => ({ ...i, paid: false })),
      total: cartTotal,
      time: now(),
      status: "nouveau",
      statusHistory: [{ status: "nouveau", time: now() }],
    };

    // Push vers Firebase Realtime Database
    const ordersRef = ref(db, "orders");
    const newOrderRef = push(ordersRef);
    set(newOrderRef, order)
      .then(() => {
        setCart([]);
        setOrderPlaced(true);
        showNotif("Commande envoyée à la caisse !");
      })
      .catch((err) => {
        console.error("Erreur Firebase:", err);
        showNotif("Erreur d'envoi. Réessayez.", "error");
      });
  };

  // ─── HOME ───────────────────────────────────────────────
  if (view === "home") {
    return (
      <div style={{ minHeight: "100vh", background: "#1A0F00", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24, fontFamily: "'Georgia', serif" }}>
        <div style={{ textAlign: "center", maxWidth: 420 }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>☕</div>
          <h1 style={{ color: "#F5E6C8", fontSize: 42, fontWeight: 700, margin: "0 0 8px", letterSpacing: "-1px", lineHeight: 1 }}>Café Lumière</h1>
          <p style={{ color: "#B89A6A", fontSize: 16, marginBottom: 48, fontStyle: "italic" }}>Commandez depuis votre table</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <button onClick={() => setView("table-select")}
              style={{ background: "#C8882A", color: "#FFF8EE", border: "none", borderRadius: 14, padding: "18px 32px", fontSize: 17, fontWeight: 700, cursor: "pointer", letterSpacing: "0.02em", fontFamily: "inherit" }}>
              🪑 Commander à une table
            </button>
          </div>
          <p style={{ color: "#5C4020", fontSize: 13, marginTop: 40 }}>Scannez le QR Code de votre table pour commander</p>
        </div>
        {notification && <Notif n={notification} />}
      </div>
    );
  }

  // ─── TABLE SELECT ────────────────────────────────────────
  if (view === "table-select") {
    return (
      <div style={{ minHeight: "100vh", background: "#FDF6EC", fontFamily: "'Georgia', serif" }}>
        <TopBar title="Choisir votre table" onBack={() => setView("home")} />
        <div style={{ padding: 24, maxWidth: 480, margin: "0 auto" }}>
          <p style={{ color: "#8C6B3E", fontSize: 15, marginBottom: 24, textAlign: "center" }}>Sélectionnez votre numéro de table</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}>
            {TABLES.map((t) => (
              <button key={t} onClick={() => { setSelectedTable(t); setOrderPlaced(false); setView("menu"); }}
                style={{ background: "#1A0F00", color: "#F5E6C8", border: "none", borderRadius: 14, padding: "20px 0", fontSize: 22, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ─── MENU ────────────────────────────────────────────────
  if (view === "menu") {
    const filtered = MENU.filter((i) => i.category === activeCategory);
    return (
      <div style={{ minHeight: "100vh", background: "#FDF6EC", fontFamily: "'Georgia', serif", paddingBottom: 100 }}>
        <div style={{ background: "#1A0F00", padding: "20px 20px 16px", position: "sticky", top: 0, zIndex: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, maxWidth: 600, margin: "0 auto" }}>
            <button onClick={() => setView("table-select")} style={{ background: "none", border: "none", color: "#B89A6A", fontSize: 22, cursor: "pointer" }}>←</button>
            <div style={{ flex: 1 }}>
              <h2 style={{ color: "#F5E6C8", margin: 0, fontSize: 20, fontWeight: 700 }}>Café Lumière</h2>
              <p style={{ color: "#8C6B3E", margin: 0, fontSize: 13 }}>Table {selectedTable}</p>
            </div>
            <button onClick={() => setView("cart")}
              style={{ background: "#C8882A", color: "#FFF", border: "none", borderRadius: 24, padding: "10px 18px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: 6 }}>
              🛒 {cartCount > 0 && <span style={{ background: "#fff", color: "#C8882A", borderRadius: 10, padding: "0 6px", fontSize: 12, fontWeight: 800 }}>{cartCount}</span>}
              {formatPrice(cartTotal)}
            </button>
          </div>
          <div style={{ display: "flex", gap: 8, overflowX: "auto", marginTop: 14, maxWidth: 600, margin: "14px auto 0", paddingBottom: 4 }}>
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                style={{ background: activeCategory === cat ? "#C8882A" : "transparent", color: activeCategory === cat ? "#FFF" : "#8C6B3E", border: activeCategory === cat ? "none" : "1px solid #4A3000", borderRadius: 20, padding: "7px 16px", fontSize: 13, cursor: "pointer", whiteSpace: "nowrap", fontFamily: "inherit", flexShrink: 0 }}>
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div style={{ padding: 16, maxWidth: 600, margin: "0 auto", display: "grid", gap: 12 }}>
          {filtered.map((item) => {
            const inCart = cart.find((c) => c.id === item.id);
            return (
              <div key={item.id} style={{ background: "#FFF", borderRadius: 16, padding: "16px", display: "flex", alignItems: "center", gap: 14, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: 36, width: 52, textAlign: "center" }}>{item.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 16, color: "#1A0F00" }}>{item.name}</div>
                  <div style={{ color: "#C8882A", fontWeight: 700, fontSize: 16, marginTop: 6 }}>{formatPrice(item.price)}</div>
                </div>
                {inCart ? (
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <button onClick={() => updateQty(item.id, -1)} style={{ width: 32, height: 32, borderRadius: 8, border: "1.5px solid #E2C898", background: "#FFF8EE", color: "#C8882A", fontSize: 18, fontWeight: 700, cursor: "pointer" }}>−</button>
                    <span style={{ fontWeight: 700, color: "#1A0F00", minWidth: 20, textAlign: "center" }}>{inCart.qty}</span>
                    <button onClick={() => addToCart(item)} style={{ width: 32, height: 32, borderRadius: 8, border: "none", background: "#C8882A", color: "#FFF", fontSize: 18, fontWeight: 700, cursor: "pointer" }}>+</button>
                  </div>
                ) : (
                  <button onClick={() => addToCart(item)}
                    style={{ background: "#1A0F00", color: "#F5E6C8", border: "none", borderRadius: 10, padding: "10px 16px", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
                    Ajouter
                  </button>
                )}
              </div>
            );
          })}
        </div>
        {notification && <Notif n={notification} />}
      </div>
    );
  }

  // ─── CART ────────────────────────────────────────────────
  if (view === "cart") {
    if (orderPlaced) {
      return (
        <div style={{ minHeight: "100vh", background: "#FDF6EC", fontFamily: "'Georgia', serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32, textAlign: "center" }}>
          <div style={{ fontSize: 72, marginBottom: 20 }}>✅</div>
          <h2 style={{ color: "#1A0F00", fontSize: 28, fontWeight: 700, margin: "0 0 12px" }}>Commande envoyée !</h2>
          <p style={{ color: "#8C6B3E", fontSize: 16, maxWidth: 320 }}>Votre commande est transmise à la caisse. Vous serez servi très bientôt.</p>
          <div style={{ background: "#FFF", borderRadius: 14, padding: "16px 24px", margin: "24px 0", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
            <p style={{ color: "#8C6B3E", margin: 0, fontSize: 14 }}>Table</p>
            <p style={{ color: "#1A0F00", fontSize: 32, fontWeight: 700, margin: "4px 0" }}>{selectedTable}</p>
          </div>
          <button onClick={() => setView("menu")} style={{ background: "#C8882A", color: "#FFF", border: "none", borderRadius: 12, padding: "14px 28px", fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
            Commander autre chose
          </button>
        </div>
      );
    }

    return (
      <div style={{ minHeight: "100vh", background: "#FDF6EC", fontFamily: "'Georgia', serif" }}>
        <TopBar title={`Panier — Table ${selectedTable}`} onBack={() => setView("menu")} />
        <div style={{ padding: 16, maxWidth: 500, margin: "0 auto", paddingBottom: 120 }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: "center", padding: 48, color: "#8C6B3E" }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>🛒</div>
              <p>Votre panier est vide</p>
              <button onClick={() => setView("menu")} style={{ background: "#C8882A", color: "#FFF", border: "none", borderRadius: 10, padding: "12px 24px", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", marginTop: 8 }}>Voir le menu</button>
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} style={{ background: "#FFF", borderRadius: 14, padding: 16, marginBottom: 10, display: "flex", alignItems: "center", gap: 12, boxShadow: "0 2px 6px rgba(0,0,0,0.05)" }}>
                  <span style={{ fontSize: 28 }}>{item.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, color: "#1A0F00" }}>{item.name}</div>
                    <div style={{ color: "#C8882A", fontWeight: 700, fontSize: 15, marginTop: 2 }}>{formatPrice(item.price * item.qty)}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <button onClick={() => updateQty(item.id, -1)} style={{ width: 30, height: 30, borderRadius: 8, border: "1.5px solid #E2C898", background: "#FFF8EE", color: "#C8882A", fontSize: 16, fontWeight: 700, cursor: "pointer" }}>−</button>
                    <span style={{ fontWeight: 700, color: "#1A0F00", minWidth: 18, textAlign: "center" }}>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)} style={{ width: 30, height: 30, borderRadius: 8, border: "none", background: "#C8882A", color: "#FFF", fontSize: 16, fontWeight: 700, cursor: "pointer" }}>+</button>
                  </div>
                </div>
              ))}
              <div style={{ background: "#1A0F00", borderRadius: 16, padding: 20, marginTop: 16, position: "sticky", bottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", color: "#B89A6A", fontSize: 14, marginBottom: 4 }}>
                  <span>{cartCount} article{cartCount > 1 ? "s" : ""}</span>
                  <span>Total</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "#F5E6C8", fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
                  <span>Table {selectedTable}</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <button onClick={placeOrder}
                  style={{ width: "100%", background: "#C8882A", color: "#FFF", border: "none", borderRadius: 12, padding: "16px", fontSize: 17, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
                  Envoyer la commande →
                </button>
              </div>
            </>
          )}
        </div>
        {notification && <Notif n={notification} />}
      </div>
    );
  }

  return null;
}

function TopBar({ title, onBack }) {
  return (
    <div style={{ background: "#1A0F00", padding: "16px 20px", display: "flex", alignItems: "center", gap: 12, position: "sticky", top: 0, zIndex: 10 }}>
      <button onClick={onBack} style={{ background: "none", border: "none", color: "#B89A6A", fontSize: 22, cursor: "pointer", padding: 0 }}>←</button>
      <h2 style={{ color: "#F5E6C8", margin: 0, fontSize: 18, fontWeight: 700 }}>{title}</h2>
    </div>
  );
}

function Notif({ n }) {
  return (
    <div style={{ position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)", background: n.type === "success" ? "#1A0F00" : "#A32D2D", color: "#F5E6C8", padding: "12px 24px", borderRadius: 24, fontSize: 14, fontWeight: 600, zIndex: 999, boxShadow: "0 4px 16px rgba(0,0,0,0.25)", whiteSpace: "nowrap", fontFamily: "'Georgia', serif" }}>
      {n.msg}
    </div>
  );
}