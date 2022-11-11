import Tippy from "@tippy.js/react";
import React from 'react';
import {FiSettings} from "react-icons/fi";
import {Link} from "react-router-dom";

function SettingIcon(props) {
  return (
	// <Link to = "settings">
	  <div className = "fixed right-4 bottom-4 z-10">
		<Tippy content = "Settings"
			   duration = {300}
			   animation = "scale-subtle"
			   theme = "material"
		>
		  <button type = "button"
				  className = "text-2xl text-white p-3 hover:drop-shadow-xl bg-black
				 dark:bg-white dark:text-black"
				  style = {{
					borderRadius: "100%",
				  }}
		  >
			<FiSettings/>
		  </button>
		</Tippy>
	  </div>
	// </Link>
  );
}

export default SettingIcon;