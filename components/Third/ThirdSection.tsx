/** @format */

import {
	Typography,
	CardContent,
	Card,
	CardMedia,
	Stack,
	Grid
} from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import HighlightIcon from '@mui/icons-material/Highlight';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ScreenRotationAltIcon from '@mui/icons-material/ScreenRotationAlt';
import CountUp from 'react-countup';
import SlideComp from '../SlideComp';
import VisibilitySensor from 'react-visibility-sensor';
import { useState, useRef, createRef, MutableRefObject, Ref } from 'react';
import styles from '/styles/Homes.module.scss';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface thirdSection_schema {
	maxWidth1200: boolean;
	maxWidth600: boolean;
}

const ThirdSection: React.FC<thirdSection_schema> = ({
	maxWidth1200,
	maxWidth600
}) => {
	const cardRef = useRef(null);
	const [isVisible, setVisible] = useState<boolean>(false);
	const iconSize: number = 100;

	const obj = [
		{
			name: 'Repairings',
			comp: <BuildIcon style={{ fontSize: iconSize }} />,
			style: styles.thirdCard0
		},
		{
			name: 'Laser cuts',
			comp: <HighlightIcon style={{ fontSize: iconSize }} />,
			style: styles.thirdCard1
		},
		{
			name: 'Parts enchange',
			comp: <ScreenRotationAltIcon style={{ fontSize: iconSize }} />,
			style: styles.thirdCard2
		},
		{
			name: 'Refueling',
			comp: <MeetingRoomIcon style={{ fontSize: iconSize }} />,
			style: styles.thirdCard3
		}
	];

	const myRefs = useRef([]);

	myRefs.current = obj.map(
		(element, indx) => myRefs.current[indx] ?? createRef()
	);

	return (
		<>
			<Grid
				className={styles.fade900}
				justifyContent='center'
				container
				direction='row'
				sx={{
					width: !maxWidth1200 ? '80%' : '100%',
					margin: 'auto'
				}}>
				{obj.map((item, indx) => {
					return (
						<Grid
							sx={{ p: 1 }}
							key={indx}
							ref={myRefs.current[indx]}
							direction='row'
							justifyContent='center'
							alignItems='center'
							xs={6}
							md={3}
							container
							item>
							<SlideComp slide={item.style}>
								<Stack
									direction='row'
									justifyContent='center'
									alignItems='center'
									sx={{
										width: '100%',
										height: 300
									}}>
									<Card
										key={indx}
										sx={{
											boxShadow: '10px 10px 10px rgb(219, 228, 240)',
											borderRadius: 5,
											width: 200,
											height: !maxWidth600 ? '100%' : '90%'
										}}>
										<CardMedia
											sx={{
												height: '70%',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center'
											}}>
											{item.comp}
										</CardMedia>
										<CardContent>
											<Typography sx={{ fontSize: 17 }} textAlign='center'>
												{item.name}
											</Typography>
										</CardContent>
									</Card>
								</Stack>
							</SlideComp>
						</Grid>
					);
				})}
			</Grid>
			<VisibilitySensor
				active={isVisible ? false : true}
				partialVisibility
				onChange={(isVisiblee) => {
					setVisible(isVisiblee);
				}}>
				<Stack
					direction='row'
					justifyContent='center'
					sx={{
						mt: !maxWidth600 ? 10 : 3,
						width: '100%',
						height: 250
					}}>
					<Card
						className={styles.thirdCard4}
						ref={cardRef}
						sx={{
							boxShadow: '10px 10px 10px rgba(219, 228, 240)',
							height: !maxWidth600 ? '100%' : '80%',
							width: 400,
							borderRadius: 5
						}}>
						<CardContent>
							<Typography
								sx={{ fontSize: 17, mb: 3, mt: 2 }}
								textAlign='center'>
								Satisfied Customers:
							</Typography>

							<Typography
								sx={{
									fontSize: !maxWidth600 ? 60 : 40
								}}
								textAlign='center'>
								<>{isVisible ? <CountUp end={526784} /> : null}</>
							</Typography>
						</CardContent>
					</Card>
				</Stack>
			</VisibilitySensor>
		</>
	);
};

export default ThirdSection;
