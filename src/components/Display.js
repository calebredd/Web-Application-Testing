import React from "react";
import "../Display.scss";

export default function Display(props) {
  const { strikes, balls, outs, awayRuns, homeRuns, hits } = props;
  return (
    <div className="display">
      <div className="score">
        <div className="homeTeam">
          <img
            className="homeBatting atBat"
            src="https://images.unsplash.com/photo-1554591203-d6433caa8495?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            alt="At Bat"
          />
          <h2>Home</h2>
          <h3>Runs</h3>
          <p>{homeRuns}</p>
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
          <div>
            <h3 className="bases">On Base</h3>
            <p>{hits}</p>
          </div>
        </div>
        <div className="awayTeam">
          <img
            className="awayBatting"
            src="https://images.unsplash.com/photo-1554591203-d6433caa8495?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            alt="At Bat"
          />
          <h2>Away</h2>
          <h3>Runs</h3>
          <p>{awayRuns}</p>
        </div>
      </div>
    </div>
  );
}
