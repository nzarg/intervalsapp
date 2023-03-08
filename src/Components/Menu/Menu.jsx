import React from "react";
import "./Menu.css";

export default function Menu(props) {
const menuButtons = (
	<div className="btn-grp menu-column">
    <div className="btn btn-menu"
      onClick={props.handleStopwatch}>
      STOPWATCH
    </div>
    <div className="btn btn-menu"
      onClick={props.handleCountdown}>
      COUNTDOWN
    </div>
    <div className="btn btn-menu"
      onClick={props.handleIntevals}>
      INTERVALS
    </div>
	</div>
);
const goBackButton = (
	<div className="btn-grp">
    <div className="btn btn-text btn-wide"
      onClick={props.handleGoBack}>
      GO BACK
    </div>
	</div>
);

return (
	<div className="menu">
	{props.goBack ? goBackButton : menuButtons}
	</div>
);
}
