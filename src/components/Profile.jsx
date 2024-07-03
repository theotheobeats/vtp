import { logo, photo } from "../assets";
import { socials } from "../constants";

const Profile = () => {
	return (
		<section className="relative h-[600px] bg-gradient-to-t from-slate-50 to-slate-200 p-16">
			<div className="absolute md:right-[22rem] lg:bottom-[8rem] bottom-10 right-[4rem] z-10">
				<img src={logo} width={80} />
			</div>
			<div className="md:flex md:justify-center md:gap-12 ">
				<div className="md:w-[25rem] md:sm:lg:text-left text-center">
					<p className="md:pt-32">
						My name is <b>Theo</b>. I'm a <b>Fullstack Developer</b> that
						currently based in Indonesia. I'm super hooked into building cool
						things on the web. And can't be more grateful for this all
						programming scenery which keeps me up to learn anything for the
						lifetime.
					</p>
					<div className="flex gap-4 pt-8 justify-center sm:md:lg:justify-start">
						{socials.map((item, index) => (
							<a href={item.url} key={index}>
								<img
									src={item.icon}
									width={20}
									className="transition-opacity duration-300 hover:opacity-70"
								/>
							</a>
						))}
					</div>
				</div>
				<div className="md:w-[25rem] flex justify-center">
					<img src={photo} width={400} className="rounded-[2.5rem] scale-75" />
				</div>
			</div>
		</section>
	);
};

export default Profile;
