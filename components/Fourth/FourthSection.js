/** @format */

import { Typography, Box } from '@mui/material';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import styles from '/styles/Homes.module.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const FourthSection = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	const obj = [
		{
			title: 'Metropolian City',
			photo: '/Work/0.jpg'
		},
		{
			title: 'Super crazy City',
			photo: '/Work/1.jpg'
		},
		{
			title: 'Some cool City',
			photo: '/Work/2.jpg'
		}
	];

	const iconData = { fontSize: 70, color: 'white' };

	return (
		<>
			<Carousel
				nextIcon={<ArrowForwardIosIcon sx={iconData} />}
				prevIcon={<ArrowBackIosIcon sx={iconData} />}
				className={(styles.carousel, styles.visi)}
				activeIndex={index}
				onSelect={handleSelect}>
				{obj.map((item, indx) => {
					return (
						<Carousel.Item key={indx}>
							<img className={styles.workImg} src={item.photo} alt='some img' />
							<Carousel.Caption>
								<Box
									sx={{
										p: 1,
										margin: 'auto',
										width: 400,
										borderRadius: 20
									}}
									className={styles.contentBox}>
									<Typography
										variant='h4'
										sx={{ fontFamily: 'Orbitron', color: 'black' }}>
										{item.title}
									</Typography>
								</Box>
							</Carousel.Caption>
						</Carousel.Item>
					);
				})}
			</Carousel>
		</>
	);
};

export default FourthSection;
