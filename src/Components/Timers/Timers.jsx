import React from "react";
import Timer from "../Timer/Timer";
import CurrentTimer from "../CurrentTimer/CurrentTimer"
import "./Timers.css";

export default function Timers(props) {

  return (
    <div className="timers">
      <CurrentTimer timer={props.currentTimer} currentActivity={props.currentActivity} />
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
            isInterval={props.isInterval}
            setCurrentTimer={props.setCurrentTimer}
            setCurrentActivity={props.setCurrentActivity}
          />
        )
      })}
      {props.isInterval? (
      <div className="btn-grp btn-loops">
        <div className="btn btn-small-loops"
          onClick={props.handleAddTimer}>
          +
        </div>
        <div className="btn btn-small-loops"
          onClick={props.handleRemoveTimer}>
          -
        </div>
        <div className="btn btn-small-loops"
          onClick={props.handleAddTimer}>
          {props.loops}
        </div>
        <div className="btn btn-small-loops"
          onClick={props.handleAddLoop}>
          +
        </div>
        <div className="btn btn-small-loops"
          onClick={props.handleRemoveLoop}>
          -
        </div>
      </div>
      ) : "" 
      }

    </div>
  )
}