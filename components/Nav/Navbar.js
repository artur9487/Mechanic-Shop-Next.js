/** @format */
import { IconButton, Stack, Typography } from '@mui/material';
import SlideComp from '../SlideComp';
import { useRef, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import styles from '/styles/Homes.module.scss';

const Navbar = ({ myRef1, myRef2, myRef3, myRef4, myRef5, myRef6 }) => {
	const matches = useMediaQuery('(max-width:900px');
	const matches2 = useMediaQuery('(max-width:1200px)');
	const func = (refik) => {
		return window.scroll({
			behavior: 'smooth',
			top: refik.current.offsetTop - navRef.current.offsetHeight
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
						zIndex: 999
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
									className={styles.fade900}
									sx={{
										width: '100vw'
									}}
									direction='row'
									alignItems='center'
									justifyContent='space-evenly'>
									<Typography
										variant='h5'
										sx={{ color: 'white', fontFamily: 'Orbitron' }}>
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
								<Stack
									className={styles.fade900}
									direction='row'
									sx={{ width: '100vw' }}
									justifyContent='center'
									alignItems='center'>
									<Typography
										variant='h4'
										sx={{ color: 'white', fontFamily: 'Orbitron' }}>
										Mechanical Shop
									</Typography>
									<IconButton onClick={handleClick}>
										<MenuIcon sx={{ fontSize: 40, color: 'white' }} />
									</IconButton>
									<Menu
										id='basic-menu'
										anchorEl={anchorEl}
										open={open}
										onClose={handleClose}
										MenuListProps={{
											'aria-labelledby': 'basic-button'
										}}>
										{obj.map((item, indx) => {
											return (
												<MenuItem
													key={indx}
													sx={{ px: 4, py: 1, cursor: 'pointer' }}
													onClick={() => {
														item.action();
														handleClose();
													}}>
													<Typography sx={{ fontFamily: 'Orbitron' }}>
														{item.name}
													</Typography>
												</MenuItem>
											);
										})}
									</Menu>
								</Stack>
							)}
						</Stack>
					</SlideComp>
				</Stack>
			</nav>
		</>
	);
};

export default Navbar;
