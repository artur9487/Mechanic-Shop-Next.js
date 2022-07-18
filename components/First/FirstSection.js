/** @format */
import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import img from '../../public/mech.gif';
import img2 from '../../public/mech2.gif';
import SlideComp from '../SlideComp';
import styles from '/styles/Homes.module.scss';

const FirstSection = ({ myRef, matches, matches3 }) => {
	return (
		<>
			<section>
				<Box
					ref={myRef}
					sx={{
						width: '100%',
						position: 'relative',
						height: '110vh'
					}}>
					{!matches ? (
						<>
							<Box
								sx={{
									position: 'absolute',
									width: '50%',
									height: '100%',
									top: 0,
									left: 0
								}}>
								<Box
									sx={{ position: 'relative', width: '100%', height: '100%' }}>
									<Image
										priority={true}
										objectFit='cover'
										layout='fill'
										src={img}
										alt='image'
									/>
								</Box>
							</Box>
							<Box
								sx={{
									position: 'absolute',
									width: '50%',
									height: '100%',
									top: 0,
									left: '50%'
								}}>
								<Box
									sx={{
										position: 'relative',
										width: '100%',
										height: '100%'
									}}>
									<Image
										priority={true}
										objectFit='cover'
										layout='fill'
										src={img2}
										alt='image'
									/>
								</Box>
							</Box>
						</>
					) : (
						<Box
							sx={{
								position: 'absolute',
								width: '100%',
								height: '100%',
								top: 0,
								left: 0
							}}>
							<Image objectFit='cover' layout='fill' src={img} alt='image' />
						</Box>
					)}

					<SlideComp slide={styles.visi}>
						<Box
							sx={{
								overflow: 'hidden',
								borderRadius: 10,
								bgcolor: 'rgba(255,255,255, 0.6)',
								position: 'absolute',
								top: '50%',
								right: '50%',
								transform: 'translate(50%, -50%)'
							}}>
							<Box
								className={styles.contentBox}
								sx={{
									p: !matches3 ? 10 : 7,
									width: '100%',
									height: '100%'
								}}>
								<Typography
									fontWeight={700}
									textAlign='center'
									fontSize={!matches3 ? 60 : 30}
									sx={{
										color: 'black',
										margin: 'auto',
										fontFamily: 'Orbitron'
									}}>
									Mechanical Shop
								</Typography>
								<Typography
									textAlign='center'
									fontSize={!matches3 ? 20 : 15}
									sx={{
										color: 'black',
										margin: 'auto',
										fontFamily: 'Orbitron'
									}}>
									Mechanic Street 42
								</Typography>
							</Box>
						</Box>
					</SlideComp>
				</Box>
			</section>
		</>
	);
};

export default FirstSection;
