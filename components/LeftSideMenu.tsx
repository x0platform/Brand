"use client";
import { useState } from "react";
import menu from "../data/menu.json";
import "./LeftSideMenu.css";

// type MenuData = {
//   [key: string]: string[]
// }

export default function LeftSideMenu() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (item: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  return (
    <aside className="left-side-menu">
      {Object.entries(menu).map(([item, subItems]) => (
        <div key={item} className="menu-group">
          <div className="menu-title" onClick={() => toggleItem(item)}>
            {item}
            <span className="chevron">{openItems[item] ? "▲" : "▼"}</span>
          </div>
          {openItems[item] && (
            <ul className="submenu">
              {subItems.map((sub) => (
                <li key={sub} className="submenu-item">
                  {sub}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </aside>
  );
}
