// import TopHeader from "../components/TopHeader"
import useDeviceDetection from "../hook/useDeviceDetection";

const Header = () => {
	const device = useDeviceDetection();
	return (
		<header>
			{/* <TopHeader></TopHeader> */}
			{device === 'Mobile' && <p>Mobil cihazdasınız</p>}
			{device === 'Tablet' && <p>Tablet cihazdasınız</p>}
			{device === 'Desktop' && <p>Masaüstü cihazdasınız</p>}
		</header>

	)
}
export default Header