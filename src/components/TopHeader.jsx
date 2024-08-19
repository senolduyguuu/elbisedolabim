import EmailVector from "../assets/HeaderImg/emailVector.png";
import PhoneVector from "../assets/HeaderImg/PhoneVector.png";

const TopHeader = () => {
	return (
		<div className="hidden md:flex bg-darkBackgroundColor text-white py-3 px-4 sm:px-6 md:px-10 lg:px-[10.313rem] w-full flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
			<div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 md:space-x-8">
				<div className="flex items-center space-x-2">
					<img src={PhoneVector} alt="Phone Icon" className="w-4 h-4" />
					<p className="text-sm sm:text-base">(225) 555-0118</p>
				</div>
				<div className="flex items-center space-x-2">
					<img src={EmailVector} alt="Email Icon" className="w-4 h-4" />
					<p className="text-sm sm:text-base">michelle.rivera@example.com</p>
				</div>
			</div>
			<div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 md:space-x-8 text-center md:text-left">
				<p className="text-xs sm:text-sm md:text-base">Follow Us and get a chance to win 80% off</p>
			</div>
			<div className="flex items-center justify-center space-x-4">
				<p className="text-sm sm:text-base">Follow Us:</p>
				<span><i className="fab fa-instagram"></i></span>
				<span><i className="fab fa-facebook"></i></span>
				<span><i className="fab fa-youtube"></i></span>
				<span><i className="fab fa-twitter"></i></span>
			</div>
		</div>
	);
};

export default TopHeader;
