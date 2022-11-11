import React from 'react';

function ThemeBox({bgColor, onClick}) {
  return (
	<div className = "w-10 h-10 border-2 border-gray-400 cursor-pointer rounded-lg"
		 style = {{
		   backgroundColor: bgColor,
		 }}
		 onClick={onClick}
	></div>
  );
}

export default ThemeBox;