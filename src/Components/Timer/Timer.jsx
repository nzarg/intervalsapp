import React from "react";
import "./Timer.css";

export default function Timer(props) {
	let countdown = 0;
	let timer = props.countdown;

	if(!props.decrease){
		timer = -props.time
	}

	/* Intervals Logic */
	for (let i = 0; i <= props.index; i++ ){
		countdown += props.timersArray[i]
	}
	if(props.time >= countdown - props.countdown)
	timer = countdown - props.time;

	if(timer < 0) {
		timer = 0;
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
		</div>
	);
}
