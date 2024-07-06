import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "../theme-switcher/theme-switcher";

export default function NavBar() {
	return (
		<nav className="flex gap-8 items-center p-4">
			<ul className="flex gap-6 items-center">
				<li>
					<Link
						href="/"
						aria-label="About"
						className="hover:text-red-400 dark:hover:text-red-400 flex gap-1.5 items-center transition-colors duration-150"
					>
						<Image
							src="/logo.svg"
							alt="Hexjelly Logo"
							width={100}
							height={100}
							priority
							className="w-[1.25em] h-[1.25em]"
						/>
						About
					</Link>
				</li>
				<li>
					<Link
						href="/cv"
						className="hover:text-red-400 dark:hover:text-red-400 transition-colors duration-150"
					>
						CV
					</Link>
				</li>
			</ul>

			<ThemeSwitcher className="ml-auto" />
		</nav>
	);
}
