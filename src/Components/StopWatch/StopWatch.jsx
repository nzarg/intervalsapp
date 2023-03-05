import React, { useState } from "react";
import "./StopWatch.css";
import Timer from "../Timer/Timer";
import Menu from "../Menu/Menu";
import ControlButtons from "../ContolButtons/ControlButtons";

function StopWatch() {
const [isActive, setIsActive] = useState(false);
const [isPaused, setIsPaused] = useState(true);
const [time, setTime] = useState(0);
const [goBack, setGoBack] = useState(false);
const [countdown, setCountdown] = useState(0);
const [decrease, setDecrease] = useState(false)

React.useEffect(() => {
	let interval = null;

	if (isActive && isPaused === false) {
	let value = decrease? 10 : -10;
	interval = setInterval(() => {
		setTime((time) => time + value);
	}, 10);
	} else {
	clearInterval(interval);
	}
	return () => {
	clearInterval(interval);
	};
}, [isActive, isPaused, decrease]);

const handleStart = () => {
	setIsActive(true);
	setIsPaused(false);
};

const handlePauseResume = () => {
	setIsPaused(!isPaused);
};

const handleReset = () => {
	setIsActive(false);
	setTime(0);
};

const handleStopwatch = () => {
	setDecrease(false);
	setCountdown(0);
	setGoBack(true);
};

const handleIntevals = () => {
	setDecrease(true);
	setCountdown(300000)
	setGoBack(true);
}

const handleGoBack = () => {
	setGoBack(false);
};

return (
	<div className="stop-watch">
	<Menu handleStopwatch={handleStopwatch} handleIntevals={handleIntevals} handleGoBack={handleGoBack} goBack={goBack} />
	<Timer time={time} countdown={countdown}/>
	<ControlButtons
		active={isActive}
		isPaused={isPaused}
		handleStart={handleStart}
		handlePauseResume={handlePauseResume}
		handleReset={handleReset}
	/>
	</div>
);
}

export default StopWatch;
