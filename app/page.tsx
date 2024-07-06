import Image from "next/image";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-between p-24">
			<Image
				src="/logo.svg"
				alt="Hexjelly Logo"
				width={100}
				height={100}
				priority
				className="w-[200px] h-[200px]"
			/>
		</main>
	);
}
