/** @format */

import { Typography, Stack } from '@mui/material';
import img from '../../public/mech3.jpg';
import Image from 'next/image';
import { Card } from '@mui/material';
import { CardMedia, CardContent } from '@mui/material';
import LayoutSection from './LayoutSection';
import styles from '/styles/Homes.module.scss';

const SecondSection = ({ matches, matches3 }) => {
	return (
		<Stack className={styles.fade1200} direction='column' spacing={4}>
			<LayoutSection
				animation={styles.visi1}
				matches={matches}
				matches3={matches3}
				direction='row'
				mainText='Historical Perspective'
				text='Our group exists for 2000 years. Every year we are developing
				new aproaches in the industry of the new technologies. We are
				the best from the best.'>
				<Card
					sx={{
						width: !matches3 ? 400 : 300,
						minHeight: !matches ? 300 : 180,
						position: 'relative',
						borderRadius: 10,
						overflow: 'hidden'
					}}>
					<CardMedia>
						<Image src={img} objectFit='cover' layout='fill' />
					</CardMedia>
				</Card>
			</LayoutSection>
			<LayoutSection
				animation={styles.visi2}
				matches={matches}
				matches3={matches3}
				direction='row-reverse'
				mainText='Our Team'
				text='Our team is quealifited to do the most 
				difficult things in the whole Universe. We are from different legue.'>
				<Stack direction='row' spacing={3} justifyContent='center'>
					{['Steve', 'Eugeny', 'Richard'].map((item, indx) => {
						return (
							<Card
								key={indx}
								sx={{
									width: !matches3 ? 200 : 100,
									height: !matches3 ? 300 : 190,
									borderRadius: 5,
									overflow: 'hidden'
								}}>
								<CardMedia sx={{ height: '80%', position: 'relative' }}>
									<Image
										src={`/Group/${indx}.jpg`}
										objectFit='cover'
										layout='fill'
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
	);
};

export default SecondSection;
