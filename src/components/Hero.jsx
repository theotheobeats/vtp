import { useRef } from "react";
import { arrowDown, bubble, flag, grid } from "../assets";
import { ScrollParallax } from "react-just-parallax";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
	const parallaxRef = useRef(null);
	useGSAP(() => {
		gsap.to("#heading", {
			opacity: 1,
			duration: 2,
			transition: "elastic.in",
		});

	}, []);

	return (
		<section className="relative h-[75%] bg-gradient-to-t from-slate-50 to-slate-200">
			<div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-30">
				<img src={grid} className="w-full h-full object-cover" />
			</div>

			<div
				id="heading"
				className="relative max-w-full justify-start pt-[10rem] sm:pt-[15rem] md:pt-[10rem] mx-auto opacity-0"
				ref={parallaxRef}>
				<ScrollParallax isAbsolutelyPositioned>
					<div className="absolute md:top-[3.4rem] md:left-[40rem] top-[6.5rem] left-[20rem]">
						<img
							src={bubble}
							width={150}
							className="w-[7.5rem] md:w-[10rem] lg:w-[10rem]"
						/>
					</div>
				</ScrollParallax>

				<h1 className="text-[5rem] md:text-[8rem] overflow-hidden font-bold text-slate-600 text-center m-4">
					<span className="bg-gradient-to-t from-orange-300 to-orange-600 text-transparent bg-clip-text">
						Fullstack <br />
					</span>{" "}
					Developer.
				</h1>
				<div className="flex justify-center lg:mb-4">
					<p className="pt-0 text-2xl">based in</p>
					<img src={flag} width={40} />
				</div>
			</div>
			<ScrollParallax>
				<div className="flex justify-center items-center opacity-50 md:pt-[5rem] pt-[6.5rem]">
					<img src={arrowDown} width={25} height={25} />
				</div>
			</ScrollParallax>
		</section>
	);
};

export default Hero;
