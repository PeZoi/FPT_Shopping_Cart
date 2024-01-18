import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";

const pages = ["home", "products", "reviews"];

function Header() {
	return (
		<AppBar
			position='static'
			className='p-4'
			sx={{ backgroundColor: "white", color: "gray" }}
		>
			<Container maxWidth='xl'>
				<div className='flex items-center justify-between'>
					<div className='flex justify-center items-center'>
						<AdbIcon
							sx={{
								display: { xs: "none", md: "flex" },
								mr: 1,
								color: "black",
							}}
						/>
						<Typography
							variant='h6'
							noWrap
							component='a'
							href='#app-bar-with-responsive-menu'
							sx={{
								mr: 2,
								display: { xs: "none", md: "flex" },
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "black",
								textDecoration: "none",
							}}
						>
							Logo
						</Typography>

						<div className='flex justify-center items-center'>
							{pages.map((page) => (
								<NavLink
									to={`/${page}`}
									key={page}
									activeClassName='active'
								>
									<MenuItem>
										<Typography textAlign='center' fontWeight='bold'>
											{page.toUpperCase()}
										</Typography>
									</MenuItem>
								</NavLink>
							))}
						</div>
					</div>

					<Badge color='error' badgeContent={5} className='cursor-pointer'>
						<ShoppingCartIcon />
					</Badge>
				</div>
			</Container>
		</AppBar>
	);
}
export default Header;
