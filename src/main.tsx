import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div style={{ padding: 24, fontSize: 24, color: "white" }}>
      Oi! React renderizou ✅
    </div>
  </React.StrictMode>
);
