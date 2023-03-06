import React from "react";
import Timer from "../Timer/Timer";
import "./Timers.css";

export default function Timers(props) {
  return (
    <div className="timers">
      {props.timersArray.map((countdown, index) => {
        return (
          <Timer 
          index={index} 
          time={props.time} 
          countdown={countdown} 
          timersArray={props.timersArray}
          decrease={props.decrease}  
        />
        )
      })}
      <div className="btn-grp">
        <div className="btn btn-two"
          onClick={props.handleAddTimer}>
          +
        </div>
        <div className="btn btn-two"
          onClick={props.handleRemoveTimer}>
          -
        </div>
      </div>
    </div>
  )
}