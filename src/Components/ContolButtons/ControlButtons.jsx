import React from "react";
import "./ControlButtons.css";

export default function ControlButtons(props) {
const StartButton = (
	<div className="btn-grp"> 
		<div className="btn btn-text btn-start"
			onClick={props.handleStart}>
		Start
		</div>
	</div>
);
const ActiveButtons = (
	<div className="btn-grp">
		<div className="btn btn-text"
			onClick={props.handleReset}>
			Reset
		</div>
		<div className="btn btn-text btn-start"
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
