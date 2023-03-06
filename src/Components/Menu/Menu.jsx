import React from "react";
import "./Menu.css";

export default function Menu(props) {
const StartButton = (
	<div className="btn-grp">
	<div className="btn btn-two"
		onClick={props.handleStopwatch}>
		Stopwatch
	</div>
	<div className="btn btn-two"
		onClick={props.handleIntevals}>
		Intervals
	</div>
	</div>
);
const ActiveButtons = (
	<div className="btn-grp">
    <div className="btn btn-two"
      onClick={props.handleGoBack}>
      Go Back
    </div>
	</div>
);

return (
	<div className="menu">
	<div>{props.goBack ? ActiveButtons : StartButton}</div>
	</div>
);
}
