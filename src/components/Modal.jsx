function Modal({ project, closeModal }) {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-all">
			<div className="bg-white p-8 rounded shadow-lg sm:w-[50rem] sm:h-[20rem] w-[25rem] h-[30rem]">
				<div className="flex justify-between mb-4">
					<h2
						className={`${project.colorScheme} text-transparent bg-clip-text text-large sm:text-2xl lg:text-2xl font-bold mt-2 capitalize flex items-center`}>
						{project.name} | {project.tech.map((item, index) => (
                            <img src={item} key={index} width={20} className="ml-2" />
                        ))}
					</h2>
					<button
						onClick={closeModal}
						className="text-red-400 font-xs hover:text-orange-700 items-center">
						x
					</button>
				</div>

				<div className="sm:md:lg:flex sm:md:lg:justify-between sm:md:lg:gap-8">
					{project.image && (
						<img src={project.image} width={300} className="object-cover mb-4 mx-auto" />
					)}

					<div>
						<p className="text-xs">{project.description}</p>
						<div className="flex justify-start mt-4 gap-4">
							<span
								className={`${project.colorScheme} py-1 px-4 text-xs text-white cursor-pointer hover:from-slate-400 hover:to-orange-300 transition-colors border`}>
								{project.url ? (
									<a href={project.url} target="_blank">
										Live Demo
									</a>
								) : (
									<span className="text-white-500">
										Development in progress
									</span>
								)}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
