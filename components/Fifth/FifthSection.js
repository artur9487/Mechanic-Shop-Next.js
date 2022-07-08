/** @format */
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Rating from '@mui/material/Rating';
import SlideComp from '../SlideComp';
import styles from '/styles/Homes.module.scss';

const FifthSection = ({ matches }) => {
	const obj = [
		{
			avatar: '/Avatars/0.jpg',
			comment:
				'Yeah, the work is very fine, I am glad that I was their customer',
			date: '10 July 2020',
			rating: 4
		},
		{
			avatar: '/Avatars/1.jpg',
			comment:
				'Oh my, apart of that the service was done 100% fine, their served me free oil!',
			date: '10 October 2020',
			rating: 5
		},

		{
			avatar: '/Avatars/2.jpg',
			comment: '%@$*( %$(*&@#$ #$%@ (*&%$ @#$89',
			date: '10 October 2021',
			rating: 5
		},
		{
			avatar: '/Avatars/3.jpg',
			comment: 'I am their customer for 250 years and I was never disappointed',
			date: '21 December 2021',
			rating: 5
		}
	];
	return (
		<>
			{obj.map((item, indx) => {
				const { avatar, comment, date, rating } = item;
				return (
					<Stack
						className='fade1200'
						key={indx}
						direction='column'
						sx={{ width: '100%' }}
						alignItems='center'>
						<SlideComp slide={styles.expand}>
							<Stack
								sx={{
									bgcolor: 'white',
									mb: !matches ? 3 : 6,
									marginLeft:
										(indx === 1 && !matches) ||
										(indx === 3 && !matches) ||
										matches
											? 'auto'
											: 'initial',
									marginRight: !matches ? 'initial' : 'auto',
									borderRadius: 10,
									border: 3,
									width: !matches ? '45%' : '80%',
									height: 150,
									p: 3
								}}>
								<Stack
									direction='row'
									alignItems='center'
									spacing={4}
									className={styles.expand2}
									sx={{
										bgcolor: 'white',
										width: '100%',
										height: '100%'
									}}>
									<Box
										sx={{
											position: 'relative',
											width: '25%',
											height: '100%',

											borderRadius: 5,
											overflow: 'hidden'
										}}>
										<Image src={avatar} objectFit='cover' layout='fill' />
									</Box>
									<Stack spacing={2} sx={{ width: '75%' }} direction='column'>
										<Stack direction='row' spacing={4} alignItems='center'>
											<Typography
												sx={{ fontFamily: 'Orbitron', color: 'gray' }}>
												{date}
											</Typography>
											<Rating name='read-only' value={rating} readOnly />
										</Stack>
										<Typography sx={{ fontFamily: 'Orbitron', fontSize: 13 }}>
											{comment}
										</Typography>
									</Stack>
								</Stack>
							</Stack>
						</SlideComp>
					</Stack>
				);
			})}
		</>
	);
};

export default FifthSection;
