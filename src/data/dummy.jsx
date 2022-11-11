import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {
  CgProfile,
  HiOutlineLogout,
  MdHealthAndSafety
} from "react-icons/all.js";
import {BsBoxSeam} from 'react-icons/bs';
import {
  FiBarChart,
  FiShoppingBag
} from 'react-icons/fi';
import {HiOutlineRefresh} from 'react-icons/hi';
import {IoMdContacts} from 'react-icons/io';
import {MdOutlineSupervisorAccount} from 'react-icons/md';
import {RiContactsLine} from 'react-icons/ri';

export const ecommerceChartData = [
  {
	"name" : "Jan",
	"Total": 4000,
  },
  {
	"name" : "Feb",
	"Total": 3000,
  },
  {
	"name" : "Mar",
	"Total": 2000,
  },
  {
	"name" : "Apr",
	"Total": 2780,
  },
  {
	"name" : "May",
	"Total": 1890,
  },
  {
	"name" : "June",
	"Total": 2390,
  },
]

export const customersColumns = [
  {
	field     : 'id',
	headerName: 'ID',
	width     : 70
  },
  {
	field     : 'name',
	headerName: 'Organisation',
	width     : 130
  },
  {
	field      : 'email',
	headerName : 'Email',
	description: 'email',
	sortable   : false,
	width      : 160,
	renderCell : (params) =>
	  `hq@${params.row.name?.toLowerCase()
				  .slice(0, 5) || 'org'}.com`,
  },
  {
	field     : 'payment',
	headerName: 'Payment ($)',
	width     : 100,
  },
  {
	field     : 'status',
	headerName: 'Payment Status',
	width     : 130,
	renderCell: (params) => {
	  const className = () => {
		let status = params.row.status;
		if (status === "successful")
		  return "text-green-600 bg-green-200"
		else if (status === "pending")
		  return "text-amber-600 bg-amber-200"
		else return "text-red-600 bg-red-200"
	  }
	  
	  return (
		<p className = {`${className()} p-2 rounded-lg`}>
		  {params.row.status}
		</p>
	  )
	}
  },
];

export const customersRows = [
  {
	id     : 1,
	name   : 'Snows',
	payment: 35,
	status : "successful",
  },
  {
	id     : 2,
	name   : 'Lannisters',
	payment: 42,
	status : "successful",
  },
  {
	id     : 3,
	name   : 'Baratheons',
	payment: 45,
	status : "pending",
  },
  {
	id     : 4,
	name   : 'Starks',
	payment: 16,
	status : "successful",
  },
  {
	id     : 5,
	name   : 'Targaryens',
	payment: 6,
	status : "declined",
  },
  {
	id     : 6,
	name   : "Witches",
	payment: 150,
	status : "pending",
  },
  {
	id     : 7,
	name   : 'Ferrara',
	payment: 44,
	status : "pending",
  },
  {
	id     : 8,
	name   : 'Rossini',
	payment: 36,
	status : "declined",
	
  },
  {
	id     : 9,
	name   : 'Laids',
	payment: 65,
	status : "pending",
  },
  {
	id     : 10,
	name   : 'Scots',
	payment: 65,
	status : "declined",
  },
];

export const employeesColumns = [
  {
	field     : 'id',
	headerName: 'ID',
	width     : 70
  },
  {
	field     : 'firstName',
	headerName: 'First name',
	width     : 130
  },
  {
	field     : 'lastName',
	headerName: 'Last name',
	width     : 130
  },
  {
	field      : 'email',
	headerName : 'Email',
	description: 'email',
	sortable   : false,
	width      : 160,
	renderCell : (params) =>
	  `${params.row.firstName?.slice(0, 1)
		 || 'C'}${params.row.lastName?.slice(0, 3)
				  || 'E'}@centrale.com`,
	
  },
  {
	field     : 'prs',
	headerName: 'PRs',
	width     : 80,
  },
  {
	field     : 'status',
	headerName: 'Status',
	width     : 130,
	renderCell: (params) => {
	  const className = () => {
		let status = params.row.status;
		if (status === "active")
		  return "text-green-600 bg-green-200"
		else if (status === "away")
		  return "text-amber-600 bg-amber-200"
		else return "text-red-600 bg-red-200"
	  }
	  
	  return (
		<p className = {`${className()} p-2 rounded-lg`}>
		  {params.row.status}
		</p>
	  )
	}
  },
];

export const employeesRows = [
  {
	id       : 1,
	lastName : 'Snow',
	firstName: 'Jon',
	prs      : 35,
	status   : "active",
  },
  {
	id       : 2,
	lastName : 'Lannister',
	firstName: 'Cersei',
	prs      : 42,
	status   : "active",
  },
  {
	id       : 3,
	lastName : 'Lannister',
	firstName: 'Jaime',
	prs      : 45,
	status   : "away",
  },
  {
	id       : 4,
	lastName : 'Stark',
	firstName: 'Arya',
	prs      : 16,
	status   : "active",
  },
  {
	id       : 5,
	lastName : 'Targaryen',
	firstName: 'Daenerys',
	prs      : 6,
	status   : "offline",
  },
  {
	id       : 6,
	lastName : 'Melisandre',
	firstName: "Witch",
	prs      : 150,
	status   : "away",
  },
  {
	id       : 7,
	lastName : 'Clifford',
	firstName: 'Ferrara',
	prs      : 44,
	status   : "away",
  },
  {
	id       : 8,
	lastName : 'Frances',
	firstName: 'Rossini',
	prs      : 36,
	status   : "offline",
	
  },
  {
	id       : 9,
	lastName : 'Roxie',
	firstName: 'Harvey',
	prs      : 65,
	status   : "away",
  },
  {
	id       : 10,
	lastName : 'Stark',
	firstName: 'Ned',
	prs      : 65,
	status   : "offline",
  },
];

export const basicTableData = [
  {
	id      : 1143155,
	product : "Acer Nitro 5",
	img     : "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
	customer: "John Smith",
	date    : "1 March",
	amount  : 785,
	method  : "Cash on Delivery",
	status  : "Approved",
  },
  {
	id      : 2235235,
	product : "Playstation 5",
	img     : "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
	customer: "Michael Doe",
	date    : "1 March",
	amount  : 900,
	method  : "Online Payment",
	status  : "Pending",
  },
  {
	id      : 2342353,
	product : "Redragon S101",
	img     : "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
	customer: "John Smith",
	date    : "1 March",
	amount  : 35,
	method  : "Cash on Delivery",
	status  : "Pending",
  },
  {
	id      : 2357741,
	product : "Razer Blade 15",
	img     : "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
	customer: "Jane Smith",
	date    : "1 March",
	amount  : 920,
	method  : "Online",
	status  : "Approved",
  },
  {
	id      : 2342355,
	product : "ASUS ROG Strix",
	img     : "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
	customer: "Harold Carol",
	date    : "1 March",
	amount  : 2000,
	method  : "Online",
	status  : "Pending",
  },
];

export const links = [
  {
	title: 'Dashboard',
	links: [
	  {
		name: 'ecommerce',
		icon: <FiShoppingBag/>,
	  },
	],
  },
  
  {
	title: 'lists',
	links: [
	  {
		name: 'orders',
		icon: <AiOutlineShoppingCart/>,
	  },
	  {
		name: 'employees',
		icon: <IoMdContacts/>,
	  },
	  {
		name: 'customers',
		icon: <RiContactsLine/>,
	  },
	],
  },
  {
	title: 'Apps',
	links: [
	  {
		name: 'system-health',
		icon: <MdHealthAndSafety/>,
	  }
	],
  },
  {
	title: 'user',
	links: [
	  {
		name: 'profile',
		icon: <CgProfile/>,
	  },
	  {
		name: 'logout',
		icon: <HiOutlineLogout/>,
	  },
	],
  },
];

export const earningData = [
  {
	icon      : <MdOutlineSupervisorAccount/>,
	amount    : '39,354',
	percentage: '-4%',
	title     : 'Customers',
	iconColor : '#03C9D7',
	iconBg    : '#E5FAFB',
	pcColor   : 'red',
  },
  {
	icon      : <BsBoxSeam/>,
	amount    : '4,396',
	percentage: '+23%',
	title     : 'Products',
	iconColor : 'rgb(255, 244, 229)',
	iconBg    : 'rgb(254, 201, 15)',
	pcColor   : 'green',
  },
  {
	icon      : <FiBarChart/>,
	amount    : '423,39',
	percentage: '+38%',
	title     : 'Sales',
	iconColor : 'rgb(228, 106, 118)',
	iconBg    : 'rgb(255, 244, 229)',
	
	pcColor: 'green',
  },
  {
	icon      : <HiOutlineRefresh/>,
	amount    : '39,354',
	percentage: '-12%',
	title     : 'Refunds',
	iconColor : 'rgb(0, 194, 146)',
	iconBg    : 'rgb(235, 250, 242)',
	pcColor   : 'red',
  },
];