/** @format */
import { Box, Typography } from '@mui/material';
import SlideComp from './SlideComp';
import styles from '/styles/Homes.module.scss';

const LayoutComp = ({ children, title, myRef, matches, matches3 }) => {
	return (
		<>
			<section>
				<Box
					ref={myRef}
					sx={{
						height: !matches ? '100vh' : '100%',
						px: !matches3 ? 5 : 4,
						py: !matches3 ? 5 : 4,
						position: 'relative'
					}}>
					<Box>
						<SlideComp slide={styles.visi}>
							<Typography
								sx={{ color: 'black', mb: 5, fontFamily: 'Orbitron' }}
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
