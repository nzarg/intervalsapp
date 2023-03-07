import React from "react";
import "./Timer.css";

export default function Timer(props) {
	let countdownTotal = 0;
	let timer = props.countdown;

	if (!props.decrease) {
		timer = -props.time
	}

	/* Intervals Logic */
	for (let i = 0; i <= props.index; i++) {
		countdownTotal += props.timersArray[i]
	}
	if (props.time >= countdownTotal - props.countdown)
		timer = countdownTotal - props.time;

	if (timer < 0) {
		timer = 0;
	}
	/* Sets a new background when intervals finish */
	if (props.decrease === true &&
		props.isActive === true &&
		props.index === props.timersArray.length - 1 &&
		countdownTotal === props.time) {
		const stopWatch = document.getElementById("stop-watch");
		stopWatch.style.background = "hsla(121, 100%, 74%, 0.487)";
		let loops = props.loops;
		if (loops > 1) {
			props.setLoops(loops=> loops - 1);
			props.handleReset();
			props.handleStart();
		} else {
			props.handleReset();
			props.setLoops(2);
		}
	}



	return (
		<div id={"timer-" + props.index} className="timer">
			<span className="digits">
				{("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:
			</span>
			<span className="digits">
				{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}.
			</span>
			<span className="digits mili-sec">
				{("0" + ((timer / 10) % 100)).slice(-2)}
			</span>
			{props.decrease ? (
				<div className="btn-grp">
					<div className="btn btn-small"
						onClick={() => props.handleIncreaseTime(props.index)}>
						+
					</div>
					<div className="btn btn-small"
						onClick={() => props.handleDecreaseTime(props.index)}>
						-
					</div>
				</div>) : ""
			}
		</div>
	);
}
