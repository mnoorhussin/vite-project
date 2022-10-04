import React from 'react';
import { MdWeb } from 'react-icons/md';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

export default [
	{
		title: 'Web Design',
		icon: <MdWeb className="w-full h-full" />,
		description:
			'Document Object Model (DOM), Responsive Web Design, Html5, Bootstrap (Front-End Framework), Cascading Style Sheets (CSS)',
	},
	{
		title: 'Ui Design',
		icon: <FaHandHoldingHeart className="w-full h-full" />,
		description:
			'Adobe XD, UX Research, Usability Testing, User Experience (UX), User Experience Design (UXD), Figma, Wireframe, Prototype',
	},
	{
		title: 'Web Development',
		icon: <VscCode className="w-full h-full" />,
		description:
			'HTML/CSS, JavaScript, React, Analytical, Responsive design, Front-End Web Development, Test-Driven Development, Object-Oriented Programming (OOP)',
	},
];