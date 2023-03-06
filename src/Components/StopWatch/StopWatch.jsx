import React, { useState, useEffect } from "react";
import "./StopWatch.css";
import Menu from "../Menu/Menu";
import ControlButtons from "../ContolButtons/ControlButtons";
import Timers from "../Timers/Timers";

function StopWatch() {
const [isActive, setIsActive] = useState(false);
const [isPaused, setIsPaused] = useState(true);
const [time, setTime] = useState(0);
const [goBack, setGoBack] = useState(false);
const [decrease, setDecrease] = useState(false)
const [timersArray, setTimersArray] = useState([0])

useEffect(() => {
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
	setIsPaused(true);
	setIsActive(false);
	setTime(0);
};

const handleStopwatch = () => {
	setDecrease(false);
	setTimersArray([0])
	setTime(0);
	setGoBack(true);
};

const handleIntevals = () => {
	setDecrease(true);
	setTimersArray([3000,3000,3000])
	setTime(0);
	setGoBack(true);
}

const handleGoBack = () => {
	setGoBack(false);
	handleReset();
};

const handleAddTimer = () =>{
	setTimersArray(timersArray=> {
		timersArray.push(0)
		return timersArray;
	})
};

const handleRemoveTimer = () =>{

};

return (
	<div className="stop-watch">
	<Menu handleStopwatch={handleStopwatch} handleIntevals={handleIntevals} handleGoBack={handleGoBack} goBack={goBack} />
	<Timers 
		time={time} 
		timersArray={timersArray} 
		handleAddTimer={handleAddTimer} 
		handleRemoveTimer={handleRemoveTimer}
		decrease={decrease}
	/>
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
