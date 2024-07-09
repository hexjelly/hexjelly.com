import Image from "next/image";

import type { Experience } from "../data/experiences";
import { PositionItem } from "./position-item";

export type ExperienceListProps = {
	title: string;
	experiences: Experience[];
};

export function ExperienceList({ experiences, title }: ExperienceListProps) {
	return (
		<>
			<h2 className="font-medium text-lg mb-2">{title}</h2>
			<ol className="flex flex-col gap-3">
				{experiences.map((experience) => (
					<li key={experience.placeName} className="flex flex-col">
						<h3 className="flex gap-1.5 text-md items-center">
							<Image
								src={experience.placeImage}
								alt={`${experience.placeName} logo`}
								className="w-5 h-5 rounded-full"
							/>
							{experience.placeName}
						</h3>
						<ol className="flex flex-col gap-3">
							{experience.positions.map((position, index) => (
								<li key={`${experience.placeName}-${index}`}>
									<PositionItem {...position} />
								</li>
							))}
						</ol>
					</li>
				))}
			</ol>
		</>
	);
}
