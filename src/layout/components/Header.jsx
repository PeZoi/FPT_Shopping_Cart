import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartAction } from "../../redux/actions";

const pages = ["home", "products", "reviews"];

function Header() {
	const dispatch = useDispatch();
	const { size } = useSelector((state) => state.cartData);

	useEffect(() => {
		dispatch(getCartAction());
	}, [dispatch]);

	return (
		<AppBar
			position='static'
			className='p-4'
			sx={{ backgroundColor: "white", color: "gray" }}
		>
			<Container maxWidth='xl'>
				<div className='flex items-center justify-between'>
					<div className='flex justify-center items-center'>
						<Link to={"/"} className='flex justify-center items-center'>
							<AdbIcon
								sx={{
									display: { xs: "none", md: "flex" },
									mr: 1,
									color: "#32a6db",
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
									color: "#32a6db",
									textDecoration: "none",
								}}
							>
								Logo
							</Typography>
						</Link>

						<div className='flex justify-center items-center'>
							{pages.map((page) => (
								<NavLink
									to={`/${page}`}
									key={page}
									activeclassname='active'
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

					<Link to={"/checkout"}>
						<Badge
							color='error'
							badgeContent={size}
							className='cursor-pointer'
						>
							<ShoppingCartIcon />
						</Badge>
					</Link>
				</div>
			</Container>
		</AppBar>
	);
}
export default Header;
