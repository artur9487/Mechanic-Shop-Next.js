/** @format */
import { Box, BoxTypeMap, Typography } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { MutableRefObject } from 'react';
import SlideComp from './SlideComp';
import styles from '/styles/Homes.module.scss';

interface layoutComponent_schema {
	children: JSX.Element;
	title: string;
	myRef: MutableRefObject<OverridableComponent<BoxTypeMap<{}, 'div'>>>;
	maxWidth1200: boolean;
	maxWidth600: boolean;
}

const LayoutComponent: React.FC<layoutComponent_schema> = ({
	children,
	title,
	myRef,
	maxWidth1200,
	maxWidth600
}) => {
	return (
		<>
			<section>
				<Box
					ref={myRef}
					sx={{
						height: !maxWidth1200 ? '100vh' : '100%',
						px: !maxWidth600 ? 5 : 4,
						py: !maxWidth600 ? 5 : 4,
						position: 'relative',
						overflow: 'hidden'
					}}>
					<Box>
						<SlideComp slide={styles.visible}>
							<Typography
								sx={{ color: 'black', mb: 5 }}
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

export default LayoutComponent;
