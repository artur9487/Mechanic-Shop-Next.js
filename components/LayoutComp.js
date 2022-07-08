/** @format */
import { Box, Typography } from '@mui/material';
import SlideComp from './SlideComp';
import styles from '/styles/Homes.module.scss';

const LayoutComp = ({ children, title, myRef, matches }) => {
	return (
		<>
			<section>
				<Box
					ref={myRef}
					sx={{
						height: !matches ? '100vh' : '100%',
						p: 5,
						position: 'relative'
					}}>
					<Box>
						<SlideComp slide={styles.visi}>
							<Typography
								sx={{ color: 'black', mb: 7, fontFamily: 'Orbitron' }}
								variant='h4'
								fontWeight={600}
								textAlign='center'>
								{title}
							</Typography>
						</SlideComp>
					</Box>
					{children}
				</Box>
			</section>
		</>
	);
};

export default LayoutComp;
