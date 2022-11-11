import React from 'react';

function NotFound(props) {
  return (
	<div className = "h-screen dark:text-gray-200 flex flex-col justify-center items-center
	 gap-7 text-center"
	>
	  <p className = "text-2xl font-light">We searched everywhere 😅, but</p>
	  <p className = "uppercase font-extrabold text-6xl">page not found 💔</p>
	</div>
  );
}

export default NotFound;