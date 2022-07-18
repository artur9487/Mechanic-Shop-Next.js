/** @format */

import { Typography, Box } from '@mui/material';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import styles from '/styles/Homes.module.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Image from 'next/image';

const FourthSection = ({ matches3 }) => {
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
			<Box
				sx={{
					position: 'relative',
					width: '100%'
				}}>
				<Box sx={{ maxWidth: 900, margin: 'auto' }}>
					<Carousel
						nextIcon={<ArrowForwardIosIcon sx={iconData} />}
						prevIcon={<ArrowBackIosIcon sx={iconData} />}
						className={[styles.carousel, styles.visi]}
						activeIndex={index}
						onSelect={handleSelect}>
						{obj.map((item, indx) => {
							return (
								<Carousel.Item className={styles.carouselItem} key={indx}>
									<Image
										objectFit='cover'
										layout='fill'
										src={item.photo}
										alt='some img'
									/>
									<Carousel.Caption>
										<Box
											sx={{
												p: 1,
												margin: 'auto',
												width: !matches3 ? 400 : 200,
												borderRadius: 20
											}}
											className={styles.contentBox}>
											<Typography
												variant={!matches3 ? 'h4' : 'h6'}
												sx={{ fontFamily: 'Orbitron', color: 'black' }}>
												{item.title}
											</Typography>
										</Box>
									</Carousel.Caption>
								</Carousel.Item>
							);
						})}
					</Carousel>
				</Box>
			</Box>
		</>
	);
};

export default FourthSection;
