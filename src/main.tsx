import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div style={{
      padding: 24,
      fontSize: 28,
      fontWeight: 700,
      color: "#ffffff",
      background: "#ff006e"
    }}>
      Oi! React renderizou ✅
    </div>
  </React.StrictMode>
);
