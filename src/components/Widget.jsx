import React from 'react';

function Widget({item}) {
  
  return (
	<div key = {item.title}
		 className = "bg-main-bg dark:bg-secondary-dark-bg p-4 rounded-lg"
	>
	  <div className = "flex justify-center items-center">
		<button type = "button"
				style = {{
				  color          : item.iconColor,
				  backgroundColor: item.iconBg,
				}}
				className = "p-3 text-2xl rounded-full hover:drop-shadow-xl"
		>
		  {item.icon}
		</button>
	  </div>
	  <p className = "text-lg mt-4">
				  <span className = "font-semibold dark:text-gray-100">
					{item.amount}
				  </span>
		<span className = {`text-${item.pcColor}-600 text-sm ml-2`}>
					{item.percentage}
				  </span>
	  </p>
	  <p className = "text-sm text-gray-400 text-center">
		{item.title}
	  </p>
	</div>
  );
}

export default Widget;