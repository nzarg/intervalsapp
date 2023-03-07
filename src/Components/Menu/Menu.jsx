import React from "react";
import "./Menu.css";

export default function Menu(props) {
const menuButtons = (
	<div className="btn-grp menu-column">
    <div className="btn btn-menu"
      onClick={props.handleStopwatch}>
      Stopwatch
    </div>
    <div className="btn btn-menu"
      onClick={props.handleCountdown}>
      Countdown
    </div>
    <div className="btn btn-menu"
      onClick={props.handleIntevals}>
      Intervals
    </div>
	</div>
);
const goBackButton = (
	<div className="btn-grp">
    <div className="btn btn-text"
      onClick={props.handleGoBack}>
      Go Back
    </div>
	</div>
);

return (
	<div className="menu">
	{props.goBack ? goBackButton : menuButtons}
	</div>
);
}
