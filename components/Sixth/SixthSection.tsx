/** @format */
import { Box, Stack, Typography } from '@mui/material';
import SlideComp from '../SlideComp';
import styles from '/styles/Homes.module.scss';

interface sixthSection_schema {
	maxWidth1200: boolean;
	maxWidth600: boolean;
}

const SixthSection: React.FC<sixthSection_schema> = ({
	maxWidth1200,
	maxWidth600
}) => {
	interface adressArray_schema {
		variant1:
			| 'h3'
			| 'h4'
			| 'h5'
			| 'h6'
			| 'button'
			| 'caption'
			| 'h1'
			| 'h2'
			| 'inherit'
			| 'overline'
			| 'subtitle1'
			| 'subtitle2'
			| 'body1'
			| 'body2';
		variant2:
			| 'h3'
			| 'h4'
			| 'h5'
			| 'h6'
			| 'button'
			| 'caption'
			| 'h1'
			| 'h2'
			| 'inherit'
			| 'overline'
			| 'subtitle1'
			| 'subtitle2'
			| 'body1'
			| 'body2';
		text: string;
	}

	const adressArray: adressArray_schema[] = [
		{
			variant1: 'h3',
			variant2: 'h4',
			text: '+12345'
		},
		{
			variant1: 'h3',
			variant2: 'h4',
			text: 'Adress:'
		},
		{
			variant1: 'h5',
			variant2: 'h6',
			text: 'Mechanic Street 42'
		},
		{
			variant1: 'h3',
			variant2: 'h4',
			text: 'Hours of opening:'
		},
		{
			variant1: 'h5',
			variant2: 'h6',
			text: 'monday-Friday 7:00-16:00'
		},
		{
			variant1: 'h5',
			variant2: 'h6',
			text: 'Saturday 7:00-14:00'
		},
		{
			variant1: 'h5',
			variant2: 'h6',
			text: 'Sunday Closet'
		}
	];

	return (
		<>
			<Stack
				className={styles.fade1200}
				direction={!maxWidth1200 ? 'row' : 'column'}
				alignItems='center'
				spacing={4}
				sx={{ width: '100%', height: !maxWidth1200 ? '80%' : 1000 }}>
				<Box
					sx={{
						width: !maxWidth1200 ? '50%' : !maxWidth600 ? '75%' : '100%',
						height: !maxWidth1200 ? '80%' : !maxWidth600 ? '45%' : '35%'
					}}>
					<SlideComp slide={styles.cardItem0}>
						<Box
							sx={{
								width: '100%',
								height: '100%',
								border: !maxWidth600 ? 30 : 15,
								borderColor: 'rgba(206, 218, 236, 0.1)',
								borderRadius: 5,
								overflow: 'hidden',
								boxShadow: '3px 7px 10px rgba(206, 218, 236, 1)'
							}}>
							<Box
								sx={{
									width: '100%',
									height: '100%',
									borderRadius: 5,
									overflow: 'hidden'
								}}>
								<iframe
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160874.47389090277!2d21.214565426418673!3d52.25964653855763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1649096325634!5m2!1spl!2spl'
									width='100%'
									height='100%'
									loading='lazy'></iframe>
							</Box>
						</Box>
					</SlideComp>
				</Box>
				<Box
					sx={{
						width: !maxWidth1200 ? '50%' : !maxWidth600 ? '75%' : '100%',
						height: !maxWidth1200 ? '80%' : '45%'
					}}>
					<SlideComp slide={styles.cardItem05}>
						<Stack
							direction='column'
							sx={{
								width: !maxWidth600 ? '80%' : '100%',
								margin: 'auto',
								height: '100%',
								boxShadow: '3px 7px 10px rgba(206, 218, 236, 1)',
								borderRadius: 5,
								p: 4
							}}>
							<Stack
								sx={{ margin: 'auto', height: '100%' }}
								direction='column'
								justifyContent='space-evenly'>
								{adressArray.map((item, indx) => {
									const { variant1, variant2, text } = item;
									return (
										<Typography
											key={indx}
											variant={!maxWidth600 ? variant1 : variant2}>
											{text}
										</Typography>
									);
								})}
							</Stack>
						</Stack>
					</SlideComp>
				</Box>
			</Stack>

			<Stack
				justifyContent='center'
				alignItems='center'
				sx={{
					width: '100vw',
					height: 100,
					position: 'absolute',
					left: 0,
					bottom: 0,
					slideToRight: 0,
					bgcolor: 'black'
				}}>
				<Typography sx={{ color: 'white' }}>
					@2022 All Rights Reserved
				</Typography>
			</Stack>
		</>
	);
};

export default SixthSection;
