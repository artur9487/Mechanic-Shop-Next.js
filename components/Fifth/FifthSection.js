/** @format */
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Rating from '@mui/material/Rating';
import SlideComp from '../SlideComp';
import styles from '/styles/Homes.module.scss';

const FifthSection = ({ matches, matches3 }) => {
	const obj = [
		{
			avatar: '/Avatars/0.jpg',
			comment:
				'Yeah, the work is very fine, I am glad that I was their customer',
			date: '10 July 2020',
			rating: 4,
			styl: styles.right
		},
		{
			avatar: '/Avatars/1.jpg',
			comment:
				'Oh my, apart of that the service was done 100% fine, their served me free oil!',
			date: '10 October 2020',
			rating: 5,
			styl: styles.left
		},

		{
			avatar: '/Avatars/2.jpg',
			comment: '%@$*( %$(*&@#$ #$%@ (*&%$ @#$89',
			date: '10 October 2021',
			rating: 5,
			styl: styles.right
		},
		{
			avatar: '/Avatars/3.jpg',
			comment: 'I am their customer for 250 years and I was never disappointed',
			date: '21 December 2021',
			rating: 5,
			styl: styles.left
		}
	];
	return (
		<>
			{obj.map((item, indx) => {
				const { avatar, comment, date, rating, styl } = item;
				return (
					<Stack
						className={styles.fade1200}
						key={indx}
						direction='column'
						sx={{ width: '100%' }}
						alignItems='center'>
						<SlideComp slide={styl}>
							<Stack
								sx={{
									bgcolor: 'white',
									mb: !matches ? 3 : 6,
									marginLeft:
										(indx === 1 && !matches) ||
										(indx === 3 && !matches) ||
										matches
											? 'auto'
											: '15%',
									marginRight: !matches ? '15%' : 'auto',
									borderRadius: 10,
									boxShadow: '10px 10px 10px rgb(219, 228, 240)',
									width: !matches ? '50%' : !matches3 ? '80%' : '100%',
									height: 150,
									p: 3
								}}>
								<Stack
									direction='row'
									alignItems='center'
									spacing={4}
									sx={{
										bgcolor: 'white',
										width: '100%',
										height: '100%'
									}}>
									{!matches3 ? (
										<Box
											sx={{
												position: 'relative',
												width: '25%',
												height: '100%',
												borderRadius: 5,
												overflow: 'hidden'
											}}>
											<Image
												src={avatar}
												objectFit='cover'
												layout='fill'
												alt='image'
											/>
										</Box>
									) : null}

									<Stack
										spacing={2}
										sx={{ width: !matches3 ? '75%' : '100%' }}
										direction='column'>
										<Stack
											direction='row'
											spacing={!matches3 ? 4 : 2}
											alignItems='center'>
											<Typography
												sx={{
													fontFamily: 'Orbitron',
													color: 'gray',
													fontSize: !matches3 ? 13 : 12
												}}>
												{date}
											</Typography>
											<Rating name='read-only' value={rating} readOnly />
										</Stack>
										<Typography
											sx={{
												fontFamily: 'Orbitron',
												fontSize: !matches3 ? 13 : 12
											}}>
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
