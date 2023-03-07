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
	const [loops, setLoops] = useState(2);
	const [isInterval, setIsInterval] = useState(false)

	useEffect(() => {
		let interval = null;

		if (isActive && isPaused === false) {
			let value = decrease ? 10 : -10;
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

	const backgroundIsBlack = () => {
		const stopWatch = document.getElementById("stop-watch");
		stopWatch.classList.remove('finish');
	}

	const handleStart = () => {
		setIsActive(true);
		setIsPaused(false);
		backgroundIsBlack();
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
		setIsInterval(false);
		setDecrease(false);
		setTimersArray([0])
		setTime(0);
		setGoBack(true);
		backgroundIsBlack();
	};

	const handleCountdown = () => {
		setIsInterval(false);
		setDecrease(true);
		setTimersArray([300000])
		setTime(0);
		setGoBack(true);
		backgroundIsBlack();
	}

	const handleIntevals = () => {
		setIsInterval(true);
		setDecrease(true);
		setTimersArray([2000, 2000, 2000])
		setTime(0);
		setGoBack(true);
		backgroundIsBlack();
	}

	const handleGoBack = () => {
		setGoBack(false);
		handleReset();
		backgroundIsBlack();
	};

	const handleAddTimer = () => {
		setTimersArray(timersArray => {
			return [...timersArray, 0]
		})
	};

	const handleRemoveTimer = () => {
		setTimersArray(timersArray.slice(0, timersArray.length - 1))
	};

	const handleIncreaseTime = (index) => {
		setTimersArray(() => {
			timersArray[index] += 15000;
			return [...timersArray]
		})
	};

	const handleDecreaseTime = (index) => {
		setTimersArray(() => {
			if (timersArray[index] >= 0) {
				if(timersArray[index] < 15000){
					timersArray[index] = 0;
				} else {
				timersArray[index] -= 15000;}
			}
			return [...timersArray]
		})
	}

	const handleAddLoop = () => {
		setLoops(loops=> loops + 1);
	}

	const handleRemoveLoop = () => {
		setLoops(loops=> loops - 1);
	}


	return (
		<div id="stop-watch" className="stop-watch">
			<Menu 
				handleStopwatch={handleStopwatch}
				handleCountdown={handleCountdown}
				handleIntevals={handleIntevals} 
				handleGoBack={handleGoBack}
				goBack={goBack} />
			{goBack?(
				<div>
					<Timers
						time={time}
						timersArray={timersArray}
						handleAddTimer={handleAddTimer}
						handleRemoveTimer={handleRemoveTimer}
						decrease={decrease}
						handleIncreaseTime={handleIncreaseTime}
						handleDecreaseTime={handleDecreaseTime}
						isActive={isActive}
						handleReset={handleReset}
						handleStart={handleStart}
						loops={loops}
						setLoops={setLoops}
						handleAddLoop={handleAddLoop}
						handleRemoveLoop={handleRemoveLoop}
						isInterval={isInterval}
					/>
					<ControlButtons
						active={isActive}
						isPaused={isPaused}
						handleStart={handleStart}
						handlePauseResume={handlePauseResume}
						handleReset={handleReset}
					/>
				</div>
				) : ""
			}
		</div>
	);
}

export default StopWatch;
