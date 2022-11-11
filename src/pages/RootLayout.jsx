import React from 'react';
import {Outlet} from "react-router-dom";
import Footer from "../components/root/Footer.jsx";
import Navbar from "../components/root/Navbar.jsx";
import Sidebar from "../components/root/Sidebar.jsx";
import SettingIcon from "../components/SettingIcon.jsx";
import {useStateCtx} from "../contexts/provider.jsx";

function RootLayout(props) {
  const {activeMenu} = useStateCtx();
  
  return (
	<div className = "flex relative dark:bg-main-dark-bg">
	  {/*settings icon*/}
	  <SettingIcon></SettingIcon>
	  
	  {/*sidebar*/}
	  {activeMenu
	   ? (
		 <div className = "sidebar w-72 bg-white fixed dark:bg-secondary-dark-bg">
		   <Sidebar></Sidebar>
		 </div>
	   )
	   : (
		 <div className = "w-0 dark:bg-secondary-dark-bg">
		   <Sidebar></Sidebar>
		 </div>
	   )}
	  
	  <div className = {`min-h-screen w-full ${activeMenu
											   ? "md:ml-72"
											   : ""}`}
	  >
		{/*navbar*/}
		<div className = "navbar fixed bg-main-bg w-full md:static">
		  <Navbar></Navbar>
		</div>
		
		{/*outlet*/}
		<div>
		  <Outlet/>
		</div>
		<Footer></Footer>
	  </div>
	
	</div>
  );
}

export default RootLayout;