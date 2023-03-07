import React from "react";
import "./ControlButtons.css";

export default function ControlButtons(props) {
const StartButton = (
	<div className="btn btn-one btn-text"
		onClick={props.handleStart}>
	Start
	</div>
);
const ActiveButtons = (
	<div className="btn-grp">
	<div className="btn btn-two btn-text"
		onClick={props.handleReset}>
		Reset
	</div>
	<div className="btn btn-one btn-text"
		onClick={props.handlePauseResume}>
		{props.isPaused ? "Resume" : "Pause"}
	</div>
	</div>
);

return (
	<div className="Control-Buttons">
	{props.active ? ActiveButtons : StartButton}
	</div>
);
}
