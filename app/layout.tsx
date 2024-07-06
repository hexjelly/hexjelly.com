import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { twJoin } from "tailwind-merge";
import NavBar from "./components/nav-bar/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "hexjelly.com",
	description: "hexjelly.com",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<link rel="icon" href="favicon.svg" />
			<body
				className={twJoin(
					inter.className,
					"max-w-[900px] mx-auto min-h-screen",
				)}
			>
				<ThemeProvider attribute="class">
					<NavBar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
