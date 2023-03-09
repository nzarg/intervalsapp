import React from "react";
import "./CurrentTimer.css";

export default function CurrentTimer({timer, currentActivity}) {
	return (
		<div  id="current-timer" className="current-timer"> 
			<div className="activity">
        {currentActivity}
			</div>
			<div className="clock">
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
		</div>
	);
}
