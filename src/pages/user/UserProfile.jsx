import React from 'react';
import {CircularProgressbar} from "react-circular-progressbar";
import {
  MdPermIdentity,
  MdWork
} from "react-icons/all.js";
import avatar from "../../data/avatar.jpg"
import github from "../../data/github.png"
import linkedin from "../../data/linkedin.png"
import twitter from "../../data/twitter.png"

function UserProfile(props) {
  return (
	<div className = "mt-20 md:mt-6 p-4 dark:text-gray-300">
	  <p className = "text-4xl text-gray-500 dark:text-gray-200 mb-4 font-semibold text-center">
		Profile
	  </p>
	  {/*User brief*/}
	  <div className = "flex flex-wrap justify-center gap-12">
		{/*name, about and dp*/}
		<div className = "flex justify-center md:items-center gap-6">
		  {/*dp*/}
		  <div className = "">
			<img src = {avatar}
				 alt = "avatar"
				 className = "rounded-lg"
			/>
		  </div>
		  {/*name and about*/}
		  <div className = "flex flex-col gap-4">
			<div>
			  <p className = "text-blue-500 dark:text-blue-300 font-bold text-2xl w-max">
				Michael Jackson
			  </p>
			  <p className = "text-sm opacity-40 text-gray-500 dark:text-gray-200 mb-1
			  font-semibold"
			  >
				Senior Manager
			  </p>
			</div>
			<div>
			  <p className = "text-xl text-gray-700 mb-1 dark:text-gray-300 font-semibold">
				About
			  </p>
			  <p className = "max-w-sm">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, dolorum,
				magni. Ex quo sequi vel vero! Accusamus amet earum ex excepturi inventore
				perferendis quo ut? Adipisci aliquam dolores ducimus eveniet.
			  </p>
			</div>
		  </div>
		</div>
		{/*links and education*/}
		<div className = "flex flex-col justify-around gap-8 items-center">
		  {/*edu*/}
		  <div>
			<div className = "mb-2">
			  <p className = "text-2xl text-gray-700 dark:text-gray-200 font-semibold">
				Highest Education
			  </p>
			  <p className = "opacity-70">Random btech</p>
			</div>
			<div>
			  <p className = "text-xl text-gray-700  dark:text-gray-200 font-semibold">
				Hobbies
			  </p>
			  <p className = "opacity-70">Tennis, golf, surfing</p>
			</div>
		  </div>
		  {/*social links*/}
		  <div className = "flex gap-4">
			<img src = {github}
				 alt = ""
				 className = "w-10 h-10 cursor-pointer"
			/>
			<img src = {linkedin}
				 alt = ""
				 className = "w-10 h-10  cursor-pointer"
			/>
			<img src = {twitter}
				 alt = ""
				 className = "w-10 h-10  cursor-pointer"
			/>
		  </div>
		</div>
	  </div>
	  
	  {/*  work fit, PI and experiences*/}
	  <div className = "flex flex-wrap gap-6 flex-col lg:flex-row w-4/5"
		   style = {{
			 margin: "3rem auto"
		   }}
	  >
		{/*match*/}
		<div className = "flex-1 flex flex-col drop-shadow-lg">
		  <p className = "font-bold text-xl"
		  >Matchability ✅
		  </p>
		  <CircularProgressbar value = "44"
							   text = "+44%"
							   strokeWidth = {5}
		  ></CircularProgressbar>
		  <div>
			<span className = "text-gray-400">Years of XP: </span>
			<span className = "font-semibold "> 5</span>
		  </div>
		  <div className = "mt-3">
			<span className = "text-gray-400">Skills </span>
			<div className = "flex flex items-center gap-2 flex-wrap mt-1">
			  <p className = "text-blue-500 bg-blue-200 w-min p-2 rounded-full cursor-pointer">Reactjs</p>
			  <p className = "text-blue-500 bg-blue-200 w-min p-2 rounded-full cursor-pointer">Typescript</p>
			  <p className = "text-blue-500 bg-blue-200 w-min p-2 rounded-full cursor-pointer">Firebase</p>
			  <p className = "text-blue-500 bg-blue-200 w-min p-2 rounded-full cursor-pointer">Express</p>
			  <p className = "text-blue-500 bg-blue-200 w-min p-2 rounded-full cursor-pointer">MongoDB</p>
			  <p className = "text-blue-500 bg-blue-200 w-min p-2 rounded-full cursor-pointer">Solidity</p>
			</div>
		  </div>
		</div>
		
		{/*Details*/}
		<div className = "text-center flex-1 drop-shadow-lg">
		  {/*Job info*/}
		  <MdWork className = "mx-auto mb-1"></MdWork>
		  <p className = "font-bold text-xl mb-2"
		  >
			Job Details
		  </p>
		  <div className = "flex flex-col gap-2">
			<div>
			  <span className = "text-gray-400">Employment: </span>
			  <span> Full time</span>
			</div>
			<div>
			  <span className = "text-gray-400">Manager: </span>
			  <span> Milly Bobby Brown</span>
			</div>
			<div>
			  <span className = "text-gray-400">Email: </span>
			  <span> mj@centrale.com</span>
			</div>
		  </div>
		  <hr className = "border-1 border-blue-500 my-4"/>
		  {/*personal info*/}
		  <MdPermIdentity className = "mx-auto mb-1"></MdPermIdentity>
		  <p className = "font-bold text-xl mb-2"
		  >
			Personal Information
		  </p>
		  <div className = "flex flex-col gap-2">
			<div>
			  <span className = "text-gray-400">Full Name: </span>
			  <span> Michael Jackson</span>
			</div>
			<div>
			  <span className = "text-gray-400">Gender: </span>
			  <span> Male</span>
			</div>
			<div>
			  <span className = "text-gray-400">Marital Status: </span>
			  <span> Single</span>
			</div>
			<div>
			  <span className = "text-gray-400">National ID: </span>
			  <span> 8172811201</span>
			</div>
		  </div>
		</div>
		
		{/*Past XP*/}
		<div className = "flex-1 drop-shadow-lg max-h-80 overflow-y-scroll p-1 m-1 border-y-1 border-y-blue-200 dark:border-y-blue-900">
		  <p className = "font-bold text-xl mb-2"
		  >
			Past XP
		  </p>
		  <ul className="flex flex-col gap-5">
			<li className = "flex flex-col gap-1">
			  <span>Senior Developer</span>
			  <span className = "opacity-50">Google</span>
			  <span className = "opacity-50">Jan 2020- July 2022</span>
			  <span className = "opacity-70">Contribution: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, ut.</span>
			</li>
			<li className = "flex flex-col gap-1">
			  <span>Frontend Developer</span>
			  <span className = "opacity-50">Meta</span>
			  <span className = "opacity-50">Aug 2018- Dec 2020</span>
			  <span className = "opacity-70">Contribution: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, ut.</span>
			</li>
			<li className = "flex flex-col gap-1">
			  <span>Junior Developer</span>
			  <span className = "opacity-50">Twitter</span>
			  <span className = "opacity-50">Jun 2017- Jul 2018</span>
			  <span className = "opacity-70">Contribution: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, ut.</span>
			</li>
		  </ul>
		</div>
	  </div>
	  
	  {/*  action buttons*/}
	</div>
  );
}

export default UserProfile;