import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import "./App.css"
import {useStateCtx} from "./contexts/provider.jsx";
import SystemHealth from "./pages/apps/SystemHealth.jsx";
import Ecommerce from "./pages/dashboard/Ecommerce.jsx";
import Customers from "./pages/lists/Customers.jsx"
import Employees from "./pages/lists/Employees.jsx";
import Orders from "./pages/lists/Orders.jsx";
import NotFound from "./pages/NotFound.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import Logout from "./pages/user/Logout.jsx";
import UserProfile from "./pages/user/UserProfile.jsx";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path = "/"
		 element = {<RootLayout></RootLayout>}
  >
	<Route index
		   element = {<Ecommerce/>}
	></Route>
	
	{/* dashboard  */}
	<Route path = "ecommerce"
		   element = {(
			 <Ecommerce/>
		   )}
	/>
	
	{/* lists  */}
	<Route path = "orders"
		   element = {<Orders/>}
	/>
	<Route path = "employees"
		   element = {<Employees/>}
	/>
	<Route path = "customers"
		   element = {<Customers/>}
	/>
	
	{/* apps  */}
	<Route path = "system-health"
		   element = {<SystemHealth/>}
	/>
	
	{/*user*/}
	
	<Route path = "profile"
		   element = {<UserProfile></UserProfile>}
	></Route>
	<Route path = "logout"
		   element = {<Logout></Logout>}
	></Route>
	
	{/*settings*/}
	
	{/*not found*/}
	<Route path = "*"
		   element = {<NotFound/>}
	/>
  </Route>
))

function App(props) {
  const {theme} = useStateCtx()
  
  return (
	<div className = {theme}
	>
	  <RouterProvider router = {router}></RouterProvider>
	</div>
  );
}

export default App;
