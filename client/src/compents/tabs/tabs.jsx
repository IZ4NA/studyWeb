import { useState } from "react";

import "./tabs.css"

export default function TabsExample() {
  const [activeTab, setActiveTab] = useState("recent");

  return (
    <div className="tabs-container">
      {/* Botões das abas */}
      <div className="tabs-header">
        <button
          className={activeTab === "recent" ? "tab active" : "tab"}
          onClick={() => setActiveTab("recent")}
        >
          Recent
        </button>
        <button
          className={activeTab === "popular" ? "tab active" : "tab"}
          onClick={() => setActiveTab("popular")}
        >
          Popular
        </button>
        <button
          className={activeTab === "trending" ? "tab active" : "tab"}
          onClick={() => setActiveTab("trending")}
        >
          Trending
        </button>
      </div>

      {/* Conteúdo condicional */}
      <div className="tabs-content">
        {activeTab === "recent" && (
          <div className="post">
            <h4>Does drinking coffee make you smarter?</h4>
            <p>5h ago · 5 comments · 2 shares</p>
            <h4>So you've bought coffee... now what?</h4>
            <p>2h ago · 3 comments · 2 shares</p>
          </div>
        )}

        {activeTab === "popular" && (
          <div className="post">
            <h4>Top 10 coffee recipes this week ☕</h4>
            <p>12 comments · 10 shares</p>
          </div>
        )}

        {activeTab === "trending" && (
          <div className="post">
            <h4>Why everyone’s switching to cold brew</h4>
            <p>8 comments · 6 shares</p>
          </div>
        )}
      </div>
    </div>
  );
}
