import Tippy from "@tippy.js/react";
import React from 'react';
import {
  MdDashboardCustomize,
  MdOutlineCancel,
} from "react-icons/all.js";
import {
  Link,
  NavLink
} from "react-router-dom";
import {useStateCtx} from "../../contexts/provider.jsx";
import {links} from "../../data/dummy.jsx";
import ThemeBox from "../UI/ThemeBox.jsx";

function Sidebar(props) {
  const {
		  activeMenu,
		  setActiveMenu,
		  screenSize,
		  handleChangeTheme
		} = useStateCtx();
  
  const normalLinkClass = " text-gray-500 dark:text-gray-200 dark:hover:text-white"
						  + " hover:bg-blue-100 dark:hover:bg-blue-400";
  
  const activeLinkClass = "text-black bg-blue-200 dark:text-gray-200 dark:bg-blue-500";
  
  function handleCloseSidebar() {
	if (screenSize < 769 && activeMenu)
	  setActiveMenu(false);
  }
  
  return (
	<div className = "h-screen pb-10 overflow-scroll border-r-gray-200
	 border-r-1 dark:border-r-gray-700"
	>
	  {activeMenu
	   ? (
		 <>
		   <div className = "flex justify-between items-center">
			 {/*logo*/}
			 <Link to = "/"
				   className = "flex items-center gap-2 ml-3 mt-4 text-xl font-extrabold
				   text-slate-900 dark:text-white"
				   onClick = {handleCloseSidebar}
			 >
			   <MdDashboardCustomize></MdDashboardCustomize> <span>Centrale</span>
			 </Link>
			
			 {/*close*/}
			 <Tippy content = "Close"
					animation = "scale-subtle"
					theme = "material"
			 >
			   <button type = "button"
					   onClick = {() => {
						 setActiveMenu(false);
					   }}
					   className = "text-xl rounded-full mr-3 dark:text-gray-100 dark:hover:bg-red-700"
			   >
				 <MdOutlineCancel></MdOutlineCancel>
			   </button>
			 </Tippy>
		   </div>
		  
		   {/*links*/}
		   <div className = "mt-10"
				id = "sidebar-links"
		   >
			 {links.map(link => (
			   <div key = {link.title}>
				 <p className = "text-gray-400 m-3 mt-4 uppercase">{link.title}</p>
				 {link.links.map(link => (
				   <NavLink to = {`/${link.name}`}
							key = {link.name}
							onClick = {() => {
							  handleCloseSidebar();
							}}
							className = {({isActive}) => `flex items-center gap-5 pl-4 py-3 rounded-lg text-md m-1
							${isActive
							  ? activeLinkClass
							  : normalLinkClass}`}
				   >
					 {link.icon}
					 <span className = "capitalize">
					 <p>{link.name}</p>
					 </span>
				   </NavLink>
				 ))}
			   </div>
			 ))}
			
			 {/* change color*/}
			 <p className = "text-gray-400 m-3 mt-4 uppercase">Theme</p>
			 <div className = "flex gap-2 p-2">
			   <ThemeBox bgColor = "white"
						 onClick = {() => {
						   handleChangeTheme("light");
						   handleCloseSidebar();
						 }}
			   ></ThemeBox>
			   <ThemeBox bgColor = "black"
						 onClick = {() => {
						   handleChangeTheme("dark");
						   handleCloseSidebar();
						 }}
			   ></ThemeBox>
			 </div>
		   </div>
		 </>
	   )
	   : (
		 <></>
	   )}
	</div>
  );
}

export default Sidebar;