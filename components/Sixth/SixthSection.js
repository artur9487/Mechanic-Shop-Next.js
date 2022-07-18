/** @format */
import { Box, Stack, Typography } from '@mui/material';
import SlideComp from '../SlideComp';
import styles from '/styles/Homes.module.scss';

const SixthSection = ({ matches, matches3 }) => {
	return (
		<>
			<Stack
				className={styles.fade1200}
				direction={!matches ? 'row' : 'column'}
				alignItems='center'
				spacing={4}
				sx={{ width: '100%', height: !matches ? '80%' : 1000 }}>
				<Box
					sx={{
						width: !matches ? '50%' : !matches3 ? '75%' : '100%',
						height: !matches ? '80%' : !matches3 ? '45%' : '35%'
					}}>
					<SlideComp slide={styles.cardItem0}>
						<Box sx={{ width: '100%', height: '100%' }}>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160874.47389090277!2d21.214565426418673!3d52.25964653855763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1649096325634!5m2!1spl!2spl'
								width='100%'
								height='100%'
								loading='lazy'></iframe>
						</Box>
					</SlideComp>
				</Box>
				<Box
					sx={{
						width: !matches ? '50%' : !matches3 ? '75%' : '100%',
						height: !matches ? '80%' : '45%'
					}}>
					<SlideComp slide={styles.cardItem05}>
						<Stack
							direction='column'
							sx={{ width: '100%', margin: 'auto', height: '100%' }}>
							<Stack
								sx={{ margin: 'auto', height: '100%' }}
								direction='column'
								justifyContent='space-evenly'>
								<Typography
									sx={{ fontFamily: 'Orbitron' }}
									variant={!matches3 ? 'h3' : 'h4'}>
									+1234567
								</Typography>
								<Typography
									sx={{ fontFamily: 'Orbitron' }}
									variant={!matches3 ? 'h3' : 'h4'}>
									Adress:
								</Typography>
								<Typography
									sx={{ fontFamily: 'Orbitron' }}
									variant={!matches3 ? 'h5' : 'h6'}>
									Mechanic Street 42
								</Typography>
								<Typography
									sx={{ fontFamily: 'Orbitron' }}
									variant={!matches3 ? 'h3' : 'h4'}>
									Hours of opening:
								</Typography>
								<Typography
									sx={{ fontFamily: 'Orbitron' }}
									variant={!matches3 ? 'h5' : 'h6'}>
									monday-Friday 7:00-16:00
								</Typography>
								<Typography
									sx={{ fontFamily: 'Orbitron' }}
									variant={!matches3 ? 'h5' : 'h6'}>
									Saturday 7:00-14:00
								</Typography>
								<Typography
									sx={{ fontFamily: 'Orbitron', color: 'red' }}
									variant={!matches3 ? 'h5' : 'h6'}>
									Sunday Closet
								</Typography>
							</Stack>
						</Stack>
					</SlideComp>
				</Box>
			</Stack>

			<Stack
				justifyContent='center'
				alignItems='center'
				sx={{
					width: '100%',
					height: 100,
					position: 'absolute',
					bottom: 0,
					right: 0,
					bgcolor: 'black'
				}}>
				<Typography sx={{ color: 'white', fontFamily: 'Orbitron' }}>
					@2022 All Rights Reserved
				</Typography>
			</Stack>
		</>
	);
};

export default SixthSection;
