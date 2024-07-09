import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import type { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type HeaderProps = {
	name: string;
	phone: string;
	email: string;
	linkedInUrl: string;
	githubUrl: string;
	location: string;
} & HTMLAttributes<HTMLHeadElement>;

export function Header({
	email,
	githubUrl,
	linkedInUrl,
	location,
	name,
	phone,
	className,
	...rest
}: HeaderProps) {
	return (
		<header
			className={twMerge(
				"border-b-black border-b pb-2 flex flex-col gap-2",
				className,
			)}
			{...rest}
		>
			<h1 className="font-medium text-xl">{name}</h1>
			<ul className="flex items-center justify-between gap-4 text-sm">
				<li>
					<a
						href={`mailto:${email}`}
						className="flex items-center gap-1 hover:text-red-400 transition-colors duration-150"
					>
						<Mail className="w-5" />
						{email}
					</a>
				</li>
				<li>
					<a
						href={`tel:${phone}`}
						className="flex items-center gap-1 hover:text-red-400 transition-colors duration-150"
					>
						<Phone className="w-5" />
						{phone}
					</a>
				</li>
				<li className="flex items-center gap-1">
					<MapPin className="w-5" />
					{location}
				</li>
				<li className="ml-auto">
					<a
						href={githubUrl}
						aria-label="GitHub link"
						className="hover:text-red-400 transition-colors duration-150"
					>
						<Github className="w-5" />
					</a>
				</li>
				<li>
					<a
						href={linkedInUrl}
						aria-label="LinkedIn link"
						className="hover:text-red-400 transition-colors duration-150"
					>
						<Linkedin className="w-5" />
					</a>
				</li>
			</ul>
		</header>
	);
}
