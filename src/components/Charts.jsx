import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

function Charts({
				  aspect,
				  title,
				  data
				}) {
  return (
	<div className = "mt-12">
	  <div className = "flex flex-col items-center gap-4">
		<p className = "text-2xl capitalize font-semibold text-gray-500 dark:text-gray-300">
		  {title}
		</p>
		<ResponsiveContainer width = "90%"
							 aspect = {aspect}
		>
		  <AreaChart width = {730}
					 height = {250}
					 data = {data}
					 margin = {{
					   top   : 10,
					   right : 30,
					   left  : 0,
					   bottom: 0
					 }}
		  >
			<defs>
			  <linearGradient id = "colorTotal"
							  x1 = "0"
							  y1 = "0"
							  x2 = "0"
							  y2 = "1"
			  >
				<stop offset = "5%"
					  stopColor = "#8884d8"
					  stopOpacity = {0.8}
				/>
				<stop offset = "95%"
					  stopColor = "#8884d8"
					  stopOpacity = {0}
				/>
			  </linearGradient>
			</defs>
			<XAxis dataKey = "name"/>
			<YAxis/>
			<CartesianGrid strokeDasharray = "3 3"/>
			<Tooltip/>
			<Area type = "monotone"
				  dataKey = "Total"
				  stroke = "#8884d8"
				  fillOpacity = {1}
				  fill = "url(#colorTotal)"
			/>
		  </AreaChart>
		</ResponsiveContainer>
	  </div>
	</div>
  );
}

export default Charts;