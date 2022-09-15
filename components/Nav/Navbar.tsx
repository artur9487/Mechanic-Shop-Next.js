/** @format */
import { IconButton, Stack, Typography, Box, BoxTypeMap } from '@mui/material';
import SlideComp from '../SlideComp';
import { MutableRefObject, useRef, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import styles from '/styles/Homes.module.scss';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React from 'react';

interface navbar_schema {
	firstSectionRef: MutableRefObject<
		MutableRefObject<OverridableComponent<BoxTypeMap<{}, 'div'>>>
	>;
	secondSectionRef: MutableRefObject<
		OverridableComponent<BoxTypeMap<{}, 'div'>>
	>;
	thirdSectionRef: MutableRefObject<
		OverridableComponent<BoxTypeMap<{}, 'div'>>
	>;
	fourthSectionRef: MutableRefObject<
		OverridableComponent<BoxTypeMap<{}, 'div'>>
	>;
	fifthSectionRef: MutableRefObject<
		OverridableComponent<BoxTypeMap<{}, 'div'>>
	>;
	sixthSectionRef: MutableRefObject<
		OverridableComponent<BoxTypeMap<{}, 'div'>>
	>;
	maxWidth1200: boolean;
	maxWidth900: boolean;
	maxWidth600: boolean;
}

const Navbar: React.FC<navbar_schema> = ({
	firstSectionRef,
	secondSectionRef,
	thirdSectionRef,
	fourthSectionRef,
	fifthSectionRef,
	sixthSectionRef,
	maxWidth1200,
	maxWidth900,
	maxWidth600
}) => {
	const scrollFunction: (reference: any) => void = (reference) => {
		return window.scroll({
			behavior: 'smooth',
			top: reference.current.offsetTop - 100
		});
	};

	const navRef = useRef(null);
	const obj = [
		{ name: 'Home', action: () => scrollFunction(firstSectionRef) },
		{
			name: 'About us',
			action: () => scrollFunction(secondSectionRef)
		},
		{ name: 'Offert', action: () => scrollFunction(thirdSectionRef) },
		{ name: 'Gallery', action: () => scrollFunction(fourthSectionRef) },
		{ name: 'Reccomendation', action: () => scrollFunction(fifthSectionRef) },
		{ name: 'Contact', action: () => scrollFunction(sixthSectionRef) }
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
				<Typography sx={{}}>{item.name}</Typography>
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
						slideToRight: 0,
						zIndex: 999,
						slideToLeft: 0,
						bottom: 100
					}}>
					<SlideComp slide={styles.visible}>
						<Stack
							direction='row'
							alignItems='center'
							sx={{
								height: 100,
								bgcolor: 'black'
							}}>
							{!maxWidth1200 ? (
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
											color: 'white'
										}}>
										Mechanical Shop
									</Typography>
									<Stack
										direction='row'
										alignItems='center'
										justifyContent='space-evenly'
										sx={{ width: !maxWidth900 ? '45%' : '60%' }}>
										{obj.map((item, indx) => {
											return (
												<Typography
													key={indx}
													component='div'
													onClick={() => item.action()}
													sx={{
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
											variant={!maxWidth600 ? 'h4' : 'h5'}
											sx={{ color: 'white' }}>
											Mechanical Shop
										</Typography>
										<IconButton onClick={handleClick}>
											<MenuIcon sx={{ fontSize: 40, color: 'white' }} />
										</IconButton>
										{maxWidth600 ? (
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
