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
          />
        )
      })}
      {props.decrease? (
      <div className="btn-grp">
        <div className="btn btn-two"
          onClick={props.handleAddTimer}>
          +
        </div>
        <div className="btn btn-two"
          onClick={props.handleRemoveTimer}>
          -
        </div>
      </div>) : "" 
      }

    </div>
  )
}