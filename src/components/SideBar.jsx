import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import BarChartIcon from '@mui/icons-material/BarChart';
import LineAxisIcon from '@mui/icons-material/LineAxis';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { palette } from "../theme";
import userAvatar from "../assets/images/user.webp";

const sideBarMenu = [
	{
		title: "Dashboard",
		id: "dashboard-menu",
		link: "/",
		routeName: "",
		icon: <HomeOutlinedIcon />
	},
	{
		title: "Users",
		id: "user-management-submenu"
	},
	{
		title: "All Users",
		id: "users-menu",
		link: "/users",
		routeName: "users",
		icon: <PeopleOutlinedIcon />
	},
	{
		title: "Create User",
		id: "create-user-menu",
		link: "/createUser",
		routeName: "createUser",
		icon: <PersonAddAlt1OutlinedIcon />
	},
	{
		title: "Pages",
		id: "pages-submenu"
	},
	{
		title: "Calendar",
		id: "calendar-menu",
		link: "/calendar",
		routeName: "calendar",
		icon: <CalendarMonthOutlinedIcon />
	},
	{
		title: "Bar Chart",
		id: "bar-chart-menu",
		link: "/barChart",
		routeName: "barChart",
		icon: <BarChartIcon />
	},
	{
		title: "Line Chart",
		id: "line-chart-menu",
		link: "/lineChart",
		routeName: "lineChart",
		icon: <LineAxisIcon />
	},
	{
		title: "Pie Chart",
		id: "pie-chart-menu",
		link: "/pieChart",
		routeName: "pieChart",
		icon: <DonutLargeIcon />
	},
	{
		title: "Geo Chart",
		id: "geo-chart-menu",
		link: "/geoChart",
		routeName: "geoChart",
		icon: <MapOutlinedIcon />
	},
	{
		title: "FAQ",
		id: "faq-menu",
		link: "/FAQ",
		routeName: "FAQ",
		icon: <QuestionAnswerIcon />
	}
]

const SideBar = () => {
	const theme = useTheme();
	const colors = palette(theme.palette.mode);
	const location = useLocation();
	const pageName = location.pathname.split('/')[1];
	const isMobile = useMediaQuery("(max-width:670px)");
	const [collapsed, setCollapsed] = useState(false);
	const [activeMenu, setActiveMenu] = useState(pageName);

	const handleActiveMenu = (menu) => {
		setActiveMenu(menu)
	}

	return (
		<Sidebar
			collapsed={isMobile ? true : collapsed}
			backgroundColor={colors.blue[200]}
			rootStyles={{
				border: "none",
				color: colors.grey[100]
			}}
		>
			<Menu
				menuItemStyles={{
					button: ({ level, active }) => {
						if (level === 0 || level === 1) {
							return {
								backgroundColor: active ? colors.blue[50] : undefined,
								height: "40px",
								"&:hover": {
									backgroundColor: colors.blue[300]
								}
							}
						}
					},
				}}>
				<MenuItem
					aria-label='dash-pilot'
					onClick={() => setCollapsed((prev) => !prev)}
					icon={<MenuOutlinedIcon />}
					disabled={isMobile ? true : false}
				>
					{!isMobile && !collapsed && (
						<Box
							display="flex"
							justifyContent="space-between"
							alignItems="center"
							ml="5px"
						>
							<Typography variant="h2" color={colors.grey[100]} fontWeight="500" >
								DashPilot
							</Typography>
						</Box>
					)}
				</MenuItem>

				{!isMobile && !collapsed && (
					<Box m={2}>
						<Box display="flex" justifyContent="center" alignItems="center">
							<img alt='profile-pic' width="100px" height="100px" src={userAvatar} loading="lazy"
								style={{ borderRadius: "50%", background: "#c1bfe5" }} />
						</Box>
						<Box p={1} textAlign="center" >
							<Typography variant='h3'> Shweta </Typography>
							<Typography variant='h6' color={colors.accent[500]} > Senior UI Developer </Typography>
						</Box>
					</Box>
				)}

				{sideBarMenu.map(menuItems => (
					menuItems.link ?
						<MenuItem
							onClick={() => handleActiveMenu(menuItems.routeName)}
							id={menuItems.id}
							component={<Link to={menuItems.link} />}
							active={activeMenu === menuItems.routeName}
							icon={menuItems.icon}
							aria-label={menuItems.id}
							key={menuItems.id}
						>
							{menuItems.title}
						</MenuItem>
						:
						<Box key={menuItems.id} px={3} py={1}>
							<Typography color={colors.blue[700]} fontSize={"12px"} fontWeight="500" >{menuItems.title}</Typography>
						</Box>
				))}
			</Menu>
		</Sidebar>
	)
}

export default SideBar;