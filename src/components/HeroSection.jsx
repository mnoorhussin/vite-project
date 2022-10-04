import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';




function HeroSection() {
	return (
		<div id="hero" className="flex items-center justify-center flex-col py-20">
			<div className="text-center">
				<h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-slate-800 dark:text-slate-400 font-semibold font-Poppins">
					Hi, This is Mustafa
				</h1>
				<p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">
					Junior Front-End Developer with 2+ years of experience in the Technology domain.
					Supportive and enthusiastic team player .
					Ability and willingness to innovate and learn new technologies, quick learner passionate about development. {' '}
				</p>
				<a
					href="#works"
					className="inline-block px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-slate-800 hover:bg-slate-700 md:text-md "
				>
					See Works
				</a>
				<div className="pt-3">
					<a href="https://github.com/mnoorhussin"
						className="inline-block px-4 py-2  border border-transparent text-base font-medium rounded-md text-white bg-slate-800 hover:bg-slate-700 md:text-md "
					>
						< AiOutlineGithub
						/>
						</a>
						<br />
						<a
							href="https://github.com/mnoorhussin"
							className="inline-block px-4 py-2  border border-transparent text-base font-medium rounded-md text-white bg-slate-800 hover:bg-slate-700 md:text-md "
						>
							< AiOutlineTwitter
							/>
						</a>
				</div>

			</div>
		</div>
	);
}

export default HeroSection;