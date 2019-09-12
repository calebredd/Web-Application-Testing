import React from "react";
import "../Dashboard.scss";

export default function Dashboard() {
  return (
    <div className="Dashboard">
      <h2>Umpire Controls</h2>
      <div className="buttons">
        <button className="strike">Strike</button>
        <button className="foul">Foul</button>
        <button className="ball">Ball</button>
      </div>
    </div>
  );
}
