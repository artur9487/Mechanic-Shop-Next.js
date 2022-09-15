/** @format */

import { Typography, Box } from '@mui/material';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import styles from '/styles/Homes.module.scss';
import Image from 'next/image';
import VisibilitySensor from 'react-visibility-sensor';

interface fourthSection_schema {
	maxWidth600: boolean;
}

const FourthSection: React.FC<fourthSection_schema> = ({ maxWidth600 }) => {
	const [index, setIndex] = useState<number>(0);
	const [isVisible, setVisible] = useState<boolean>(false);

	const handleSelect: (selectedIndex: number) => void = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	interface carouselObject_schema {
		title: string;
		photo: string;
	}

	const carouselObject: carouselObject_schema[] = [
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
						className={isVisible ? styles.visible : styles.none}
						sx={{
							maxWidth: 900,
							margin: 'auto',
							border: !maxWidth600 ? 30 : 15,
							borderColor: 'rgba(206, 218, 236, 0.1)',
							borderRadius: 15,
							overflow: 'hidden',
							boxShadow: '3px 7px 10px rgba(206, 218, 236, 1)'
						}}>
						<Carousel
							controls={false}
							className={styles.carousel}
							activeIndex={index}
							onSelect={handleSelect}>
							{carouselObject.map((item, indx) => {
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
													width: !maxWidth600 ? 400 : 200,
													borderRadius: 20
												}}
												className={styles.contentBox}>
												<Typography
													variant={!maxWidth600 ? 'h4' : 'h6'}
													sx={{ color: 'black' }}>
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
