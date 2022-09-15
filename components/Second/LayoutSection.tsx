/** @format */
import { Box, Stack, Typography } from '@mui/material';
import SlideComp from '../SlideComp';
import React from 'react';
import styles from '/styles/Homes.module.scss';
import { ResponsiveStyleValue } from '@mui/system';

interface layoutSection_schema {
	children: JSX.Element;
	maxWidth1200: boolean;
	allignDirection: ResponsiveStyleValue<
		'row' | 'column' | 'row-reverse' | 'column-reverse'
	>;
	text: string;
	mainText: string;
	animation: string;
	maxWidth600: boolean;
}

const LayoutSection: React.FC<layoutSection_schema> = ({
	children,
	maxWidth1200,
	allignDirection,
	text,
	mainText,
	animation,
	maxWidth600
}) => {
	return (
		<Box sx={{ width: '100%', height: '50%' }}>
			<SlideComp slide={animation}>
				<Stack
					className={styles.fade1200}
					direction={!maxWidth1200 ? allignDirection : 'column'}
					spacing={!maxWidth600 ? 5 : 8}
					alignItems='center'
					sx={{ width: '100%', height: '100%' }}>
					<Box
						sx={{
							width: !maxWidth1200 ? '50%' : !maxWidth600 ? '75%' : '100%'
						}}>
						<Stack
							direction='column'
							spacing={2}
							sx={{
								boxShadow: '3px 7px 10px rgba(206, 218, 236, 1)',
								width: !maxWidth600 ? '75%' : '100%',
								margin: 'auto',
								p: 3
							}}>
							<Typography sx={{}} textAlign='center' fontSize={30}>
								{mainText}
							</Typography>
							<Typography sx={{ color: 'black', width: '100%' }}>
								{text}
							</Typography>
						</Stack>
					</Box>
					<Stack
						justifyContent='center'
						alignItems='center'
						sx={{
							width: !maxWidth1200 ? '50%' : '75%',
							height: '100%'
						}}>
						{children}
					</Stack>
				</Stack>
			</SlideComp>
		</Box>
	);
};

export default LayoutSection;
