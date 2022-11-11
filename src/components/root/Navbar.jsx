import Tippy, {useSingleton} from "@tippy.js/react";
import React, {useEffect} from 'react';
import {
  AiOutlineMenu,
  BsMoon,
  BsSun,
  MdKeyboardArrowDown,
  RiNotification2Line
} from "react-icons/all.js";
import {BsChatLeft} from "react-icons/bs";
import 'tippy.js/animations/scale-subtle.css';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';
import {useStateCtx} from "../../contexts/provider.jsx";
import avatar from "../../data/avatar.jpg"

function NavButton({
					 title,
					 customFunc,
					 icon,
					 color,
					 dotColor,
					 singleton
				   }) {
  return (
	<Tippy content = {title}
		   animation = "scale-subtle"
		   theme = "material"
		   singleton = {singleton}
	>
	  <button type = "button"
			  onClick = {customFunc}
			  style = {{
				color
			  }}
			  className = "relative text-xl rounded-full p-3 hover:bg-light-gray"
	  >
		<span style = {{background: dotColor}}
			  className = "absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
		/>
		{icon}
	  </button>
	</Tippy>
  )
}

function Navbar(props) {
  const {
		  activeMenu,
		  setActiveMenu,
		  screenSize,
		  setScreenSize,
		  theme,
		  handleChangeTheme
		} = useStateCtx();
  
  const singleton = useSingleton({delay: 100});
  
  useEffect(() => {
	function handleResize() {
	  setScreenSize(window.innerHeight);
	}
	
	window.addEventListener("resize", handleResize);
	
	handleResize();
	
	return () => {
	  window.removeEventListener("resize", handleResize);
	};
  }, []);
  
  useEffect(() => {
	if (screenSize > 768)
	  setActiveMenu(true)
	else
	  setActiveMenu(false);
  }, [screenSize]);
  
  
  return (
	<div className = "flex justify-between p-4 relative dark:bg-secondary-dark-bg">
	  <NavButton title = "Menu"
				 customFunc = {() => setActiveMenu(prevState => !prevState)}
				 icon = {<AiOutlineMenu></AiOutlineMenu>}
				 color = "gray"
	  >
	  </NavButton>
	  <div className = "flex justify-between gap-2">
		<NavButton title = "Chat"
				   customFunc = {() => {
				   }}
				   icon = {<BsChatLeft></BsChatLeft>}
				   color = "gray"
				   dotColor = "red"
				   singleton = {singleton}
		>
		</NavButton>
		<NavButton title = "Notification"
				   customFunc = {() => {
				   }}
				   icon = {<RiNotification2Line></RiNotification2Line>}
				   color = "gray"
				   dotColor = "red"
				   singleton = {singleton}
		>
		</NavButton>
		<NavButton title = "Theme"
				   customFunc = {() => {
				   }}
				   icon = {theme === "dark"
						   ? <BsSun
							 onClick = {() => handleChangeTheme("light")}
						   ></BsSun>
						   : <BsMoon
							 onClick = {() => handleChangeTheme("dark")}
						   ></BsMoon>}
				   color = "gray"
				   singleton = {singleton}
		>
		</NavButton>
		<Tippy content = "Profile"
			   singleton = {singleton}
		>
		  <div className = "flex items-center gap-2 cursor-pointer p-1 rounded-lg
		  hover:bg-light-gray dark:hover:bg-main-dark-bg"
			   onClick = {() => {
			   }}
		  >
			<img src = {avatar}
				 alt = ""
				 className = "rounded-full w-8"
			/>
			<p>
			  <span className = "text-gray-400 text-14">Hi, </span>
			  <span className = "text-black text-14 font-bold dark:text-gray-100">Michael</span>
			</p>
			<MdKeyboardArrowDown className = "text-black text-14 dark:text-gray-400"></MdKeyboardArrowDown>
		  </div>
		</Tippy>
	  </div>
	</div>
  )
	;
}

export default Navbar;