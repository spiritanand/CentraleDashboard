import React from 'react';

function Button({
				  color,
				  bgColor,
				  text,
				  size
				}) {
  return (
	<button type = "button"
			style = {{
			  backgroundColor: bgColor,
			  color,
			}}
			className = {`text-${size} rounded-xl hover:drop-shadow-xl p-3 capitalize`}
	>
	  {text}
	</button>
  );
}

export default Button;