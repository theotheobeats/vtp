import { github, logo } from "../assets";

const Heading = () => {
	const menus = ["projects", "|"];

	return (
		<header className="w-full fixed left-0 top-0 z-50 backdrop-blur-sm">
			<div className="flex justify-between m-8">
				<div>
					<img src={logo} width={40} className="mt-2"/>
				</div>
				<div className="flex items-center gap-4 font-semibold">
					{menus.map((item, index) => (
						<a
							href={`#${item}`}
							key={index}
							className="hover:text-slate-400 transition-colors capitalize">
							{item}
						</a>
					))}
					<a className="hover:text-slate-400 transition-colors" href="#">
						<img src={github} width={20} />
					</a>
				</div>
			</div>
		</header>
	);
};

export default Heading;
