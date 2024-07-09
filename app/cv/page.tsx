import { Header } from "./components/header";
import { PositionItem } from "./components/position-item";
import { experiences, volunteering } from "./data/experiences";
import { personal } from "./data/personal";
import { skills } from "./data/skills";

export default function CV() {
	return (
		<>
			<Header {...personal} />
			<main>
				<section>Hello</section>

				<section>
					<h2>Experience</h2>
					<ol>
						{experiences.map((experience) => (
							<li key={experience.placeName}>
								<ol>
									{experience.positions.map((position, index) => (
										<li key={`${experience.placeName}-${index}`}>
											<PositionItem {...position} />
										</li>
									))}
								</ol>
							</li>
						))}
					</ol>
				</section>

				<section>
					<h2>Volunteering</h2>
					<ol>
						{volunteering.map((experience) => (
							<li key={experience.placeName}>
								<ol>
									{experience.positions.map((position, index) => (
										<li key={`${experience.placeName}-${index}`}>
											<PositionItem {...position} />
										</li>
									))}
								</ol>
							</li>
						))}
					</ol>
				</section>
			</main>

			<footer>
				<h2>Skills</h2>
				<ul className="flex gap-4 flex-wrap">
					{skills.map((skill) => (
						<li key={skill}>{skill}</li>
					))}
				</ul>
			</footer>
		</>
	);
}
