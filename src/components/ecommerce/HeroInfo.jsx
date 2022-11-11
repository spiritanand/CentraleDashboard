import React from 'react';
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Button from "../UI/Button.jsx";

function HeroInfo(props) {
  return (
	<div className = "bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
		  rounded-xl w-full p-8 pt-9 mx-12
		  bg-hero-pattern bg-no-repeat bg-cover bg-center"
	>
	  <div className = "flex justify-between items-center">
		<div className = "bg-white dark:bg-secondary-dark-bg p-4 rounded-xl">
		  <p className = "font-bold text-gray-400 dark:text-gray-300">Total Revenue</p>
		  <CircularProgressbar value = "70"
							   text = "70%"
							   strokeWidth = {4}
		  ></CircularProgressbar>
		  <p className = "text-xl text-center dark:text-white">$71012.12</p>
		</div>
	  </div>
	  <div className = "mt-5">
		<Button
		  color = "white"
		  bgColor = "black"
		  text = "download"
		  size = "sm"
		></Button>
	  </div>
	</div>
  );
}

export default HeroInfo;