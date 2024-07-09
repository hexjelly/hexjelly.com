"use client";

import { useTheme } from "next-themes";
import { type HTMLProps, useEffect, useState } from "react";

export type ThemeSwitcherProps = Omit<
	HTMLProps<HTMLSelectElement>,
	"onChange" | "value" | "children"
>;

export function ThemeSwitcher(props: ThemeSwitcherProps) {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<select value={theme} onChange={(e) => setTheme(e.target.value)} {...props}>
			<option value="system">System</option>
			<option value="dark">Dark</option>
			<option value="light">Light</option>
		</select>
	);
}
