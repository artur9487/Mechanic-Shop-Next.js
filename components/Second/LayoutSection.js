/** @format */
import { Box, Stack, Typography } from '@mui/material';
import SlideComp from '../SlideComp';

const LayoutSection = ({
	children,
	matches,
	direction,
	text,
	mainText,
	animation
}) => {
	return (
		<Box sx={{ width: '100%', height: '50%' }}>
			<SlideComp slide={animation}>
				<Stack
					className='fade1200'
					direction={!matches ? direction : 'column'}
					spacing={!matches ? 0 : 3}
					alignItems='center'
					sx={{ width: '100%', height: '100%' }}>
					<Box sx={{ width: !matches ? '50%' : '75%' }}>
						<Stack
							direction='column'
							spacing={2}
							sx={{ width: '75%', margin: 'auto' }}>
							<Typography
								sx={{ fontFamily: 'Orbitron' }}
								textAlign='center'
								fontSize={30}>
								{mainText}
							</Typography>
							<Typography
								sx={{ color: 'black', width: '100%', fontFamily: 'Orbitron' }}>
								{text}
							</Typography>
						</Stack>
					</Box>
					<Stack
						justifyContent='center'
						alignItems='center'
						sx={{
							width: !matches ? '50%' : '75%',
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
