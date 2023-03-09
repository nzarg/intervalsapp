import React from "react";
import "./ControlButtons.css";

export default function ControlButtons(props) {
const StartButton = (
	<div className="btn-grp"> 
		<div className="btn btn-text btn-wide red-back"
			onClick={props.handleStart}>
		START
		</div>
	</div>
);
const ActiveButtons = (
	<div className="btn-grp">
		<div className="btn btn-text"
			onClick={props.handleReset}>
			RESET
		</div>
		<div className="btn btn-text red-back"
			onClick={props.handlePauseResume}>
			{props.isPaused ? "RESUME" : "PAUSE"}
		</div>
	</div>
);

return (
	<div className="Control-Buttons">
	{props.active ? ActiveButtons : StartButton}
	</div>
);
}
