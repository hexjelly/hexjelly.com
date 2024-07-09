import Image from "next/image";
import { ExperienceList } from "./components/experience-list";
import { Header } from "./components/header";
import { PositionItem } from "./components/position-item";
import { experiences, volunteering } from "./data/experiences";
import { description, personal } from "./data/personal";
import { skills } from "./data/skills";

export default function CV() {
	return (
		<>
			<Header {...personal} className="mb-4" />
			<main className="flex flex-col gap-4">
				<section>
					<p className="text-sm">{description}</p>
				</section>

				<section>
					<ExperienceList experiences={experiences} title="Work experience" />
				</section>

				<section>
					<ExperienceList experiences={volunteering} title="Volunteering" />
				</section>
			</main>

			<footer className="mt-4">
				<h2 className="text-lg font-medium">Skills</h2>
				<ul className="flex gap-x-3 flex-wrap text-sm">
					{skills.map((skill) => (
						<li key={skill}>{skill}</li>
					))}
				</ul>
			</footer>
		</>
	);
}
