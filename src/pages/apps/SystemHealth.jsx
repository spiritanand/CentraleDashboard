import React, {
  useEffect,
  useState
} from 'react';
import {SpinnerDiamond} from "spinners-react/src/SpinnerDiamond";
import shield from "../../data/shield.png"

function SystemHealth(props) {
  const [isSystemChecked, setIsSystemChecked] = useState(false);
  
  useEffect(() => {
	const timer = setTimeout(() => {
	  setIsSystemChecked(true);
	}, Math.floor((
					3 + Math.random()
				  ) * 1000));
	return () => {
	  clearTimeout(timer);
	};
  }, []);
  
  return (
	<>
	  {isSystemChecked
	   ? (
		 <div className = "h-screen flex justify-center items-center flex-col gap-16">
		   <img src = {shield}
				alt = "shield"
				className = "h-1/2"
		   />
		   <p className = "font-extrabold text-5xl capitalize text-blue-900 dark:text-blue-400
		   text-center"
		   >
			 your system's healthy 💪
		   </p>
		 </div>
	   )
	   : (
		 <div className = "h-screen flex justify-center items-center flex-col gap-16">
		   <SpinnerDiamond size = {200}
						   thickness = {150}
						   speed = {50}
						   color = "#22d3ee"
						   secondaryColor = "rgba(178, 178, 178, 1)"
		   />
		   <p className = "font-extrabold text-5xl capitalize text-blue-900 dark:text-blue-400
		   text-center">
			 Checking your system's health.
		   </p>
		 </div>
	   )}
	</>
  );
}

export default SystemHealth;