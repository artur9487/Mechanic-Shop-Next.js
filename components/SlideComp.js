/** @format */

import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';
import { Box } from '@mui/system';
import styles from '/styles/Homes.module.scss';

const SlideComp = ({ children, slide }) => {
	const [isVisible, setVisible] = useState(false);
	return (
		<VisibilitySensor
			className={styles.visi}
			active={isVisible ? false : true}
			partialVisibility
			onChange={(isVisiblee) => {
				setVisible(isVisiblee);
			}}>
			<>
				<Box
					sx={{ width: '100%', height: '100%' }}
					className={isVisible ? slide : styles.none}>
					{children}
				</Box>
			</>
		</VisibilitySensor>
	);
};

export default SlideComp;
