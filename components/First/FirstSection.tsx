/** @format */
import { Typography, Box, BoxTypeMap } from '@mui/material';
import React, { MutableRefObject } from 'react';
import Image from 'next/image';
import SlideComp from '../SlideComp';
import styles from '/styles/Homes.module.scss';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface firstSection_schema {
	myRef: MutableRefObject<
		MutableRefObject<OverridableComponent<BoxTypeMap<{}, 'div'>>>
	>;
	maxWidth1200: boolean;
	maxWidth600: boolean;
}

const FirstSection: React.FC<firstSection_schema> = ({
	myRef,
	maxWidth1200,
	maxWidth600
}) => {
	return (
		<>
			<section>
				<Box
					ref={myRef}
					sx={{
						position: 'relative',
						width: '100%',
						height: '100vh'
					}}>
					{!maxWidth1200 ? (
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
										src={'/Group/mech.gif'}
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
										src={'/Group/mech2.gif'}
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
							<Image
								objectFit='cover'
								layout='fill'
								src={'/Group/mech.gif'}
								alt='image'
							/>
						</Box>
					)}
					<SlideComp slide={styles.visible}>
						<Box
							className={styles.fade600}
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
									p: !maxWidth600 ? 10 : 7,
									width: '100%',
									height: '100%'
								}}>
								<Typography
									fontWeight={700}
									textAlign='center'
									fontSize={!maxWidth600 ? 60 : 30}
									sx={{
										color: 'black',
										margin: 'auto'
									}}>
									Mechanical Shop
								</Typography>
								<Typography
									textAlign='center'
									fontSize={!maxWidth600 ? 20 : 15}
									sx={{
										color: 'black',
										margin: 'auto'
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
