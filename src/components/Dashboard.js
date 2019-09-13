import React from "react";
import "../Dashboard.scss";
import Display from "./Display";

export default function Dashboard(props) {
  const {
    fouls,
    setFouls,
    strikes,
    setStrikes,
    balls,
    setBalls,
    outs,
    setOuts,
    awayRuns,
    setAwayRuns,
    homeRuns,
    setHomeRuns,
    hits,
    setHits,
    inning,
    setInning,
    top,
    setTop
  } = props;
  const newGame = () => {
    setInning(1);
    setTop(true);
    newBatter();
    setAwayRuns(0);
    setHomeRuns(0);
    document.getElementsByClassName("awayBatting")[0].classList.remove("atBat");
    document.getElementsByClassName("homeBatting")[0].classList.add("atBat");
  };
  const switchAtBatTeam = () => {
    document.getElementsByClassName("awayBatting")[0].classList.toggle("atBat");
    document.getElementsByClassName("homeBatting")[0].classList.toggle("atBat");
    setOuts(0);
    newBatter();
    setHits(0);
    setTop(!top);
    if (!top) {
      setInning(inning + 1);
      if (inning > 8) {
        newGame();
      }
    }
  };
  const newBatter = () => {
    setStrikes(0);
    setFouls(0);
    setBalls(0);
  };
  const out = () => {
    if (outs < 2) {
      setOuts(outs + 1);
      newBatter();
    } else {
      switchAtBatTeam();
    }
  };
  const strike = () => {
    if (strikes < 2) {
      setStrikes(strikes + 1);
    } else {
      out();
    }
  };
  const foul = () => {
    if (strikes < 2) setStrikes(strikes + 1);
  };
  const hit = () => {
    if (hits === 3) {
      if (top) {
        setHomeRuns(homeRuns + 1);
      } else {
        setAwayRuns(awayRuns + 1);
      }
      newBatter();
    } else {
      setHits(hits + 1);
      newBatter();
    }
  };
  const ball = () => {
    if (balls < 3) {
      setBalls(balls + 1);
    } else {
      hit();
    }
  };
  const beaned = () => {
    hit();
  };
  const tag = () => {
    if (hits > 0) {
      setHits(hits - 1);
    }
    out();
  };
  const homerun = () => {
    if (top) {
      setHomeRuns(homeRuns + hits + 1);
    } else {
      setAwayRuns(awayRuns + hits + 1);
    }
    setHits(0);
    newBatter();
  };

  return (
    <div>
      <Display
        balls={balls}
        strikes={strikes}
        fouls={fouls}
        awayRuns={awayRuns}
        homeRuns={homeRuns}
        outs={outs}
        hits={hits}
      />
      <div className="Dashboard">
        <h2>Umpire Controls</h2>
        <div className="buttons">
          <button className="hit" onClick={hit}>
            Hit
          </button>
          <button className="foul" onClick={foul}>
            Foul
          </button>
          <button className="strike" onClick={strike}>
            Strike
          </button>
          <button className="ball" onClick={ball}>
            Ball
          </button>
          <button className="beaned" onClick={beaned}>
            Beaned
          </button>
          <button className="tag" onClick={tag}>
            Tag
          </button>
          <button className="homerun" onClick={homerun}>
            Homerun
          </button>
          <button className="reset" onClick={newGame}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
