/** @format */
import { IconButton, Stack, Typography, Box } from '@mui/material';
import SlideComp from '../SlideComp';
import { useRef, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import styles from '/styles/Homes.module.scss';

const Navbar = ({
	myRef1,
	myRef2,
	myRef3,
	myRef4,
	myRef5,
	myRef6,
	matches,
	matches2,
	matches3
}) => {
	const func = (refik) => {
		return window.scroll({
			behavior: 'smooth',
			top: refik.current.offsetTop - 100
		});
	};

	const navRef = useRef(null);
	const obj = [
		{ name: 'Home', action: () => func(myRef1) },
		{
			name: 'About us',
			action: () => func(myRef2)
		},
		{ name: 'Offert', action: () => func(myRef3) },
		{ name: 'Gallery', action: () => func(myRef4) },
		{ name: 'Reccomendation', action: () => func(myRef5) },
		{ name: 'Contact', action: () => func(myRef6) }
	];
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const menuObj = obj.map((item, indx) => {
		return (
			<MenuItem
				key={indx}
				sx={{ px: 4, py: 1, cursor: 'pointer' }}
				onClick={() => {
					item.action();
					handleClose();
				}}>
				<Typography sx={{ fontFamily: 'Orbitron' }}>{item.name}</Typography>
			</MenuItem>
		);
	});

	return (
		<>
			<nav className='nav'>
				<Stack
					direction='row'
					alignItems='center'
					ref={navRef}
					sx={{
						position: 'fixed',
						top: 0,
						right: 0,
						zIndex: 999,
						left: 0,
						bottom: 100
					}}>
					<SlideComp slide={styles.visi}>
						<Stack
							direction='row'
							alignItems='center'
							sx={{
								height: 100,
								bgcolor: 'black'
							}}>
							{!matches ? (
								<Stack
									className={styles.fade1200}
									sx={{
										width: '100vw'
									}}
									direction='row'
									alignItems='center'
									justifyContent='space-evenly'>
									<Typography
										variant='h5'
										sx={{
											color: 'white',
											fontFamily: 'Orbitron'
										}}>
										Mechanical Shop
									</Typography>
									<Stack
										direction='row'
										alignItems='center'
										justifyContent='space-evenly'
										sx={{ width: !matches2 ? '45%' : '60%' }}>
										{obj.map((item, indx) => {
											return (
												<Typography
													key={indx}
													component='div'
													onClick={() => item.action()}
													sx={{
														fontFamily: 'Orbitron',
														color: 'white',
														cursor: 'pointer',
														'&:hover': {
															color: 'rgba(179, 226, 230)',
															transition: '.25s all linear'
														}
													}}>
													{item.name}
												</Typography>
											);
										})}
									</Stack>
								</Stack>
							) : (
								<Box className={styles.fade600}>
									<Stack
										className={styles.fade1200}
										direction='row'
										sx={{
											width: '100vw',
											borderColor: 'white'
										}}
										justifyContent='center'
										alignItems='center'>
										<Typography
											variant={!matches3 ? 'h4' : 'h5'}
											sx={{ color: 'white', fontFamily: 'Orbitron' }}>
											Mechanical Shop
										</Typography>
										<IconButton onClick={handleClick}>
											<MenuIcon sx={{ fontSize: 40, color: 'white' }} />
										</IconButton>
										{matches3 ? (
											<Menu
												id='basic-menu'
												anchorEl={anchorEl}
												sx={{
													width: 300,
													height: 500
												}}
												anchorPosition={{ top: 100, left: 150 }}
												open={open}
												onClose={handleClose}
												MenuListProps={{
													'aria-labelledby': 'basic-button'
												}}>
												{menuObj}
											</Menu>
										) : (
											<Menu
												id='basic-menu'
												anchorEl={anchorEl}
												sx={{
													width: 300,
													height: 500
												}}
												anchorOrigin={{
													vertical: 'bottom',
													horizontal: 'left'
												}}
												open={open}
												onClose={handleClose}
												MenuListProps={{
													'aria-labelledby': 'basic-button'
												}}>
												{menuObj}
											</Menu>
										)}
									</Stack>
								</Box>
							)}
						</Stack>
					</SlideComp>
				</Stack>
			</nav>
		</>
	);
};

export default Navbar;
