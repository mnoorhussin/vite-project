import React from 'react';

function HeroSection() {
	return (
		<div id="hero" className="flex items-center justify-center flex-col py-20">
			<div className="text-center">
				<h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-slate-800 dark:text-slate-400 font-semibold font-Poppins">
					Hi, This is Mustafa
				</h1>
				<p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi rerum
					quia harum eaque, quae laboriosam quisquam distinctio{' '}
				</p>
				<a
					href="#works"
					className="inline-block px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-slate-800 hover:bg-slate-700 md:text-md "
				>
					See Works
				</a>
			</div>
		</div>
	);
}

export default HeroSection;