import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";

import agreena from "./agreena.jpg";
import bjerk from "./bjerk.jpg";
import lucidtech from "./lucidtech.jpg";
import oslopride from "./oslopride.jpg";

export type Position = {
	position: string;
	description: ReactNode;
	startDate: Date;
	endDate?: Date;
};

export type Experience = {
	placeName: string;
	placeImage: StaticImageData;
	positions: Position[];
	sector: string;
	technologies: string[];
};

export const experiences: Experience[] = [
	{
		sector:
			"Enabling environmental and economic sustainability in agriculture.",
		placeImage: agreena,
		placeName: "Agreena",
		positions: [
			{
				description: (
					<ul className="flex flex-col gap-1">
						<li className='before:content-["•"] before:text-gray-500 before:left-0 before:absolute relative before:w-2 pl-2.5'>
							Wrote React components for company's design system
						</li>
						<li className='before:content-["•"] before:text-gray-500 before:left-0 before:absolute relative before:w-2 pl-2.5'>
							Maintained and improved React-based web application for farmers to
							track and analyze their historical farm data
						</li>
					</ul>
				),
				position: "Senior Frontend Engineer",
				startDate: new Date("2024-04-15"),
				endDate: undefined,
			},
		],
		technologies: [
			"React",
			"React Query",
			"Typescript",
			"REST API",
			"Vite",
			"Next.js",
			"Tailwind",
			"Zustand",
			"Storybook",
		],
	},
	{
		sector: "Intelligent Document Processing SaaS",
		placeImage: lucidtech,
		placeName: "Lucidtech",
		positions: [
			{
				description: (
					<ul className="flex flex-col gap-1">
						<li className='before:content-["•"] before:text-gray-500 before:left-0 before:absolute relative before:w-2 pl-2.5'>
							Led frontend development on web application allowing users to
							train their own machine learning models with historical data,
							which contributed to the first organic conversion of paid users
						</li>
						<li className='before:content-["•"] before:text-gray-500 before:left-0 before:absolute relative before:w-2 pl-2.5'>
							Created internal component library based on Figma designs
						</li>
						<li className='before:content-["•"] before:text-gray-500 before:left-0 before:absolute relative before:w-2 pl-2.5'>
							Maintained open source Typescript SDK for REST API
						</li>
						<li className='before:content-["•"] before:text-gray-500 before:left-0 before:absolute relative before:w-2 pl-2.5'>
							Wrote custom components for enterprise clients in the app's
							human-in-the-loop platform, using React for UI, and Python and
							Docker for pre-processing logic
						</li>
					</ul>
				),
				position: "Senior Frontend Developer",
				startDate: new Date("2020-09-12"),
				endDate: new Date("2024-04-01"),
			},
		],
		technologies: [
			"React",
			"Python",
			"React Query",
			"Typescript",
			"REST API",
			"Vite",
			"Stitches.js",
			"Zustand",
		],
	},
	{
		positions: [
			{
				endDate: new Date("2020-02-01"),
				startDate: new Date("2018-11-01"),
				position: "Fullstack Developer",
				description: (
					<ul className="flex flex-col gap-">
						<li className='before:content-["•"] before:text-gray-500 before:left-0 before:absolute relative before:w-2 pl-2.5'>
							Took over development of in-progress MVP React Native application,
							working with stakeholders to finish the product by adding missing
							key functionality and removing bugs, resulting in securing another
							round of funding
						</li>
						<li className='before:content-["•"] before:text-gray-500 before:left-0 before:absolute relative before:w-2 pl-2.5'>
							Implemented backend-for-frontend Apollo-based GraphQL server,
							using TypeGraphQL and GraphQL Modules.
						</li>
						<li className='before:content-["•"] before:text-gray-500 before:left-0 before:absolute relative before:w-2 pl-2.5'>
							Created AWS AppSync resolvers and backend logic with automatic
							Terraform deployment
						</li>
						<li className='before:content-["•"] before:text-gray-500 before:left-0 before:absolute relative before:w-2 pl-2.5'>
							Led development on multiple React-based projects, making
							technological and architectural choices for both frontend and
							backend
						</li>
					</ul>
				),
			},
		],
		sector: "Software Agency",
		placeImage: bjerk,
		placeName: "Bjerk",
		technologies: [
			"React",
			"React Native",
			"Typescript",
			"Apollo",
			"Terraform",
			"Webpack",
			"Styled-components",
			"GraphQL",
			"AWS DynamoDB",
			"GCP Firestore",
			"AWS AppSync",
			"Redux",
			"Storybook",
			"Jest",
			"React Testing Library",
		],
	},
];

export const volunteering: Experience[] = [
	{
		sector: "Civil Rights and Social Action",
		positions: [
			{
				description: `Took over as technical lead for internal technology group, communicating with other organizational groups and board members, planning technological changes, helping and guiding fellow developers.
      `,
				position: "Technical Lead",
				startDate: new Date("2021-09-01"),
				endDate: new Date("2022-11-01"),
			},
			{
				description: `
      Worked on the public facing website and created a design system, using React.js, TypeScript and Sanity.io.
      `,

				position: "Fullstack Developer",
				startDate: new Date("2019-09-01"),
				endDate: new Date("2021-09-01"),
			},
		],
		placeImage: oslopride,
		placeName: "Oslo Pride",
		technologies: ["React", "Next.js", "Emotion", "Sanity.io"],
	},
];
