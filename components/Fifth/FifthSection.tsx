/** @format */
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Rating from '@mui/material/Rating';
import SlideComp from '../SlideComp';
import styles from '/styles/Homes.module.scss';

interface fifthSection_schema {
	maxWidth1200: boolean;
	maxWidth600: boolean;
}

const FifthSection: React.FC<fifthSection_schema> = ({
	maxWidth1200,
	maxWidth600
}) => {
	const commentArray = [
		{
			avatar: '/Avatars/0.jpg',
			comment:
				'Yeah, the work is very fine, I am glad that I was their customer',
			date: '10 July 2020',
			rating: 4,
			style: styles.slideToRight
		},
		{
			avatar: '/Avatars/1.jpg',
			comment:
				'Oh my, the service was done 100% fine, their served me free oil!',
			date: '10 October 2020',
			rating: 5,
			style: styles.slideToLeft
		},

		{
			avatar: '/Avatars/2.jpg',
			comment: '%@$*( %$(*&@#$ #$%@ (*&%$ @#$89',
			date: '10 October 2021',
			rating: 5,
			style: styles.slideToRight
		},
		{
			avatar: '/Avatars/3.jpg',
			comment: 'I am their customer for 250 years and I was never disappointed',
			date: '21 December 2021',
			rating: 5,
			style: styles.slideToLeft
		}
	];
	return (
		<>
			{commentArray.map((item, indx) => {
				const { avatar, comment, date, rating, style } = item;
				return (
					<Stack
						className={styles.fade1200}
						key={indx}
						direction='column'
						sx={{ width: '100%' }}
						alignItems='center'>
						<SlideComp slide={style}>
							<Stack
								sx={{
									bgcolor: 'white',
									mb: !maxWidth1200 ? 3 : !maxWidth600 ? 6 : 3,
									marginLeft:
										(indx === 1 && !maxWidth1200) ||
										(indx === 3 && !maxWidth1200) ||
										maxWidth1200
											? 'auto'
											: '15%',
									marginRight: !maxWidth1200 ? '15%' : 'auto',
									borderRadius: 10,
									boxShadow: '10px 10px 10px rgb(219, 228, 240)',
									width: !maxWidth1200 ? '50%' : !maxWidth600 ? '80%' : '100%',
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
									{!maxWidth600 ? (
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
										sx={{ width: !maxWidth600 ? '75%' : '100%' }}
										direction='column'>
										<Stack
											direction='row'
											spacing={!maxWidth600 ? 4 : 2}
											alignItems='center'>
											<Typography
												sx={{
													color: 'gray',
													fontSize: !maxWidth600 ? 13 : 12
												}}>
												{date}
											</Typography>
											<Rating name='read-only' value={rating} readOnly />
										</Stack>
										<Typography
											sx={{
												fontSize: !maxWidth600 ? 13 : 12
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
