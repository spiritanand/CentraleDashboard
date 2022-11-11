import React from 'react';
import github from "../../data/github.png";

function Footer(props) {
  return (
	<div className = "flex flex-col justify-center items-center gap-4
	p-2 bg-secondary-dark-bg text-gray-200 mt-10"
	>
	  <p className="font-extrabold text-3xl">Made with ♥️</p>
	  <a href = "https://github.com/spiritmonster/CentraleDashboard">
		<img src = {github}
			 alt = ""
			 className = "w-10 h-10"
		/>
	  </a>
	  <p className="font-extralight text-sm">Spirit ✌️</p>
	</div>
  );
}

export default Footer;