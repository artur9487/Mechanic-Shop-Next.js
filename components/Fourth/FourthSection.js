/** @format */

import { Typography, Box } from '@mui/material';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import styles from '/styles/Homes.module.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Image from 'next/image';
import VisibilitySensor from 'react-visibility-sensor';

const FourthSection = ({ matches3 }) => {
	const [index, setIndex] = useState(0);
	const [isVisible, setVisible] = useState(false);

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

	const iconData = { fontSize: !matches3 ? 70 : 40, color: 'white' };

	return (
		<>
			<VisibilitySensor
				active={isVisible ? false : true}
				partialVisibility
				onChange={(isVisiblee) => {
					setVisible(isVisiblee);
				}}>
				<Box
					sx={{
						position: 'relative',
						width: '100%'
					}}>
					<Box
						className={isVisible ? styles.visi : styles.none}
						sx={{
							maxWidth: 900,
							margin: 'auto',
							border: !matches3 ? 30 : 15,
							borderColor: 'rgba(206, 218, 236, 0.1)',
							borderRadius: 15,
							overflow: 'hidden',
							boxShadow: '3px 7px 10px rgba(206, 218, 236, 1)'
						}}>
						<Carousel
							//	nextIcon={<ArrowForwardIosIcon sx={iconData} />}
							//prevIcon={<ArrowBackIosIcon sx={iconData} />}
							controls={false}
							className={styles.carousel}
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
			</VisibilitySensor>
		</>
	);
};

export default FourthSection;
