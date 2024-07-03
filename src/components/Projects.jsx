import { useGSAP } from "@gsap/react";
import { grid } from "../assets";
import gsap from "gsap";
import { useState } from "react";
import { projects } from "../constants/index.js";
import Modal from "./Modal";

const Projects = () => {
	const [selectedProject, setSelectedProject] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleCardClick = (project) => {
		setSelectedProject(project);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedProject(null);
	};

	useGSAP(() => {
		gsap.from("#ports", {
			scrollTrigger: {
				trigger: "#ports",
			},
			opacity: 0,
			scale: 1.5,
			duration: 2,
			ease: "ease.inOut",
		});

		gsap.to("#h1", {
			opacity: 1,
			duration: 2,
			ease: "ease.inOut",
		});
	}, []);

	return (
		<section
			id="projects"
			className="relative bg-gradient-to-t from-slate-50 to-slate-200">
			<div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-30">
				<img src={grid} className="w-full h-full object-cover" />
			</div>
			<div className="w-full p-12 flex justify-center">
				<h1
					id="h1"
					className="text-[1.5rem] text-center lg:text-[2.5rem] lg:text-center font-bold opacity-0">
					Some exciting{" "}
					<span className="bg-gradient-to-t text-transparent from-orange-300 to-orange-600 transparent bg-clip-text">
						projects
					</span>{" "}
					I created in the past.
				</h1>
			</div>
			<div
				id="ports"
				className="p-4md:lg:sm:w-full flex justify-center items-center overflow-hidden">
				<div className="grid md:h-[32.5rem] md:w-[50rem] grid-cols-10 grid-rows-10 gap-4 cursor-pointer">
					{projects.map((item, index) => (
						<a
							key={index}
							className={`${item.className} md:text-xl text-xs p-4`}
							onClick={() => handleCardClick(item)}>
							<div className={`${item.divClass}`}>{item.name}</div>
						</a>
					))}
				</div>
			</div>

			<p className="text-slate-300 flex justify-center text-xs p-8">
				<span className="font-bold italic">Click the box </span>
				<span className="ml-1">to see details about the project.</span>
			</p>

			{isModalOpen && selectedProject && (
				<Modal project={selectedProject} closeModal={closeModal} />
			)}
		</section>
	);
};

export default Projects;
