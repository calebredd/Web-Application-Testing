import React from "react";
import "../Display.scss";

export default function Display(props) {
  const { strikes, balls, runsHome, runsAway, outs } = props;
  return (
    <div className="display">
      <div className="score">
        <div className="homeTeam">
          <h2>Home</h2>
          <h3>Runs</h3>
          <p>{runsHome}</p>
        </div>
        <div className="batter">
          <div>
            <h3 className="strikes">Strikes</h3>
            <p>{strikes}</p>
          </div>
          <div>
            <h3 className="balls">Balls</h3>
            <p>{balls}</p>
          </div>
          <div>
            <h3 className="outs">Outs</h3>
            <p>{outs}</p>
          </div>
        </div>
        <div className="awayTeam">
          <h2>Away</h2>
          <h3>Runs</h3>
          <p>{runsAway}</p>
        </div>
      </div>
    </div>
  );
}
