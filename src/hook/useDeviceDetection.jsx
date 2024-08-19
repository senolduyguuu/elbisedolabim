import { useEffect, useState } from 'react';

const useDeviceDetection = () => {
	const [device, setDevice] = useState('');

	useEffect(() => {
		const handleDeviceDetection = () => {
			const userAgent = navigator.userAgent.toLowerCase();
			const isMobile = /iphone|android|blackberry|windows phone/g.test(userAgent);
			const isTablet = /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent);
			const isDesktop = !isMobile && !isTablet;

			if (isMobile) {
				setDevice('Mobile');
			} else if (isTablet) {
				setDevice('Tablet');
			} else if (isDesktop) {
				setDevice('Desktop');
			}
		};

		handleDeviceDetection();
		window.addEventListener('resize', handleDeviceDetection);

		return () => {
			window.removeEventListener('resize', handleDeviceDetection);
		};
	}, []);

	return device;
};

export default useDeviceDetection;
