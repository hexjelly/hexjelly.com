import { chromium } from "playwright";

import { spawn } from "node:child_process";
import type { Page } from "@playwright/test";

// Function to wait for a specified amount of time
const delay = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

// Retry logic for page.goto
const gotoWithRetries = async (
	page: Page,
	url: string,
	retries = 5,
	delayMs = 1000,
) => {
	for (let i = 0; i < retries; i++) {
		try {
			await page.goto(url);
			return;
		} catch (error) {
			console.error(`Attempt ${i + 1} failed`);
			if (i < retries - 1) {
				await delay(delayMs);
			} else {
				throw error;
			}
		}
	}
};

(async () => {
	// Start Next.js development server
	const nextDevProcess = spawn("npm", ["run", "dev"], { stdio: "inherit" });
	// Handle unexpected termination and ensure the server is killed
	const handleExit = () => {
		nextDevProcess.kill();
		process.exit();
	};

	process.on("SIGINT", handleExit);
	process.on("SIGTERM", handleExit);
	process.on("exit", handleExit);

	const browser = await chromium.launch();

	try {
		await delay(3000);
		const page = await browser.newPage();
		page.emulateMedia({ media: "print" });

		// Try to navigate to the URL with retries
		await gotoWithRetries(page, "http://127.0.0.1:3000", 10, 2000);

		// Perform your tasks with the page here...
		await page.pdf({
			displayHeaderFooter: false,
			format: "A4",
			preferCSSPageSize: true,
			path: "./cv.pdf",
		});
	} catch (error) {
		console.error("Failed to navigate to the page:", error);
	} finally {
		await browser.close();
		nextDevProcess.kill();
		console.log("Next.js server closed");
		process.exit();
	}
})();
