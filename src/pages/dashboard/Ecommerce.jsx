import React from 'react';
import Charts from "../../components/Charts.jsx";
import HeroInfo from "../../components/ecommerce/HeroInfo.jsx";
import Widget from "../../components/Widget.jsx";
import {
  earningData,
  ecommerceChartData
} from "../../data/dummy.jsx";

function Ecommerce(props) {
  return (
	<div className = "mt-12">
	  {/* HeroInfo section*/}
	  <div className = "flex flex-wrap lg:flex-nowrap justify-center items-center">
		<HeroInfo></HeroInfo>
		
		<div className = "flex flex-wrap gap-7 justify-center items-center mt-12 lg:mt-0 mx-3">
		  {earningData.map(item => (
			<Widget key = {item.title}
					item = {item}
			></Widget>
		  ))}
		</div>
	  </div>
	  
	  {/*Charts*/}
	  <Charts title = "last 6 months (revenue in $)"
			  data = {ecommerceChartData}
			  aspect = {2 / 1}
	  ></Charts>
	</div>
  );
}

export default Ecommerce;