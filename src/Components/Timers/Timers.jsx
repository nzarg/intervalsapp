import React from "react";
import Timer from "../Timer/Timer";
import "./Timers.css";

export default function Timers(props) {
  return (
    <div className="timers">
      <div style={{color: 'white'}}>timersArray: {props.timersArray}</div>
      {props.timersArray.map((countdown, index) => {
        return (
          <Timer
            index={index}
            time={props.time}
            countdown={countdown}
            timersArray={props.timersArray}
            decrease={props.decrease}
            handleIncreaseTime={props.handleIncreaseTime}
            handleDecreaseTime={props.handleDecreaseTime}
            isActive={props.isActive}
            handleReset={props.handleReset}
            handleStart={props.handleStart}
            loops={props.loops}
            setLoops={props.setLoops}
          />
        )
      })}
      {props.isInterval? (
      <div className="btn-grp">
        <div className="btn btn-small"
          onClick={props.handleAddTimer}>
          +
        </div>
        <div className="btn btn-small"
          onClick={props.handleRemoveTimer}>
          -
        </div>
        <div className="btn btn-small"
          onClick={props.handleAddTimer}>
          {props.loops}
        </div>
        <div className="btn btn-small"
          onClick={props.handleAddLoop}>
          +
        </div>
        <div className="btn btn-small"
          onClick={props.handleRemoveLoop}>
          -
        </div>
      </div>
      ) : "" 
      }

    </div>
  )
}