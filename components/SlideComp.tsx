/** @format */

import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';
import { Box } from '@mui/system';
import styles from '/styles/Homes.module.scss';

interface slideComp_schema {
	children: JSX.Element;
	slide: string;
}

const SlideComp: React.FC<slideComp_schema> = ({ children, slide }) => {
	const [isVisible, setVisible] = useState<boolean>(false);
	return (
		<VisibilitySensor
			className={styles.visible}
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
