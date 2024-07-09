import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export type HeaderProps = {
	name: string;
	phone: string;
	email: string;
	linkedInUrl: string;
	githubUrl: string;
	location: string;
};

export function Header({
	email,
	githubUrl,
	linkedInUrl,
	location,
	name,
	phone,
}: HeaderProps) {
	return (
		<header>
			<h1>{name}</h1>
			<ul className="flex justify-between gap-4">
				<li>
					<a href={`mailto:${email}`} className="flex gap-1">
						<Mail />
						{email}
					</a>
				</li>
				<li>
					<a href={`tel:${phone}`} className="flex gap-1">
						<Phone />
						{phone}
					</a>
				</li>
				<li className="flex gap-1">
					<MapPin />
					{location}
				</li>
				<li className="ml-auto">
					<a href={githubUrl} aria-label="GitHub link">
						<Github />
					</a>
				</li>
				<li>
					<a href={linkedInUrl} aria-label="LinkedIn link">
						<Linkedin />
					</a>
				</li>
			</ul>
		</header>
	);
}
