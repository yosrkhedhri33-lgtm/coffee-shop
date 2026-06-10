import { useState } from "react";

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
  const [orders, setOrders] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Cafés chauds");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [notification, setNotification] = useState(null);
  const [cashierTab, setCashierTab] = useState("live");
  // Cashier detail state
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [splitMode, setSplitMode] = useState(false);
  const [splitSelected, setSplitSelected] = useState(new Set());
  const [totalRevenue, setTotalRevenue] = useState(0);

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
    setOrders((prev) => [order, ...prev]);
    setCart([]);
    setOrderPlaced(true);
    showNotif("Commande envoyée à la caisse !");
  };

  const updateOrderStatus = (id, status) => {
    if (status === "payé") {
      const order = orders.find((o) => o.id === id);
      if (order) {
        const amount = order.items.reduce((s, i) => s + i.price * i.qty, 0);
        setTotalRevenue((r) => r + amount);
        setOrders((prev) => prev.filter((o) => o.id !== id));
        if (selectedOrderId === id) {
          setSelectedOrderId(null);
          setSplitMode(false);
          setSplitSelected(new Set());
        }
        showNotif("Commande encaissée ✓");
      }
      return;
    }
    setOrders((prev) =>
      prev.map((o) =>
        o.id === id ? { ...o, status, statusHistory: [...o.statusHistory, { status, time: now() }] } : o
      )
    );
  };

  const toggleSplitItem = (itemId) => {
    setSplitSelected((prev) => {
      const next = new Set(prev);
      if (next.has(itemId)) next.delete(itemId);
      else next.add(itemId);
      return next;
    });
  };

  const paySelectedItems = () => {
    const order = orders.find((o) => o.id === selectedOrderId);
    if (!order) return;
    let paid = 0;
    const updatedItems = order.items.map((item) => {
      if (splitSelected.has(item.id) && !item.paid) {
        paid += item.price * item.qty;
        return { ...item, paid: true };
      }
      return item;
    });
    setTotalRevenue((r) => r + paid);
    setSplitSelected(new Set());
    const allPaid = updatedItems.every((i) => i.paid);
    if (allPaid) {
      setOrders((prev) => prev.filter((o) => o.id !== order.id));
      setSelectedOrderId(null);
      setSplitMode(false);
      showNotif("Table soldée entièrement ✓");
    } else {
      setOrders((prev) =>
        prev.map((o) => o.id === order.id ? { ...o, items: updatedItems } : o)
      );
      showNotif("Paiement partiel enregistré ✓");
    }
  };

  const liveOrders = orders.filter((o) => o.status !== "payé");
  const paidOrders = orders.filter((o) => o.status === "payé");

  const STATUS_CONFIG = {
    nouveau: { label: "Nouveau", color: "#E24B4A", bg: "#FCEBEB" },
    "en préparation": { label: "En préparation", color: "#BA7517", bg: "#FAEEDA" },
    prêt: { label: "Prêt", color: "#3B6D11", bg: "#EAF3DE" },
    servi: { label: "Servi", color: "#185FA5", bg: "#E6F1FB" },
    payé: { label: "Payé", color: "#5F5E5A", bg: "#F1EFE8" },
  };

  const StatusBadge = ({ status }) => {
    const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.nouveau;
    return (
      <span style={{ background: cfg.bg, color: cfg.color, fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 20, letterSpacing: "0.03em", textTransform: "uppercase" }}>
        {cfg.label}
      </span>
    );
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
            <button onClick={() => setView("cashier")}
              style={{ background: "transparent", color: "#B89A6A", border: "1.5px solid #4A3000", borderRadius: 14, padding: "16px 32px", fontSize: 15, cursor: "pointer", fontFamily: "inherit" }}>
              🧾 Espace caissier
            </button>
          </div>
          <p style={{ color: "#5C4020", fontSize: 13, marginTop: 40 }}>Simulateur de QR Code — scannez et commandez</p>
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
                  <div style={{ color: "#8C6B3E", fontSize: 13, marginTop: 2 }}>{item.description}</div>
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

  // ─── CASHIER ─────────────────────────────────────────────
  if (view === "cashier") {
    const tablesSummary = TABLES.map((t) => {
      const tableOrders = liveOrders.filter((o) => o.table === t);
      const total = tableOrders.reduce((s, o) => s + o.items.reduce((ss, i) => ss + i.price * i.qty, 0), 0);
      return { table: t, count: tableOrders.length, total, latest: tableOrders[0] };
    }).filter((t) => t.count > 0);

    // ─── ORDER DETAIL VIEW ───────────────────────────────
    if (selectedOrderId) {
      const order = liveOrders.find((o) => o.id === selectedOrderId);
      if (!order) {
        setSelectedOrderId(null);
        return null;
      }
      const allItems = order.items;
      const paidItems = allItems.filter((i) => i.paid);
      const unpaidItems = allItems.filter((i) => !i.paid);
      const totalAll = allItems.reduce((s, i) => s + i.price * i.qty, 0);
      const totalPaid = paidItems.reduce((s, i) => s + i.price * i.qty, 0);
      const totalUnpaid = unpaidItems.reduce((s, i) => s + i.price * i.qty, 0);
      const splitAmt = [...splitSelected].reduce((s, id) => {
        const item = allItems.find((i) => i.id === id);
        return s + (item ? item.price * item.qty : 0);
      }, 0);
      const pct = totalAll > 0 ? Math.round((totalPaid / totalAll) * 100) : 0;

      const NEXT_STATUS = { "en préparation": "prêt", prêt: "servi", servi: "payé" };
      const NEXT_LABEL = { "en préparation": "✓ Marquer prêt", prêt: "🚀 Servir", servi: "💳 Encaisser tout" };

      return (
        <div style={{ minHeight: "100vh", background: "#F8F4EE", fontFamily: "-apple-system, 'Segoe UI', sans-serif" }}>
          {/* Header */}
          <div style={{ background: "#1A0F00", padding: "18px 24px" }}>
            <div style={{ maxWidth: 600, margin: "0 auto", display: "flex", alignItems: "center", gap: 12 }}>
              <button onClick={() => { setSelectedOrderId(null); setSplitMode(false); setSplitSelected(new Set()); }}
                style={{ background: "transparent", border: "none", color: "#B89A6A", fontSize: 22, cursor: "pointer", padding: 0 }}>←</button>
              <div style={{ flex: 1 }}>
                <h2 style={{ color: "#F5E6C8", margin: 0, fontSize: 20, fontWeight: 700 }}>Table {order.table}</h2>
                <p style={{ color: "#8C6B3E", margin: "2px 0 0", fontSize: 13 }}>{order.time} · {allItems.length} article{allItems.length > 1 ? "s" : ""}</p>
              </div>
              <StatusBadge status={order.status} />
            </div>
          </div>

          <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
            {/* Progress bar */}
            {totalPaid > 0 && (
              <div style={{ marginBottom: 18 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#8C6B3E", marginBottom: 6 }}>
                  <span>Progression du paiement</span>
                  <span style={{ fontWeight: 600 }}>{pct}% réglé</span>
                </div>
                <div style={{ height: 6, background: "#E2C898", borderRadius: 3, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${pct}%`, background: "#3B6D11", borderRadius: 3, transition: "width 0.3s" }} />
                </div>
              </div>
            )}

            {/* Split mode banner */}
            {splitMode && (
              <div style={{ background: "#FAEEDA", border: "1px solid #E2C898", borderRadius: 10, padding: "10px 16px", marginBottom: 14, display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#854F0B" }}>
                <span>👥</span>
                <span>Mode paiement individuel — cochez les articles à régler</span>
              </div>
            )}

            {/* Items table */}
            <div style={{ background: "#FFF", borderRadius: 16, border: "1.5px solid #E2C898", overflow: "hidden", marginBottom: 16 }}>
              {/* Table header */}
              <div style={{ display: "grid", gridTemplateColumns: splitMode ? "1fr 48px 72px 80px 40px" : "1fr 48px 72px 80px", gap: 0, padding: "10px 16px", borderBottom: "1px solid #F0E8D8", background: "#FDF6EC" }}>
                {["Article", "Qté", "Prix u.", "Sous-total", ...(splitMode ? ["✓"] : [])].map((h, i) => (
                  <div key={i} style={{ fontSize: 11, fontWeight: 600, color: "#8C6B3E", textTransform: "uppercase", letterSpacing: "0.05em", textAlign: i > 0 ? "right" : "left" }}>{h}</div>
                ))}
              </div>

              {allItems.map((item) => {
                const isPaid = item.paid;
                const isSelected = splitSelected.has(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => splitMode && !isPaid && toggleSplitItem(item.id)}
                    style={{
                      display: "grid",
                      gridTemplateColumns: splitMode ? "1fr 48px 72px 80px 40px" : "1fr 48px 72px 80px",
                      gap: 0,
                      padding: "12px 16px",
                      borderBottom: "1px solid #F0E8D8",
                      cursor: splitMode && !isPaid ? "pointer" : "default",
                      background: isPaid ? "#F8F4EE" : isSelected ? "#EAF3DE" : "#FFF",
                      transition: "background 0.15s",
                    }}
                  >
                    <div style={{ fontSize: 14, color: isPaid ? "#B89A6A" : "#1A0F00", textDecoration: isPaid ? "line-through" : "none", display: "flex", alignItems: "center", gap: 6 }}>
                      <span>{item.emoji}</span>
                      <span>{item.name}</span>
                      {isPaid && <span style={{ background: "#EAF3DE", color: "#3B6D11", fontSize: 10, fontWeight: 700, padding: "2px 6px", borderRadius: 8 }}>PAYÉ</span>}
                    </div>
                    <div style={{ fontSize: 14, color: isPaid ? "#B89A6A" : "#1A0F00", textAlign: "right", textDecoration: isPaid ? "line-through" : "none" }}>{item.qty}</div>
                    <div style={{ fontSize: 14, color: isPaid ? "#B89A6A" : "#8C6B3E", textAlign: "right", textDecoration: isPaid ? "line-through" : "none" }}>{formatPrice(item.price)}</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: isPaid ? "#B89A6A" : "#1A0F00", textAlign: "right", textDecoration: isPaid ? "line-through" : "none" }}>{formatPrice(item.price * item.qty)}</div>
                    {splitMode && (
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                        {isPaid
                          ? <span style={{ color: "#3B6D11", fontSize: 16 }}>✓</span>
                          : <input type="checkbox" checked={isSelected} onChange={() => toggleSplitItem(item.id)} onClick={(e) => e.stopPropagation()} style={{ width: 16, height: 16, cursor: "pointer", accentColor: "#C8882A" }} />
                        }
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Totals */}
              {totalPaid > 0 && (
                <div style={{ padding: "10px 16px", background: "#F8F4EE", borderTop: "1px solid #F0E8D8", display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                  <span style={{ color: "#8C6B3E" }}>Déjà payé</span>
                  <span style={{ color: "#3B6D11", fontWeight: 700 }}>{formatPrice(totalPaid)}</span>
                </div>
              )}

              {splitMode && splitSelected.size > 0 && (
                <div style={{ padding: "10px 16px", background: "#EAF3DE", borderTop: "1px solid #C0DD97", display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                  <span style={{ color: "#3B6D11" }}>Sélection à encaisser</span>
                  <span style={{ color: "#3B6D11", fontWeight: 700 }}>{formatPrice(splitAmt)}</span>
                </div>
              )}

              <div style={{ padding: "14px 16px", background: "#1A0F00", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#B89A6A", fontSize: 13 }}>Reste à payer</span>
                <span style={{ color: "#F5E6C8", fontSize: 22, fontWeight: 700 }}>{formatPrice(totalUnpaid)}</span>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {!splitMode ? (
                <>
                  <button onClick={() => { setSplitMode(true); setSplitSelected(new Set()); }}
                    style={{ flex: 1, minWidth: 160, background: "#FFF", color: "#1A0F00", border: "1.5px solid #E2C898", borderRadius: 12, padding: "13px 16px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
                    👥 Paiement individuel
                  </button>
                  {NEXT_STATUS[order.status] && (
                    <button onClick={() => updateOrderStatus(order.id, NEXT_STATUS[order.status])}
                      style={{ flex: 1, minWidth: 140, background: order.status === "servi" ? "#EAF3DE" : "#C8882A", color: order.status === "servi" ? "#3B6D11" : "#FFF", border: order.status === "servi" ? "1.5px solid #C0DD97" : "none", borderRadius: 12, padding: "13px 16px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
                      {NEXT_LABEL[order.status]}
                    </button>
                  )}
                </>
              ) : (
                <>
                  <button onClick={() => { setSplitMode(false); setSplitSelected(new Set()); }}
                    style={{ background: "#FFF", color: "#8C6B3E", border: "1.5px solid #E2C898", borderRadius: 12, padding: "13px 20px", fontSize: 14, cursor: "pointer", fontFamily: "inherit" }}>
                    Annuler
                  </button>
                  {splitSelected.size > 0 && (
                    <button onClick={paySelectedItems}
                      style={{ flex: 1, background: "#EAF3DE", color: "#3B6D11", border: "1.5px solid #C0DD97", borderRadius: 12, padding: "13px 16px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
                      Encaisser {formatPrice(splitAmt)} →
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
          {notification && <Notif n={notification} />}
        </div>
      );
    }

    // ─── CASHIER MAIN ───────────────────────────────────────
    return (
      <div style={{ minHeight: "100vh", background: "#F8F4EE", fontFamily: "-apple-system, 'Segoe UI', sans-serif" }}>
        <div style={{ background: "#1A0F00", padding: "18px 24px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <h1 style={{ color: "#F5E6C8", margin: 0, fontSize: 22, fontWeight: 700 }}>☕ Café Lumière — Caisse</h1>
              <p style={{ color: "#8C6B3E", margin: "4px 0 0", fontSize: 13 }}>{liveOrders.length} commande{liveOrders.length !== 1 ? "s" : ""} active{liveOrders.length !== 1 ? "s" : ""}</p>
            </div>
            <button onClick={() => setView("home")} style={{ background: "transparent", border: "1px solid #4A3000", color: "#B89A6A", borderRadius: 8, padding: "8px 14px", fontSize: 13, cursor: "pointer" }}>← Retour</button>
          </div>
        </div>

        <div style={{ maxWidth: 800, margin: "0 auto", padding: 20 }}>
          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 24 }}>
            {[
              { label: "Commandes actives", value: liveOrders.length, bg: "#FCEBEB", color: "#A32D2D" },
              { label: "Tables occupées", value: tablesSummary.length, bg: "#FAEEDA", color: "#854F0B" },
              { label: "CA encaissé", value: formatPrice(totalRevenue), bg: "#EAF3DE", color: "#3B6D11" },
            ].map((s) => (
              <div key={s.label} style={{ background: s.bg, borderRadius: 14, padding: "16px 18px", textAlign: "center" }}>
                <div style={{ color: s.color, fontSize: 26, fontWeight: 800 }}>{s.value}</div>
                <div style={{ color: s.color, fontSize: 12, marginTop: 4, opacity: 0.75 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
            {[["live", "Commandes actives"], ["tables", "Par table"], ["history", "Historique"]].map(([k, l]) => (
              <button key={k} onClick={() => setCashierTab(k)}
                style={{ background: cashierTab === k ? "#1A0F00" : "#FFF", color: cashierTab === k ? "#F5E6C8" : "#8C6B3E", border: "1.5px solid", borderColor: cashierTab === k ? "transparent" : "#E2C898", borderRadius: 10, padding: "9px 18px", fontSize: 14, fontWeight: cashierTab === k ? 700 : 400, cursor: "pointer" }}>
                {l} {k === "live" && liveOrders.length > 0 && (
                  <span style={{ background: "#E24B4A", color: "#FFF", borderRadius: 10, padding: "1px 6px", fontSize: 11, marginLeft: 6 }}>{liveOrders.length}</span>
                )}
              </button>
            ))}
          </div>

          {/* Live orders */}
          {cashierTab === "live" && (
            <div style={{ display: "grid", gap: 12 }}>
              {liveOrders.length === 0 && <EmptyState text="Aucune commande active" icon="🎉" />}
              {liveOrders.map((order) => (
                <OrderCard
                  key={order.id}
                  order={order}
                  onUpdate={updateOrderStatus}
                  onSelect={(id) => { setSelectedOrderId(id); setSplitMode(false); setSplitSelected(new Set()); }}
                  StatusBadge={StatusBadge}
                  formatPrice={formatPrice}
                />
              ))}
            </div>
          )}

          {/* By table */}
          {cashierTab === "tables" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
              {TABLES.map((t) => {
                const tOrders = liveOrders.filter((o) => o.table === t);
                const total = tOrders.reduce((s, o) => s + o.items.reduce((ss, i) => ss + i.price * i.qty, 0), 0);
                const hasOrder = tOrders.length > 0;
                return (
                  <div
                    key={t}
                    onClick={() => { if (hasOrder) { setSelectedOrderId(tOrders[0].id); setSplitMode(false); setSplitSelected(new Set()); } }}
                    style={{ background: hasOrder ? "#FFF" : "#F8F4EE", borderRadius: 14, padding: "18px", border: hasOrder ? "2px solid #C8882A" : "1.5px solid #E2C898", cursor: hasOrder ? "pointer" : "default", transition: "all 0.2s" }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                      <span style={{ fontSize: 28, fontWeight: 800, color: hasOrder ? "#C8882A" : "#C5B89A" }}>T{t}</span>
                      {hasOrder && <span style={{ background: "#FCEBEB", color: "#A32D2D", fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 8 }}>{tOrders.length} cmd</span>}
                    </div>
                    {hasOrder ? (
                      <>
                        <div style={{ fontSize: 20, fontWeight: 800, color: "#1A0F00" }}>{formatPrice(total)}</div>
                        <div style={{ fontSize: 12, color: "#8C6B3E", marginTop: 6, display: "flex", gap: 4, flexWrap: "wrap" }}>
                          {tOrders.map((o) => <StatusBadge key={o.id} status={o.status} />)}
                        </div>
                        {tOrders.some((o) => o.items.some((i) => i.paid)) && (
                          <div style={{ fontSize: 11, color: "#3B6D11", marginTop: 4 }}>
                            Paiement partiel en cours
                          </div>
                        )}
                      </>
                    ) : (
                      <div style={{ color: "#C5B89A", fontSize: 13 }}>Libre</div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* History */}
          {cashierTab === "history" && (
            <div style={{ display: "grid", gap: 10 }}>
              {paidOrders.length === 0 && <EmptyState text="Aucune commande encaissée" icon="💳" />}
              {paidOrders.map((order) => (
                <div key={order.id} style={{ background: "#FFF", borderRadius: 12, padding: "14px 16px", border: "1px solid #E2C898", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <span style={{ fontWeight: 700, color: "#1A0F00" }}>Table {order.table}</span>
                    <span style={{ color: "#8C6B3E", fontSize: 13, marginLeft: 10 }}>{order.time}</span>
                    <div style={{ fontSize: 12, color: "#B89A6A", marginTop: 4 }}>{order.items.map((i) => `${i.qty}× ${i.name}`).join(", ")}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontWeight: 800, color: "#3B6D11", fontSize: 18 }}>{formatPrice(order.items.reduce((s, i) => s + i.price * i.qty, 0))}</div>
                    <StatusBadge status="payé" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {notification && <Notif n={notification} />}
      </div>
    );
  }

  return null;
}

function OrderCard({ order, onUpdate, onSelect, StatusBadge, formatPrice }) {
  const NEXT = { "en préparation": "prêt", prêt: "servi", servi: "payé" };
  const NEXT_LABEL = { "en préparation": "✓ Prêt", prêt: "🚀 Servir", servi: "💳 Encaisser tout" };
  const [expanded, setExpanded] = useState(true);

  const totalAll = order.items.reduce((s, i) => s + i.price * i.qty, 0);
  const totalPaid = order.items.filter((i) => i.paid).reduce((s, i) => s + i.price * i.qty, 0);
  const totalUnpaid = totalAll - totalPaid;
  const hasPartialPayment = totalPaid > 0;

  return (
    <div style={{ background: "#FFF", borderRadius: 16, border: "1.5px solid #E2C898", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
      <div onClick={() => setExpanded(!expanded)} style={{ padding: "14px 18px", display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}>
        <div style={{ background: "#FFF8EE", border: "2px solid #C8882A", borderRadius: 10, width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 18, color: "#C8882A", flexShrink: 0 }}>
          T{order.table}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <StatusBadge status={order.status} />
            <span style={{ color: "#B89A6A", fontSize: 12 }}>{order.time}</span>
          </div>
          <div style={{ fontSize: 13, color: "#8C6B3E" }}>
            {order.items.length} article{order.items.length > 1 ? "s" : ""}
            {hasPartialPayment && <span style={{ marginLeft: 8, color: "#3B6D11", fontSize: 11, fontWeight: 600 }}>• Paiement partiel</span>}
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          {hasPartialPayment ? (
            <>
              <div style={{ fontWeight: 800, fontSize: 18, color: "#1A0F00" }}>{formatPrice(totalUnpaid)}</div>
              <div style={{ fontSize: 11, color: "#8C6B3E" }}>reste / {formatPrice(totalAll)}</div>
            </>
          ) : (
            <div style={{ fontWeight: 800, fontSize: 20, color: "#1A0F00" }}>{formatPrice(totalAll)}</div>
          )}
        </div>
        <span style={{ color: "#C5B89A", fontSize: 16 }}>{expanded ? "▲" : "▼"}</span>
      </div>
      {expanded && (
        <div style={{ borderTop: "1px solid #F0E8D8", padding: "12px 18px 16px" }}>
          <div style={{ display: "grid", gap: 6, marginBottom: 14 }}>
            {order.items.map((item) => (
              <div key={item.id} style={{ display: "flex", justifyContent: "space-between", fontSize: 14, opacity: item.paid ? 0.5 : 1 }}>
                <span style={{ color: "#1A0F00", textDecoration: item.paid ? "line-through" : "none" }}>
                  <span style={{ color: "#C8882A", fontWeight: 700 }}>{item.qty}×</span> {item.emoji} {item.name}
                  {item.paid && <span style={{ marginLeft: 6, fontSize: 10, background: "#EAF3DE", color: "#3B6D11", padding: "1px 5px", borderRadius: 6, fontWeight: 600 }}>payé</span>}
                </span>
                <span style={{ color: "#8C6B3E" }}>{formatPrice(item.price * item.qty)}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => onSelect(order.id)}
              style={{ flex: 1, background: "#FFF8EE", color: "#C8882A", border: "1.5px solid #E2C898", borderRadius: 10, padding: "10px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
              👁 Détail & paiement
            </button>
            {NEXT[order.status] && (
              <button onClick={() => onUpdate(order.id, NEXT[order.status])}
                style={{ flex: 1, background: order.status === "servi" ? "#EAF3DE" : "#1A0F00", color: order.status === "servi" ? "#3B6D11" : "#F5E6C8", border: order.status === "servi" ? "1.5px solid #C0DD97" : "none", borderRadius: 10, padding: "10px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                {NEXT_LABEL[order.status]}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function TopBar({ title, onBack }) {
  return (
    <div style={{ background: "#1A0F00", padding: "16px 20px", display: "flex", alignItems: "center", gap: 12, position: "sticky", top: 0, zIndex: 10 }}>
      <button onClick={onBack} style={{ background: "none", border: "none", color: "#B89A6A", fontSize: 22, cursor: "pointer", padding: 0 }}>←</button>
      <h2 style={{ color: "#F5E6C8", margin: 0, fontSize: 18, fontWeight: 700 }}>{title}</h2>
    </div>
  );
}

function EmptyState({ text, icon }) {
  return (
    <div style={{ textAlign: "center", padding: 48, color: "#B89A6A" }}>
      <div style={{ fontSize: 42, marginBottom: 12 }}>{icon}</div>
      <p style={{ fontSize: 15 }}>{text}</p>
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