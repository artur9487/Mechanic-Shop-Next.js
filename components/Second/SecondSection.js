/** @format */

import { Typography, Stack } from '@mui/material';
import img from '../../public/mech3.jpg';
import Image from 'next/image';
import { Card } from '@mui/material';
import { CardMedia, CardContent } from '@mui/material';
import LayoutSection from './LayoutSection';
import styles from '/styles/Homes.module.scss';

const SecondSection = ({ matches }) => {
	return (
		<Stack direction='column' spacing={4}>
			<LayoutSection
				animation={styles.visi1}
				matches={matches}
				direction='row'
				mainText='Historical Perspective'
				text='Our group exists for 2000 years. Every year we are developing
				new aproaches in the industry of the new technologies. We are
				the best from the best.'>
				<Card
					sx={{
						minWidth: 400,
						minHeight: 300,
						position: 'relative',
						borderRadius: 10,
						overflow: 'hidden',
						margin: 'auto'
					}}>
					<CardMedia>
						<Image src={img} objectFit='cover' layout='fill' />
					</CardMedia>
				</Card>
			</LayoutSection>
			<LayoutSection
				animation={styles.visi2}
				matches={matches}
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
									width: 200,
									height: 300,
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
