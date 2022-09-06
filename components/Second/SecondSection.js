/** @format */

import { Typography, Stack, Box } from '@mui/material';
import img from '../../public/mech3.jpg';
import Image from 'next/image';
import { Card } from '@mui/material';
import { CardMedia, CardContent } from '@mui/material';
import LayoutSection from './LayoutSection';
import styles from '/styles/Homes.module.scss';

const SecondSection = ({ maxWidth1200, maxWidth600 }) => {
	return (
		<Box className={styles.fade600}>
			<Stack
				className={styles.fade1200}
				direction='column'
				spacing={!maxWidth600 ? 5 : 8}>
				<LayoutSection
					animation={styles.visi1}
					maxWidth1200={maxWidth1200}
					maxWidth600={maxWidth600}
					direction='row'
					mainText='Historical Perspective'
					text='Our group exists for 2000 years. Every year we are developing
				new aproaches in the industry of the new technologies. We are
				the best from the best.'>
					<Card
						sx={{
							boxShadow: '10px 15px 10px rgba(206, 218, 236, 1)',
							width: !maxWidth600 ? 400 : 300,
							minHeight: !maxWidth1200 ? 300 : 180,
							position: 'relative',
							borderRadius: 10,
							overflow: 'hidden'
						}}>
						<CardMedia>
							<Image src={img} objectFit='cover' layout='fill' alt='image' />
						</CardMedia>
					</Card>
				</LayoutSection>
				<LayoutSection
					animation={styles.visi2}
					maxWidth1200={maxWidth1200}
					maxWidth600={maxWidth600}
					direction='row-reverse'
					mainText='Our Team'
					text='Our team is qualified to do the most 
				difficult things in the whole Universe. We are from different league.'>
					<Stack
						sx={{
							py: 4,
							px: !maxWidth600 ? 7 : 0,
							boxShadow: !maxWidth600
								? '3px 7px 10px rgba(206, 218, 236, 1)'
								: null
						}}
						direction='row'
						spacing={3}
						justifyContent='center'>
						{['Steve', 'Eugeny', 'Richard'].map((item, indx) => {
							return (
								<Card
									key={indx}
									sx={{
										width: !maxWidth600 ? 150 : 100,
										height: !maxWidth600 ? 250 : 190,
										borderRadius: 5,
										overflow: 'hidden'
									}}>
									<CardMedia sx={{ height: '80%', position: 'relative' }}>
										<Image
											src={`/Group/${indx}.jpg`}
											objectFit='cover'
											layout='fill'
											alt='image'
										/>
									</CardMedia>
									<CardContent>
										<Typography fontFamily='Orbitron' textAlign='center'>
											{item}
										</Typography>
									</CardContent>
								</Card>
							);
						})}
					</Stack>
				</LayoutSection>
			</Stack>
		</Box>
	);
};

export default SecondSection;
