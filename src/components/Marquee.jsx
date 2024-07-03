import { useGSAP } from "@gsap/react";
import {
	bootstrap,
	javascript,
	laravel,
	mysql,
	nextjs,
	php,
	postgres,
	react,
	tailwind,
	typescript,
} from "../assets";
import gsap from "gsap";

const Marquee = () => {
	useGSAP(() => {
		gsap.to(".mx-4", {
            scrollTrigger: {

            },
			duration: 2,
			transition: "elastic.in",
		});
	}, []);

	return (
		<section className="relative h-[125px] bg-slate-100 border-b z-2">
			<div className="text-xs text-gray-400 italic justify-center flex p-4">
				[ TECH STACK USED ]
			</div>
			<div className="relative flex items-center justify-center overflow-x-hidden">
				<div className="flex whitespace-nowrap">
					<span className="mx-4">
						<img src={javascript} width={40} />
					</span>
					<span className="mx-4">
						<img src={typescript} width={40} />
					</span>
					<span className="mx-4">
						<img src={nextjs} width={40} />
					</span>
					<span className="mx-4">
						<img src={react} width={40} />
					</span>
					<span className="mx-4">
						<img src={php} width={40} />
					</span>
					<span className="mx-4">
						<img src={laravel} width={40} />
					</span>
					<span className="mx-4">
						<img src={tailwind} width={40} />
					</span>
					<span className="mx-4">
						<img src={bootstrap} width={40} />
					</span>
					<span className="mx-4">
						<img src={mysql} width={40} />
					</span>
					<span className="mx-4">
						<img src={postgres} width={40} />
					</span>
				</div>
			</div>
		</section>
	);
};

export default Marquee;
